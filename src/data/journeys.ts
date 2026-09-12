import documents from "./itinerary-documents.json";

export interface MapPoint {
  name: string;
  /** [lng, lat] — the order MapLibre expects. */
  coordinates: [number, number];
  label?: string;
}

export interface Route {
  start?: MapPoint;
  points: MapPoint[];
  end?: MapPoint;
}

export interface SourceBlock {
  type: string;
  text: string;
  style: string;
  bold: boolean;
}

export interface DocumentEntry {
  slug: string;
  title: string;
  category: string;
  activity: string;
  days: number | null;
  region: string;
  image: string;
  alt: string;
  featured: boolean;
  summary: string;
  sourceFile: string;
  sourceSha256: string;
  blocks: SourceBlock[];
}

export interface Journey extends DocumentEntry {
  days: number;
  activity: "safari" | "trek";
  priceSummary: string[];
}

/** Text is transcribed from the 17 DOCX files added on 12 September 2026 at 17:20 EAT.
 * Keep original spelling, punctuation, price qualifications, and headings intact.
 * Documents with no published prices must never inherit another itinerary's rate.
 */
export const catalogue: DocumentEntry[] = documents;
export const journeys: Journey[] = catalogue
  .filter((entry) => entry.activity !== "guide")
  .map((entry) => ({
    ...entry,
    days: entry.days!,
    activity: entry.activity as "safari" | "trek",
    priceSummary: priceSummary(entry),
  }));
export const journeyGuides = catalogue.filter((entry) => entry.activity === "guide");

export function categoryAnchor(category: string): string {
  return category.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// ---------------------------------------------------------------------------
// Reading the source documents
//
// Word gives us a flat run of paragraphs, and the itineraries lean on line
// breaks inside a paragraph as much as on the paragraphs themselves — a single
// block routinely carries the tail of one day and the heading of the next. So
// everything below works a line at a time, and never rewrites the words: it
// only decides which shelf each line belongs on.
// ---------------------------------------------------------------------------

interface Line {
  text: string;
  bold: boolean;
  list: boolean;
  id: string;
}

function lines(entry: DocumentEntry): Line[] {
  return entry.blocks.flatMap((block, blockIndex) =>
    block.text.split("\n").flatMap((raw, lineIndex) => {
      const text = raw.trim();
      if (!text) return [];
      return [{
        text,
        bold: block.bold,
        list: block.style === "List Paragraph",
        id: `source-${blockIndex}-${lineIndex}`,
      }];
    }),
  );
}

/** "Day 1 — Arrival", "Days 6–7 — Serengeti", "Day 0: Pre-trek Briefing", "Day 1- Arrive". */
const DAY_HEADING = /^(Days?)\s*(\d+)\s*(?:[–—-]\s*(\d+))?\s*(?:[—–:|-]+\s*)?(.*)$/i;
/** The four section headings every document uses, in each of their spellings. */
const SECTION_HEADING = /^(Prices?|Inclusive|Inclusions|Included|Exclusive|Exclusions|Excluded)\s*:?\s*$/i;
const SEASON_HEADING = /^(Low|High)\s+Season\b\s*[-–—]?\s*(.*)$/i;
/** Labelled one-liners: the trek stats, and the stay/meals footer on safari days. */
const FACT = /^(Overnight|Accommodation|Meals included|Meals|Elevation|Distance|Hiking Time|Walking Time|Climbing Time|Habitat|Ascent|Descent|Max\.?\s*Altitude|Down to|Highlight|Perfect for)\b\s*:?\s*(.*)$/i;

export interface Fact {
  label: string;
  value: string;
}

export interface Day {
  /** Numeral shown in the left rail. Day 0 is the pre-trek briefing. */
  n: number;
  /** Human label, exactly as the document numbers it: "Day 3", "Days 8–12". */
  label: string;
  title: string;
  /** Some documents put a second bold line under the day heading. */
  subtitle?: string;
  paragraphs: string[];
  /** Elevation, distance, hiking time, habitat — whatever that day published. */
  facts: Fact[];
  overnight?: string;
  /** "Overnight" or "Accommodation", whichever the document wrote. */
  stayLabel?: string;
  meals?: string;
  /** "Meals" or "Meals included", likewise. */
  mealsLabel?: string;
  id: string;
}

export interface PriceGroup {
  /** "Low Season" / "High Season" where the document separates them. */
  season?: string;
  lines: string[];
}

/** A bold-headed run of prose that is neither a day nor one of the four
 *  standard sections — "The route", "Extend Your Journey", and every
 *  excursion in the Zanzibar guide. */
export interface Section {
  id: string;
  title: string;
  /** ALL-CAPS heading the section was filed under, for the guides. */
  group?: string;
  /** A second bold line under the heading, where the document has one. */
  subtitle?: string;
  paragraphs: string[];
  facts: Fact[];
  items: string[];
}

export interface Itinerary {
  /** "15 Days / 14 Nights", "6 Days | Arusha • Ndutu • …". */
  meta: string[];
  destinations: string[];
  intro: string[];
  days: Day[];
  prices: PriceGroup[];
  /** Price qualifications that carry no figure, e.g. the family basis. */
  priceNotes: string[];
  inclusions: string[];
  exclusions: string[];
  sections: Section[];
}

function splitFact(text: string): Fact | null {
  const match = text.match(FACT);
  if (!match) return null;
  const value = match[2].trim();
  // "Down to 3700m/12,200ft" carries its value without a colon.
  if (!value) return null;
  return { label: match[1].replace(/\s+/g, " "), value };
}

function isDayHeading(line: Line): boolean {
  const match = line.text.match(DAY_HEADING);
  // Prose occasionally opens with "Day ...", so a heading also has to be short
  // and unpunctuated — the real ones are a numeral, a dash and a place.
  return match != null && line.text.length < 120 && !/[.!?]$/.test(line.text);
}

/** Read one document into the shape the itinerary page lays out. */
export function parseItinerary(entry: DocumentEntry): Itinerary {
  const result: Itinerary = {
    meta: [],
    destinations: [],
    intro: [],
    days: [],
    prices: [],
    priceNotes: [],
    inclusions: [],
    exclusions: [],
    sections: [],
  };

  type Phase = "intro" | "days" | "prices" | "inclusions" | "exclusions" | "section";
  let phase: Phase = "intro";
  let day: Day | null = null;
  let section: Section | null = null;
  let group: string | undefined;
  let priceGroup: PriceGroup | null = null;

  for (const line of lines(entry)) {
    const text = line.text;

    // The section headings win over everything: they close the day list.
    const sectionHeading = text.match(SECTION_HEADING);
    if (sectionHeading) {
      day = null;
      section = null;
      priceGroup = null;
      const kind = sectionHeading[1].toLowerCase();
      phase = kind.startsWith("price") ? "prices" : kind.startsWith("exclu") ? "exclusions" : "inclusions";
      continue;
    }

    if (phase === "prices") {
      const season = text.match(SEASON_HEADING);
      if (season) {
        priceGroup = { season: `${season[1]} Season`, lines: [] };
        result.prices.push(priceGroup);
        // "Low Season - $6,290 for the entire family" states its rate inline.
        if (season[2].trim()) priceGroup.lines.push(season[2].trim());
        continue;
      }
      if (text.includes("$")) {
        if (!priceGroup) {
          priceGroup = { lines: [] };
          result.prices.push(priceGroup);
        }
        priceGroup.lines.push(text);
        continue;
      }
      result.priceNotes.push(text);
      continue;
    }

    if (phase === "inclusions" || phase === "exclusions") {
      result[phase].push(text);
      continue;
    }

    if (isDayHeading(line)) {
      const match = text.match(DAY_HEADING)!;
      const from = Number(match[2]);
      const to = match[3];
      day = {
        n: from,
        label: to ? `Days ${from}–${to}` : `Day ${from}`,
        title: match[4].trim(),
        paragraphs: [],
        facts: [],
        id: line.id,
      };
      result.days.push(day);
      section = null;
      phase = "days";
      continue;
    }

    const fact = splitFact(text);
    if (fact) {
      const target = day ?? section;
      if (target) {
        if (day && /^(overnight|accommodation)$/i.test(fact.label)) {
          day.overnight = fact.value;
          day.stayLabel = fact.label;
        } else if (day && /^meals/i.test(fact.label)) {
          day.meals = fact.value;
          day.mealsLabel = fact.label;
        }
        else target.facts.push(fact);
        continue;
      }
    }

    if (line.list) {
      if (section) section.items.push(text);
      else if (day) day.paragraphs.push(text);
      else result.intro.push(text);
      continue;
    }

    // A bold line that is not a day heading opens a section of its own — but
    // only once the itinerary proper has started; up top it is the document's
    // own title block.
    if (line.bold && phase !== "intro") {
      // A bold line directly under a day heading is that day's subtitle.
      if (day && day.paragraphs.length === 0 && day.facts.length === 0 && !day.subtitle) {
        day.subtitle = text;
        continue;
      }
      if (isGroupHeading(text)) {
        group = text;
        section = null;
        phase = "section";
        continue;
      }
      if (isHeadingish(text)) {
        // Two bold lines in a row are a heading and its strapline, not two
        // sections one of which happens to be empty.
        if (section && !section.subtitle && section.paragraphs.length === 0 && section.facts.length === 0 && section.items.length === 0) {
          section.subtitle = text;
          continue;
        }
        section = { id: line.id, title: text, group, paragraphs: [], facts: [], items: [] };
        result.sections.push(section);
        day = null;
        phase = "section";
        continue;
      }
    }

    if (phase === "intro") {
      // The document repeats its own title, and often a duration/destination
      // strapline, before the first day. Neither belongs in the body copy.
      if (line.bold) {
        if (sameTitle(text, entry.title) || /^itinerary$/i.test(text)) continue;
        if (isGroupHeading(text)) {
          group = text;
          phase = "section";
          continue;
        }
        if (isMetaLine(text)) {
          result.meta.push(text);
          continue;
        }
      }
      if (isMetaLine(text)) {
        result.meta.push(text);
        continue;
      }
      result.intro.push(text);
      continue;
    }

    (day ?? section)?.paragraphs.push(text);
  }

  result.destinations = destinationsFrom(result);
  return result;
}

/** "10 Days | Arusha • Tarangire • Serengeti", "15 Days / 14 Nights". */
function isMetaLine(text: string): boolean {
  if (text.length > 130) return false;
  return text.includes("•") || /^\d+\s*Days?\b/i.test(text);
}

/** Headings are short and unpunctuated; anything else bold is emphasis. */
function isHeadingish(text: string): boolean {
  return text.length < 80 && !/[.!?]$/.test(text);
}

function isGroupHeading(text: string): boolean {
  return text.length < 60 && /[A-Z]/.test(text) && text === text.toUpperCase();
}

function sameTitle(a: string, b: string): boolean {
  const normalise = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return normalise(a).length > 0 && normalise(a) === normalise(b);
}

/** Headline places: the document's own bullet strapline where it has one,
 *  otherwise the stays it actually lists, in the order they are slept in. */
function destinationsFrom(itinerary: Itinerary): string[] {
  const bulleted = itinerary.meta.find((line) => line.includes("•"));
  if (bulleted) {
    const tail = bulleted.includes("|") ? bulleted.slice(bulleted.indexOf("|") + 1) : bulleted;
    return tail.split("•").map((part) => part.trim()).filter(Boolean);
  }
  const stays: string[] = [];
  for (const day of itinerary.days) {
    const stay = day.overnight;
    if (!stay || /^(hotel|hut)$/i.test(stay)) continue;
    if (!stays.includes(stay)) stays.push(stay);
  }
  if (stays.length > 0) return stays;
  const route = routeFor(itinerary);
  if (!route) return [];
  return [route.start, ...route.points, route.end]
    .filter((point): point is MapPoint => point != null)
    .map((point) => point.name);
}

// ---------------------------------------------------------------------------
// Prices
// ---------------------------------------------------------------------------

export function priceBlocks(entry: DocumentEntry): SourceBlock[] {
  const start = entry.blocks.findIndex((b) => /^Prices?\s*:?\s*$/i.test(b.text.trim()));
  if (start === -1) return [];
  const nextSection = entry.blocks.findIndex((b, i) => i > start && /^(Inclusive|Included|Excluded|Inclusions|Exclusions)\s*:?$/i.test(b.text.trim()));
  return entry.blocks.slice(start, nextSection === -1 ? undefined : nextSection);
}

/** Surface an actual source price line, with its season/group context intact. */
export function priceSummary(entry: DocumentEntry): string[] {
  const blocks = priceBlocks(entry);
  let season = "";
  const rates: { amount: number; text: string; season: string }[] = [];
  for (const block of blocks) {
    if (/^(Low|High) Season$/i.test(block.text.trim())) season = block.text.trim();
    const amount = block.text.match(/\$([\d,]+)/);
    if (amount) rates.push({ amount: Number(amount[1].replaceAll(",", "")), text: block.text.trim(), season });
  }
  const rate = rates.sort((a, b) => a.amount - b.amount)[0];
  if (!rate) return [];
  const familyBasis = blocks.find((b) => b.text.startsWith("Based on a family"));
  return [rate.season, rate.text, familyBasis?.text].filter((text): text is string => Boolean(text));
}

export interface Rate {
  amount: number;
  /** The rate line exactly as published, e.g. "2 Pax – From $4,467 per person". */
  text: string;
  season?: string;
  /** "per person", "for the entire family" — whatever the line qualifies it as. */
  basis?: string;
}

/** The cheapest published rate, kept in its own words. Documents that publish
 *  no price return null rather than borrowing a neighbour's. */
export function lowestRate(itinerary: Itinerary): Rate | null {
  const rates: Rate[] = [];
  for (const group of itinerary.prices) {
    for (const text of group.lines) {
      const figure = text.match(/\$[\d,]+/);
      if (!figure) continue;
      const after = text.slice(text.indexOf(figure[0]) + figure[0].length).trim();
      rates.push({
        amount: Number(figure[0].slice(1).replaceAll(",", "")),
        text,
        season: group.season,
        basis: after || undefined,
      });
    }
  }
  return rates.sort((a, b) => a.amount - b.amount)[0] ?? null;
}

// ---------------------------------------------------------------------------
// Route map
//
// Approximate centroids, good enough to draw a readable route line. The stops
// themselves are read out of the itinerary — the place each day sleeps, or
// failing that the last recognisable place in the day's heading — so the line
// only ever traces places the document names.
// ---------------------------------------------------------------------------

const GAZETTEER: Record<string, [number, number]> = {
  "Kilimanjaro Airport": [37.0745, -3.4294],
  "Zanzibar Airport": [39.2249, -6.222],
  "Arusha National Park": [36.8333, -3.25],
  "West Kilimanjaro": [36.9333, -2.8],
  "Lake Duluti": [36.7767, -3.3822],
  "Ngorongoro": [35.5833, -3.1667],
  "Serengeti": [34.8233, -2.4283],
  "Tarangire": [36.0, -3.9],
  "Zanzibar": [39.3, -6.05],
  "Arusha": [36.683, -3.3869],
  "Karatu": [35.6947, -3.3417],
  "Ndutu": [34.9333, -3.0],
  "Sinya": [36.9333, -2.8],
  "Moshi": [37.34, -3.35],
  "Mti Mkubwa Camp": [37.155, -3.028],
  "Shira 1 Camp": [37.2264, -3.0492],
  "Shira 2 Camp": [37.2664, -3.0553],
  "Shira Camp": [37.2405, -3.0606],
  "Lava Tower": [37.3167, -3.0667],
  "Machame Camp": [37.2997, -3.1353],
  "Barranco Camp": [37.3097, -3.0906],
  "Karanga Camp": [37.3439, -3.0919],
  "Barafu Camp": [37.3728, -3.0928],
  "Uhuru Peak": [37.3556, -3.0674],
  "Mweka Camp": [37.3628, -3.1583],
  "Mweka Gate": [37.3378, -3.2258],
  "Mandara Hut": [37.5167, -3.1833],
  "Horombo Hut": [37.4833, -3.1167],
  "Kibo Hut": [37.4333, -3.0833],
  "Momella Gate": [36.85, -3.2167],
  "Miriakamba Hut": [36.8, -3.2333],
  "Saddle Hut": [36.7833, -3.2417],
  "Socialist Peak": [36.7581, -3.2358],
};

// Longest name first, so "West Kilimanjaro" is never swallowed by "Kilimanjaro
// Airport" and "Shira 1 Camp" never by "Shira Camp".
const GAZETTEER_KEYS = Object.keys(GAZETTEER).sort((a, b) => b.length - a.length);

function lookup(text: string): MapPoint | null {
  const haystack = text.toLowerCase().replace(/\s+/g, " ");
  for (const key of GAZETTEER_KEYS) {
    if (haystack.includes(key.toLowerCase())) {
      return { name: key, coordinates: GAZETTEER[key] };
    }
  }
  return null;
}

/** Where a day ends up: the stay it names, else the last place in its heading. */
function placeFor(day: Day): MapPoint | null {
  if (day.overnight) {
    const stay = lookup(day.overnight);
    if (stay) return stay;
  }
  const legs = day.title.split(/→|\||\bto\b|,/i).map((leg) => leg.trim()).filter(Boolean);
  for (let i = legs.length - 1; i >= 0; i--) {
    const place = lookup(legs[i]);
    if (place) return place;
  }
  return null;
}

/** The route line for an itinerary, or null when its days name too few
 *  recognisable places to draw one. */
export function routeFor(itinerary: Itinerary): Route | null {
  const stops: MapPoint[] = [];
  for (const day of itinerary.days) {
    const place = placeFor(day);
    if (!place) continue;
    const previous = stops[stops.length - 1];
    // A run of nights in one place is one stop on the line, labelled with the
    // whole stretch it covers.
    if (previous && previous.name === place.name) {
      previous.label = previous.label === day.label ? day.label : `${previous.label} – ${day.label}`;
      continue;
    }
    stops.push({ ...place, label: day.label });
  }
  if (stops.length < 2) return null;
  return { start: stops[0], points: stops.slice(1, -1), end: stops[stops.length - 1] };
}
