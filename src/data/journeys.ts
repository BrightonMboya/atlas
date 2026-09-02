export interface PriceLine {
  label: string;
  amount: string;
}

/** A single day (or a grouped range like "Days 6–7") of an itinerary. */
export interface Day {
  /** Numeral shown in the left rail. Day 0 is used for pre-trek briefings. */
  n: number;
  /** Human label, e.g. "Day 3" or "Days 8–12". */
  label: string;
  title: string;
  paragraphs: string[];
  /** Region slept in. Drives the stay image, which is only shown when it changes. */
  overnight?: string;
  meals?: string;
  highlight?: string;
  /** Trek legs carry hard numbers (elevation, distance, hiking time, habitat). */
  stats?: { label: string; value: string }[];
}

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

export interface AddOn {
  slug: string;
  title: string;
  /** Short hook, shown as the card eyebrow. */
  tagline: string;
  paragraphs: string[];
  /** Where and when the experience runs, when that varies by park or season. */
  availability?: { place: string; when: string }[];
  /** No stock photography fits these experiences yet; real photos slot in here. */
  image?: string;
}

export interface Journey {
  slug: string;
  title: string;
  category: string;
  days: number;
  nights: number;
  region: string;
  image: string;
  alt: string;
  summary: string;
  priceFrom: string;
  priceUnit: string;
  priceLines: PriceLine[];
  priceNote?: string;
  /** Headline places, shown as the "Your Destinations" flow under the hero. */
  destinations: string[];
  itinerary: Day[];
  route: Route;
  included: string[];
  excluded: string[];
  /** Slugs from `tourAddOns` that can be woven into this journey. */
  addOns?: string[];
}

// Approximate centroids, good enough to draw a readable route line.
const PT = {
  jro: { name: "Kilimanjaro Airport", coordinates: [37.0745, -3.4294] as [number, number] },
  arusha: { name: "Arusha", coordinates: [36.683, -3.3869] as [number, number] },
  duluti: { name: "Lake Duluti", coordinates: [36.7767, -3.3822] as [number, number] },
  arushaNP: { name: "Arusha National Park", coordinates: [36.8333, -3.25] as [number, number] },
  sinya: { name: "West Kilimanjaro & Sinya", coordinates: [36.9333, -2.8] as [number, number] },
  tarangire: { name: "Tarangire National Park", coordinates: [36.0, -3.9] as [number, number] },
  karatu: { name: "Karatu", coordinates: [35.6947, -3.3417] as [number, number] },
  ngorongoro: { name: "Ngorongoro Crater", coordinates: [35.5833, -3.1667] as [number, number] },
  serengeti: { name: "Serengeti", coordinates: [34.8233, -2.4283] as [number, number] },
  zanzibar: { name: "Zanzibar", coordinates: [39.3, -6.05] as [number, number] },
  znz: { name: "Zanzibar Airport", coordinates: [39.2249, -6.222] as [number, number] },
  moshi: { name: "Moshi", coordinates: [37.34, -3.35] as [number, number] },
  mtiMkubwa: { name: "Mti Mkubwa Camp", coordinates: [37.155, -3.028] as [number, number] },
  shira1: { name: "Shira 1 Camp", coordinates: [37.2264, -3.0492] as [number, number] },
  shira2: { name: "Shira 2 Camp", coordinates: [37.2664, -3.0553] as [number, number] },
  barranco: { name: "Barranco Camp", coordinates: [37.3097, -3.0906] as [number, number] },
  karanga: { name: "Karanga Camp", coordinates: [37.3439, -3.0919] as [number, number] },
  barafu: { name: "Barafu Camp", coordinates: [37.3728, -3.0928] as [number, number] },
  uhuru: { name: "Uhuru Peak", coordinates: [37.3556, -3.0674] as [number, number] },
  mweka: { name: "Mweka Camp", coordinates: [37.3628, -3.1583] as [number, number] },
  mwekaGate: { name: "Mweka Gate", coordinates: [37.3378, -3.2258] as [number, number] },
};

/**
 * Optional experiences that can be added to a journey. Journeys reference these
 * by slug via `Journey.addOns`; resolve them with `resolveAddOns`.
 */
export const tourAddOns: AddOn[] = [
  {
    slug: "balloon-safari",
    title: "Balloon Safari",
    tagline: "Safari from the sky",
    paragraphs: [
      "Rise above the wilderness as the sun begins to paint the sky in golden colours. You lift off in the early morning and drift quietly above vast plains, winding rivers and acacia trees, with wildlife moving freely below.",
      "With no engine noise, the experience is peaceful and exhilarating at once — watch for elephants, giraffes, zebras, wildebeest and, with a little luck, lions and other predators. After the flight you land in the wilderness, celebrate with champagne and enjoy a bush breakfast surrounded by nature.",
    ],
    availability: [
      { place: "Central Serengeti", when: "All year round" },
      { place: "North Serengeti (Kogatende)", when: "June to November" },
      { place: "Western Serengeti (Kirawira)", when: "May to August, minimum 4 people" },
      { place: "Western Serengeti (Grumeti Singita)", when: "All year round, on request" },
      { place: "Tarangire National Park", when: "All year round" },
      { place: "Ndutu", when: "December to March" },
    ],
  },
  {
    slug: "maasai-cultural-experience",
    title: "Maasai Cultural Experience",
    tagline: "Step into a living tradition",
    paragraphs: [
      "Spend time with the Maasai people and visit a traditional boma. You are welcomed with songs and dances — an introduction full of energy, colour and rhythm — before walking through the boma to see how traditional homes are built and to learn about the place of cattle in Maasai life.",
      "Meet local families, watch traditional crafts and jewellery being made, and take part in cultural activities alongside your hosts. The most memorable part is often the human connection: sitting together, sharing stories and moments of everyday life.",
    ],
  },
  {
    slug: "hadzabe-cultural-experience",
    title: "Hadzabe Cultural Experience",
    tagline: "Into the world of the bush",
    paragraphs: [
      "Meet the Hadzabe, one of Tanzania's oldest indigenous communities, and discover a way of life still closely connected to nature. You set out into the bush with your hosts and experienced local guides, watching as they read the landscape, identify animal tracks and recognise edible plants.",
      "You may witness traditional bow-and-arrow skills, learn how wild foods and honey are found, and hear stories about daily life and the natural world. Rather than observing from a distance, you are invited to listen, learn, ask questions and share the morning with the community.",
    ],
  },
  {
    slug: "materuni-waterfalls",
    title: "Materuni Waterfalls & Coffee",
    tagline: "Nature, culture and flavour",
    paragraphs: [
      "Escape into the lush foothills of Mount Kilimanjaro. Begin with a scenic walk through green banana and coffee plantations, guided by local villagers, then follow the forest trail to the spectacular Materuni Waterfall, where cool mountain water plunges into a natural pool surrounded by tropical greenery.",
      "Afterwards, slow down for the traditional art of Tanzanian coffee making. Meet local farmers, learn how coffee is grown and harvested, and take part in preparing the beans — from roasting and grinding to brewing your own fresh cup where it is grown.",
    ],
  },
  {
    slug: "arusha-town-tour",
    title: "Arusha Town Tour",
    tagline: "Discover the heart of Tanzania",
    paragraphs: [
      "Step beyond the safari and discover the spirit of Arusha. Explore lively local markets, colourful streets, historic landmarks and hidden corners while experiencing the rhythm of everyday Tanzanian life.",
      "Meet friendly locals, discover traditional crafts and flavours, and learn about the city's mix of cultures and traditions. From the bustling markets to peaceful green spaces and local neighbourhoods, every stop offers another glimpse into the real Tanzania.",
    ],
  },
];

/** Resolves a journey's add-on slugs, preserving catalogue order. */
export function resolveAddOns(slugs: string[] | undefined): AddOn[] {
  if (!slugs || slugs.length === 0) return [];
  return tourAddOns.filter((addOn) => slugs.includes(addOn.slug));
}

export const journeys: Journey[] = [
  {
    slug: "family-friendly-safari",
    title: "Family Friendly Safari",
    category: "Family Safaris",
    days: 8,
    nights: 7,
    region: "Tanzania",
    image: "/images/itinerary-tarangire-ngorongoro.jpg",
    alt: "Baobab tree at sunset in Tarangire National Park",
    summary:
      "An intentionally relaxed family safari — gentle days in Arusha, Tarangire's baobabs and elephant herds, and the extraordinary wildlife of the Ngorongoro Crater, paced entirely around two adults and two children.",
    priceFrom: "$6,290",
    priceUnit: "For the entire family",
    priceLines: [
      { label: "Low Season", amount: "$6,290 for the entire family" },
      { label: "High Season", amount: "$7,685 for the entire family" },
    ],
    priceNote:
      "Based on a family of 2 adults + 2 kids 11 years and under. If you have more than 2 children, please request a price. If your children or one of your children is under 4 years, please request a price as they are Free of Charge.",
    destinations: ["Arusha", "Tarangire", "Karatu", "Ngorongoro"],
    route: {
      start: PT.jro,
      points: [
        { ...PT.arusha, label: "Days 1–2" },
        { ...PT.tarangire, label: "Days 3–4" },
        { ...PT.karatu, label: "Days 5–6" },
        { ...PT.ngorongoro, label: "Day 7" },
      ],
      end: PT.jro,
    },
    itinerary: [
      {
        n: 1,
        label: "Day 1",
        title: "Arrival in Tanzania",
        paragraphs: [
          "Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport, your private Atlas guide will meet your family and transfer you to your hotel in Arusha.",
          "After your journey, the rest of the day is free to settle in, relax and recover from the flight. There is no safari scheduled today, allowing everyone to start the holiday feeling refreshed and ready for the adventure ahead.",
        ],
        overnight: "Arusha",
        meals: "Dinner",
      },
      {
        n: 2,
        label: "Day 2",
        title: "A Relaxed Day in Arusha",
        paragraphs: [
          "Today is intentionally slow and relaxed. After breakfast, enjoy a leisurely day at your hotel. The family can rest, swim, enjoy the gardens or, if everyone feels up to it, take part in a gentle family-friendly activity in Arusha.",
          "There are no early morning wake-up calls or long drives today. This gives the whole family time to adjust to Tanzania before the safari begins.",
        ],
        overnight: "Arusha",
        meals: "Breakfast & Dinner",
      },
      {
        n: 3,
        label: "Day 3",
        title: "Arusha to Tarangire National Park",
        paragraphs: [
          "After breakfast, depart Arusha and travel towards Tarangire National Park, famous for its magnificent baobab trees, beautiful landscapes and large herds of elephants.",
          "Begin your safari upon entering the park, keeping an eye out for elephants, giraffes, zebras, wildebeest, lions and a wonderful variety of birdlife.",
          "Continue to your lodge in the evening and enjoy a relaxed dinner surrounded by the sounds of the African wilderness.",
        ],
        overnight: "Tarangire",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 4,
        label: "Day 4",
        title: "Full-Day Tarangire Safari",
        paragraphs: [
          "Wake up surrounded by the wilderness of Tarangire. Today, enjoy a full-day private safari exploring different parts of the park. With your private guide, the day can be adapted to your family's pace, with opportunities to stop for breaks whenever the children need some downtime.",
          "Enjoy a picnic lunch in the park before continuing your game drive. Keep your eyes open for elephants, lions, giraffes, zebras and other wildlife.",
          "Return to your lodge in the late afternoon for a relaxing evening.",
        ],
        overnight: "Tarangire",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Full-day private game drive with a picnic lunch",
      },
      {
        n: 5,
        label: "Day 5",
        title: "Tarangire to Karatu",
        paragraphs: [
          "After breakfast, leave Tarangire and continue towards Karatu, a charming town nestled among the green landscapes of the Ngorongoro Highlands.",
          "The journey is intentionally relaxed, with opportunities to stop along the way and enjoy the changing scenery.",
          "Arrive at your family-friendly lodge and spend the afternoon at leisure. The children can enjoy the open space, swimming pool or other lodge facilities while the parents take some time to relax.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 6,
        label: "Day 6",
        title: "A Relaxed Family Day in Karatu",
        paragraphs: [
          "Today is a no-rush day. After several days of travel and safari, the family has time to slow down and enjoy the beautiful surroundings of Karatu.",
          "Spend the day relaxing at your lodge, swimming, exploring the gardens or enjoying a gentle family-friendly activity. The day can also be used simply to rest and recharge before tomorrow's Ngorongoro Crater adventure.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 7,
        label: "Day 7",
        title: "Ngorongoro Crater",
        paragraphs: [
          "Today, the family experiences one of Tanzania's greatest wildlife destinations — the Ngorongoro Crater.",
          "After breakfast, descend into the crater for a game drive through this extraordinary natural amphitheatre. Its unique ecosystem supports an incredible concentration of wildlife, making it an exciting experience for both children and adults.",
          "Look out for lions, elephants, buffalo, zebras, wildebeest, hippos and many other animals as you explore the crater floor. After the safari, return to Karatu for your final evening in Tanzania.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Game drive on the Ngorongoro Crater floor",
      },
      {
        n: 8,
        label: "Day 8",
        title: "Farewell Tanzania",
        paragraphs: [
          "After breakfast, enjoy your final moments in Tanzania before your private transfer from Karatu to Kilimanjaro International Airport for your flight home.",
          "The departure time from Karatu will be arranged according to your international flight schedule, allowing the family to travel comfortably and arrive at the airport with sufficient time for check-in.",
          "Please note: depending on the departure time of your flight, an additional overnight near Kilimanjaro Airport may be recommended to avoid a long early-morning transfer with young children.",
        ],
        meals: "Breakfast & Lunch",
      },
    ],
    addOns: ["balloon-safari", "maasai-cultural-experience", "hadzabe-cultural-experience", "materuni-waterfalls", "arusha-town-tour"],
    included: [
      "All airport transfers in Tanzania & Zanzibar",
      "A private safari vehicle; 4 x 4 Land Cruiser with a pop-up roof",
      "A professional, knowledgeable and experienced English speaking driver guide (You can request a guide of your language at an extra fee)",
      "All accommodations as listed in the itinerary",
      "Meals as listed in the itinerary",
      "A private safari (It will only be you and the driver guide in the vehicle)",
      "Mineral drinking water & Soft drinks",
    ],
    excluded: ["International flight tickets", "Visa", "Tips & Gratitude"],
  },
  {
    slug: "honeymoon-escape",
    title: "Honeymoon Escape",
    category: "Honeymoon",
    days: 15,
    nights: 14,
    region: "Tanzania & Zanzibar",
    image: "/images/itinerary-zanzibar-bliss.jpg",
    alt: "Traditional sailboat off the coast of Zanzibar",
    summary:
      "From the wild heart of Tanzania to the turquoise shores of Zanzibar, this romantic journey combines private safari experiences with unforgettable moments designed for two — from sunset canoeing and a Serengeti sundowner to a candlelit beach dinner and a couples' massage in Zanzibar.",
    priceFrom: "$4,806",
    priceUnit: "Per person",
    priceLines: [
      { label: "Low Season", amount: "$4,806 per person" },
      { label: "High Season", amount: "$5,526 per person" },
    ],
    destinations: [
      "Arusha",
      "Lake Duluti",
      "Tarangire",
      "Karatu",
      "Ngorongoro",
      "Serengeti",
      "Zanzibar",
    ],
    route: {
      start: PT.jro,
      points: [
        { ...PT.arusha, label: "Days 1–2" },
        { ...PT.duluti, label: "Day 2" },
        { ...PT.tarangire, label: "Day 3" },
        { ...PT.karatu, label: "Day 4" },
        { ...PT.ngorongoro, label: "Day 5" },
        { ...PT.serengeti, label: "Days 6–7" },
        { ...PT.zanzibar, label: "Days 8–14" },
      ],
      end: PT.znz,
    },
    itinerary: [
      {
        n: 1,
        label: "Day 1",
        title: "Arrival in Tanzania",
        paragraphs: [
          "Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport, your private Atlas guide will meet you and transfer you to your romantic accommodation in Arusha.",
          "Settle in and enjoy a peaceful evening together after your journey, surrounded by the beauty of northern Tanzania.",
        ],
        overnight: "Arusha",
        meals: "Dinner",
      },
      {
        n: 2,
        label: "Day 2",
        title: "Romantic Sunset at Lake Duluti",
        paragraphs: [
          "After a relaxed morning in Arusha, spend the afternoon at the beautiful Lake Duluti, a tranquil crater lake surrounded by lush forest.",
          "Later in the afternoon, enjoy a private sunset canoeing experience on the calm waters of the lake. Paddle together as the sun slowly sets, creating a beautiful and intimate beginning to your honeymoon.",
          "After the experience, return to Arusha and enjoy a relaxed evening together.",
        ],
        overnight: "Arusha",
        meals: "Breakfast & Dinner",
        highlight: "Private sunset canoeing on Lake Duluti",
      },
      {
        n: 3,
        label: "Day 3",
        title: "Arusha to Tarangire National Park",
        paragraphs: [
          "After breakfast, begin your safari adventure and travel towards Tarangire National Park.",
          "Known for its majestic baobab trees and large elephant populations, Tarangire offers a beautiful introduction to Tanzania's wilderness.",
          "Enjoy a private game drive through the park before continuing to your romantic lodge or luxury tented camp.",
        ],
        overnight: "Tarangire",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 4,
        label: "Day 4",
        title: "Tarangire to Karatu",
        paragraphs: [
          "After breakfast, enjoy a final game drive through Tarangire before continuing towards Karatu, nestled among the lush landscapes of the Ngorongoro Highlands.",
          "The changing scenery along the way offers a beautiful transition from the dry savannah of Tarangire to the green highlands.",
          "Arrive at your romantic lodge and spend the afternoon relaxing together and enjoying the peaceful surroundings.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 5,
        label: "Day 5",
        title: "Ngorongoro Crater",
        paragraphs: [
          "After breakfast, journey into the spectacular Ngorongoro Crater for a private game drive.",
          "Descend into the crater and explore its extraordinary wildlife-rich landscape, with opportunities to see lions, elephants, buffalo, zebras, wildebeest, hippos and many other species.",
          "After your crater experience, continue to your accommodation within the Ngorongoro Conservation Area. Spend the evening surrounded by the peaceful highland atmosphere — a beautiful and intimate night in the heart of Tanzania's wilderness.",
        ],
        overnight: "Ngorongoro",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Private game drive on the crater floor",
      },
      {
        n: 6,
        label: "Day 6",
        title: "Ngorongoro to Serengeti",
        paragraphs: [
          "After breakfast, depart the Ngorongoro Highlands and continue towards the legendary Serengeti National Park.",
          "Enter the Serengeti and begin exploring its endless plains, with game viewing along the way to your luxury camp or lodge.",
          "Arrive in the evening and settle into your romantic accommodation, ready for another unforgettable day in the wilderness.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 7,
        label: "Day 7",
        title: "Serengeti & Romantic Sundowner",
        paragraphs: [
          "Wake up in the heart of the Serengeti and enjoy a full day of private game viewing.",
          "Explore the endless plains with your experienced Atlas guide, searching for lions, cheetahs, leopards, elephants, giraffes and other wildlife. Enjoy a picnic lunch in the wilderness before continuing your safari.",
          "As the afternoon comes to an end, head to a beautiful scenic location for a romantic Serengeti sundowner. Raise a glass together as the African sun slowly disappears beyond the endless plains, painting the sky in warm golden colours.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Romantic Serengeti sundowner",
      },
      {
        n: 8,
        label: "Day 8",
        title: "From the Wild to Zanzibar",
        paragraphs: [
          "Enjoy your final morning in the Serengeti before transferring to the airstrip for your flight to Zanzibar.",
          "Leave the golden plains behind and arrive on the tropical island, where the second chapter of your honeymoon begins. Upon arrival, your private transfer will take you to your romantic beach resort.",
          "Spend the remainder of the day relaxing together and enjoying your first taste of island life.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 9,
        label: "Day 9",
        title: "A Day of Island Romance",
        paragraphs: [
          "Today is yours to slow down and enjoy Zanzibar at your own pace.",
          "Relax at your resort, swim in the turquoise waters, walk along the beach or simply enjoy some uninterrupted time together.",
          "For couples who wish to explore, optional experiences such as Stone Town, a spice farm, snorkeling or a private boat excursion can be arranged.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 10,
        label: "Day 10",
        title: "Candlelit Beach Dinner",
        paragraphs: [
          "Enjoy a peaceful day together at your resort. Take time to relax, swim and enjoy the beauty of Zanzibar before preparing for a special evening.",
          "As the sun goes down, enjoy a private candlelit dinner on the beach, with the sound of the ocean and the soft glow of candlelight creating an intimate setting for the two of you.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
        highlight: "Private candlelit dinner on the beach",
      },
      {
        n: 11,
        label: "Day 11",
        title: "A Day to Relax & Explore",
        paragraphs: [
          "Enjoy another unhurried day in paradise.",
          "Spend the day relaxing by the pool or beach, exploring the island together or choosing an optional experience that suits you.",
          "With no fixed activities scheduled, you can simply enjoy each other's company and make the most of your honeymoon.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 12,
        label: "Day 12",
        title: "Romantic Sunset Cruise",
        paragraphs: [
          "Spend the day enjoying the beach and the relaxed atmosphere of your resort.",
          "Later in the afternoon, set sail on a romantic sunset cruise along the Zanzibar coastline. As the sun begins to disappear into the Indian Ocean, enjoy the beautiful colours of the sky and the peaceful atmosphere of the ocean together.",
          "Return to your resort after sunset for a relaxed evening.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
        highlight: "Sunset cruise along the Zanzibar coast",
      },
      {
        n: 13,
        label: "Day 13",
        title: "Couples' Massage",
        paragraphs: [
          "After a leisurely morning, enjoy a one-hour couples' massage, giving you both time to relax and unwind together.",
          "Spend the rest of the day at your own pace — perhaps enjoying the beach, swimming in the ocean or simply relaxing at your resort.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 14,
        label: "Day 14",
        title: "Your Final Day in Paradise",
        paragraphs: [
          "Enjoy your final full day in Zanzibar with nothing scheduled.",
          "Take a final swim in the Indian Ocean, walk along the beach, enjoy a leisurely breakfast or simply relax together at your resort.",
          "As your honeymoon draws to a close, enjoy one final beautiful evening on the island.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 15,
        label: "Day 15",
        title: "Farewell Zanzibar",
        paragraphs: [
          "Enjoy your final breakfast together before your private transfer to Zanzibar International Airport for your onward flight.",
          "Your Atlas Honeymoon Escape comes to an end, leaving you with memories of Tanzania's incredible wildlife, breathtaking landscapes and the beautiful beginning of your life together.",
        ],
        meals: "Breakfast",
      },
    ],
    addOns: ["balloon-safari", "maasai-cultural-experience", "hadzabe-cultural-experience", "materuni-waterfalls", "arusha-town-tour"],
    included: [
      "All airport transfers in Tanzania & Zanzibar",
      "A private safari vehicle; 4 x 4 Land Cruiser with a pop-up roof",
      "A professional, knowledgeable and experienced English speaking driver guide (You can request a guide of your language at an extra fee)",
      "All accommodations as listed in the itinerary",
      "A romantic sunset canoeing in Lake Duluti",
      "Room decorations",
      "Domestic flight tickets from Seronera Serengeti to Zanzibar",
      "A romantic sundowner in Serengeti",
      "A romantic candlelight beach dinner in Zanzibar",
      "A romantic sunset cruise in Zanzibar",
      "An hour couple massage",
      "Meals as listed in the itinerary",
      "A private safari (It will only be you and the driver guide in the vehicle)",
      "Drinking water & soft drinks during the safari",
    ],
    excluded: [
      "International flight tickets",
      "Visa",
      "Mandatory Inbound Travel Insurance for Zanzibar",
      "Tips & Gratitude",
    ],
  },
  {
    slug: "signature-safari",
    title: "Signature Safari",
    category: "Signature Safari",
    days: 13,
    nights: 12,
    region: "Tanzania & Zanzibar",
    image: "/images/itinerary-tanzania-luxury-zanzibar.jpg",
    alt: "Golden lions resting in the Tanzanian savanna",
    summary:
      "A carefully curated journey combining Tanzania's wild landscapes, authentic Maasai culture, iconic wildlife and the tropical beauty of Zanzibar.",
    priceFrom: "$3,543",
    priceUnit: "Per person",
    priceLines: [
      { label: "Low Season · 2 Pax", amount: "From $4,467 per person" },
      { label: "Low Season · 4 Pax", amount: "From $3,731 per person" },
      { label: "Low Season · 6 Pax", amount: "From $3,543 per person" },
      { label: "High Season · 2 Pax", amount: "From $4,734 per person" },
      { label: "High Season · 4 Pax", amount: "From $4,208 per person" },
      { label: "High Season · 6 Pax", amount: "From $3,968 per person" },
    ],
    destinations: [
      "West Kilimanjaro",
      "Sinya",
      "Tarangire",
      "Ngorongoro",
      "Serengeti",
      "Zanzibar",
    ],
    route: {
      start: PT.jro,
      points: [
        { ...PT.sinya, label: "Days 1–2" },
        { ...PT.tarangire, label: "Day 3" },
        { ...PT.ngorongoro, label: "Days 4–5" },
        { ...PT.serengeti, label: "Days 5–7" },
        { ...PT.zanzibar, label: "Days 8–12" },
      ],
      end: PT.znz,
    },
    itinerary: [
      {
        n: 1,
        label: "Day 1",
        title: "Arrival in Tanzania",
        paragraphs: [
          "Arrive at Kilimanjaro International Airport, where your private Atlas guide will meet you and transfer you to West Kilimanjaro and to your lodge.",
          "After settling into your lodge, enjoy an evening bush walk accompanied by a Maasai warrior, surrounded by the beautiful landscapes of northern Tanzania.",
        ],
        overnight: "West Kilimanjaro",
        meals: "Dinner",
        highlight: "Bush walk with a Maasai warrior",
      },
      {
        n: 2,
        label: "Day 2",
        title: "Sinya Wilderness & Maasai Culture",
        paragraphs: [
          "Today, your adventure begins with a private safari in the Sinya Wildlife Area, a beautiful wilderness area at the foot of Mount Kilimanjaro.",
          "Explore the area in search of wildlife while enjoying the spectacular scenery and open landscapes. If you are lucky you can capture an elephant with Mount Kilimanjaro in the background. Later, visit a Maasai community for an authentic cultural experience and an opportunity to learn about their traditions and way of life.",
          "Return to your accommodation in the evening for dinner and a relaxing night in the wilderness.",
        ],
        overnight: "West Kilimanjaro",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Authentic Maasai boma cultural visit",
      },
      {
        n: 3,
        label: "Day 3",
        title: "West Kilimanjaro to Tarangire",
        paragraphs: [
          "After breakfast, depart West Kilimanjaro and drive towards Tarangire National Park.",
          "Enter the park and begin your game drive, exploring its spectacular landscapes of ancient baobabs, open savannah and seasonal wetlands. Tarangire is particularly famous for its large elephant populations, while giraffes, zebras, wildebeest, lions and many other species can also be encountered.",
          "Continue to your lodge for dinner and overnight.",
        ],
        overnight: "Tarangire",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 4,
        label: "Day 4",
        title: "Tarangire to Ngorongoro",
        paragraphs: [
          "Enjoy a morning safari in Tarangire before continuing towards the Ngorongoro Conservation Area.",
          "As you leave Tarangire behind, the landscape gradually changes as you climb into the beautiful highlands surrounding Ngorongoro.",
          "Arrive at your lodge and enjoy the rest of the afternoon at leisure, taking in the spectacular surroundings.",
        ],
        overnight: "Ngorongoro",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 5,
        label: "Day 5",
        title: "Ngorongoro Crater to Serengeti",
        paragraphs: [
          "After an early breakfast, descend into the Ngorongoro Crater for a game drive.",
          "Explore the crater floor, home to an extraordinary concentration of wildlife, with opportunities to see lions, elephants, buffalo, hippos, zebras, wildebeest and many other species.",
          "After the crater safari, ascend and continue towards the legendary Serengeti National Park. Enjoy game viewing along the way before arriving at your camp or lodge in the heart of the Serengeti.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Ngorongoro Crater game drive",
      },
      {
        n: 6,
        label: "Days 6–7",
        title: "The Endless Plains of Serengeti",
        paragraphs: [
          "Spend two full days exploring the magnificent Serengeti National Park on private game drives.",
          "With your experienced Atlas guide, explore different areas of the park according to the season and wildlife movements. The Serengeti offers the chance to encounter some of Africa's most iconic wildlife, including lions, cheetahs, leopards, elephants, giraffes, zebras and vast herds of wildebeest.",
          "With two full days in the Serengeti, there is time to explore at a relaxed pace, enjoy picnic lunches in the wilderness and experience the changing landscapes of this extraordinary ecosystem.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
      },
      {
        n: 8,
        label: "Days 8–12",
        title: "From the Wild to the Beach",
        paragraphs: [
          "After your final morning in the Serengeti, fly from the Serengeti to Zanzibar, leaving the endless plains behind for the turquoise waters of the Indian Ocean. Upon arrival, transfer to your beach resort and settle into island life.",
          "The following days are yours to enjoy Zanzibar at your own pace. Relax on the beach, swim in the warm Indian Ocean or choose from a selection of unforgettable island experiences such as Stone Town, a spice farm, snorkelling, Mnemba Atoll, Jozani Forest, Safari Blue or a sandbank excursion.",
          "Whether you choose adventure or complete relaxation, these days provide the perfect contrast to your safari.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
      },
      {
        n: 13,
        label: "Day 13",
        title: "Farewell Zanzibar",
        paragraphs: [
          "Enjoy your final morning in Zanzibar before your private transfer to Zanzibar International Airport for your onward flight.",
          "Your Atlas Signature journey comes to an end, taking you from the landscapes of West Kilimanjaro and Maasai culture, through Tanzania's most iconic wildlife destinations, and finally to the tropical shores of Zanzibar.",
        ],
        meals: "Breakfast",
      },
    ],
    addOns: ["balloon-safari", "hadzabe-cultural-experience", "materuni-waterfalls"],
    included: [
      "All airport transfers in Tanzania & Zanzibar",
      "A private safari vehicle; 4 x 4 Land Cruiser with a pop-up roof",
      "A professional, knowledgeable and experienced English speaking driver guide (You can request a guide of your language at an extra fee)",
      "An Authentic Maasai Boma Cultural Tour",
      "Domestic flights from Seronera Serengeti to Zanzibar",
      "A Bush Walk with a Maasai warrior in West Kilimanjaro",
      "All accommodations as listed in the itinerary",
      "Meals as listed in the itinerary",
      "A private safari (It will only be you and the driver guide in the vehicle)",
      "Mineral drinking water & Soft drinks",
    ],
    excluded: [
      "International flight tickets",
      "Visa",
      "Mandatory inbound travel insurance for Zanzibar",
      "Tips & Gratitude",
    ],
  },
  {
    slug: "from-the-wild-to-the-beach",
    title: "From the Wild to the Beach",
    category: "Safari & Zanzibar",
    days: 13,
    nights: 12,
    region: "Tanzania & Zanzibar",
    image: "/images/category-beach-holidays.avif",
    alt: "Turquoise waters and white sand beach in Zanzibar",
    summary:
      "Thirteen days that begin with a walking safari beneath Kilimanjaro's foothills and end on Zanzibar's white sand — Tarangire's elephants, the Ngorongoro Crater, the Serengeti's endless plains, and five nights of island relaxation.",
    priceFrom: "$3,335",
    priceUnit: "Per person",
    priceLines: [
      { label: "Low Season · 2 Pax", amount: "From $3,996 per person" },
      { label: "Low Season · 4 Pax", amount: "From $3,483 per person" },
      { label: "Low Season · 6 Pax", amount: "From $3,335 per person" },
      { label: "High Season · 2 Pax", amount: "From $4,227 per person" },
      { label: "High Season · 4 Pax", amount: "From $3,849 per person" },
      { label: "High Season · 6 Pax", amount: "From $3,798 per person" },
    ],
    destinations: [
      "Arusha",
      "Arusha National Park",
      "Tarangire",
      "Ngorongoro",
      "Serengeti",
      "Zanzibar",
    ],
    route: {
      start: PT.jro,
      points: [
        { ...PT.arusha, label: "Days 1–2" },
        { ...PT.arushaNP, label: "Day 2" },
        { ...PT.tarangire, label: "Day 3" },
        { ...PT.karatu, label: "Day 3" },
        { ...PT.ngorongoro, label: "Day 4" },
        { ...PT.serengeti, label: "Days 4–6" },
        { ...PT.zanzibar, label: "Days 7–12" },
      ],
      end: PT.znz,
    },
    itinerary: [
      {
        n: 1,
        label: "Day 1",
        title: "Karibu Tanzania — Arrival at Kilimanjaro Airport",
        paragraphs: [
          "Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport (JRO), your Atlas Tanzania Adventures representative will meet you and welcome you to Tanzania.",
          "Enjoy a private transfer to your hotel in Arusha, where you can settle in and relax after your journey.",
        ],
        overnight: "Arusha",
        highlight: "Your first welcome to Tanzania",
      },
      {
        n: 2,
        label: "Day 2",
        title: "Walking in the Wild — Arusha National Park",
        paragraphs: [
          "Your adventure begins with a different kind of safari experience. After breakfast, travel to Arusha National Park, where you'll explore the wilderness on foot with an experienced ranger.",
          "Follow forest trails towards a beautiful waterfall, surrounded by lush vegetation and the sounds of nature. Along the way, you may encounter giraffes, buffaloes, zebras, warthogs, monkeys and an abundance of birdlife.",
          "After your walking experience, enjoy a game drive through the park before returning to Arusha.",
        ],
        overnight: "Arusha",
        meals: "Breakfast & Lunch",
        highlight: "Walking safari to a waterfall",
      },
      {
        n: 3,
        label: "Day 3",
        title: "Elephants & Baobabs — Arusha to Tarangire to Karatu",
        paragraphs: [
          "Today, your safari takes you into the spectacular landscapes of Tarangire National Park.",
          "Famous for its enormous elephant herds, ancient baobab trees and diverse wildlife, Tarangire offers a wonderful introduction to Tanzania's wild side. Enjoy a game drive through the park, watching for elephants, giraffes, zebras, wildebeest, lions and more.",
          "Later, leave Tarangire behind and continue towards Karatu, passing through the beautiful landscapes of northern Tanzania.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Tarangire's elephants & baobabs",
      },
      {
        n: 4,
        label: "Day 4",
        title: "Into the Crater — Ngorongoro to Serengeti",
        paragraphs: [
          "Today brings one of Tanzania's most spectacular wildlife experiences. After breakfast, travel towards the Ngorongoro Crater, one of Africa's most extraordinary natural wonders. Descend approximately 600 metres into the crater for a game drive across its remarkable floor.",
          "Search for lions, elephants, buffaloes, hippos, flamingos and, with some luck, the endangered black rhino.",
          "After exploring the crater, ascend and continue towards the legendary Serengeti National Park and to your camp or lodge for dinner and overnight.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Ngorongoro Crater & entering the Serengeti",
      },
      {
        n: 5,
        label: "Day 5",
        title: "The Endless Plains — Serengeti",
        paragraphs: [
          "Wake up in the heart of the Serengeti. Today is dedicated to exploring this extraordinary ecosystem, home to one of the world's greatest wildlife spectacles — the Great Migration.",
          "More than 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, move through the greater Serengeti ecosystem throughout the year in search of fresh grazing and water.",
          "Set out with your private guide and follow the wildlife across the endless plains. Watch for lions, cheetahs, elephants, giraffes and huge herds moving across the landscape.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Full-day game drive",
      },
      {
        n: 6,
        label: "Day 6",
        title: "A Final Day in the Wild — Serengeti",
        paragraphs: [
          "One more day. One more chance to discover the Serengeti.",
          "Enjoy another full day of game drives, allowing you to explore different areas of the park and experience the wilderness at a relaxed pace.",
          "Perhaps you'll watch a pride of lions resting beneath an acacia tree, see elephants crossing the plains or encounter a cheetah scanning the grasslands. As the sun sets over the Serengeti, enjoy your final evening beneath the African sky.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Your final Serengeti adventure",
      },
      {
        n: 7,
        label: "Day 7",
        title: "From the Wild to the Beach — Serengeti to Zanzibar",
        paragraphs: [
          "Today, your African adventure takes an exciting turn. After breakfast, transfer to the airstrip with a game drive en route for your flight from the Serengeti to Zanzibar.",
          "Leave the golden savannah behind and arrive on the tropical island of Zanzibar, where the pace immediately slows and turquoise waters, white-sand beaches and warm island breezes welcome you.",
          "Transfer to your beach hotel and spend the rest of the day relaxing by the ocean.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast & Dinner",
        highlight: "Direct flight from safari to Zanzibar",
      },
      {
        n: 8,
        label: "Days 8–12",
        title: "Five Nights in Paradise — Zanzibar",
        paragraphs: [
          "Now it's time to relax. Enjoy five blissful nights in Zanzibar, with plenty of time to swim in crystal-clear waters, relax on white-sand beaches and discover the island at your own pace.",
          "Depending on your interests, you can add experiences such as a Stone Town tour, spice farm visit, snorkeling, a sandbank excursion, Jozani Forest or a traditional dhow experience.",
          "Or simply do absolutely nothing — sometimes that's exactly what a holiday needs.",
        ],
        overnight: "Zanzibar",
        meals: "Breakfast",
        highlight: "Five nights of island relaxation",
      },
      {
        n: 13,
        label: "Day 13",
        title: "Until We Meet Again — Zanzibar to Home",
        paragraphs: [
          "After breakfast, enjoy your final moments on the island before your private transfer to Zanzibar International Airport for your flight home.",
          "Your journey from the African wilderness to the turquoise waters of Zanzibar comes to an end — but the memories of Tanzania will stay with you long after you leave.",
        ],
        meals: "Breakfast",
        highlight: "Farewell to Zanzibar",
      },
    ],
    addOns: ["balloon-safari", "maasai-cultural-experience", "hadzabe-cultural-experience", "materuni-waterfalls", "arusha-town-tour"],
    included: [
      "All airport transfers in Tanzania & Zanzibar",
      "A private safari vehicle; 4 x 4 Land Cruiser with a pop-up roof",
      "A professional, knowledgeable and experienced English speaking driver guide (You can request a guide of your language at an extra fee)",
      "A walking safari in Arusha National Park",
      "Domestic flights from Seronera Serengeti to Zanzibar",
      "All accommodations as listed in the itinerary",
      "Meals as listed in the itinerary",
      "A private safari (It will only be you and the driver guide in the vehicle)",
      "Mineral drinking water & Soft drinks",
    ],
    excluded: [
      "International flight tickets",
      "Visa",
      "Mandatory inbound travel insurance for Zanzibar",
      "Tips & Gratitude",
    ],
  },
  {
    slug: "northern-circuit-classic-safari",
    title: "Northern Circuit Classic Safari",
    category: "Northern Circuit",
    days: 10,
    nights: 9,
    region: "Tanzania",
    image: "/images/category-safaris.avif",
    alt: "Safari vehicle crossing the Tanzanian savanna",
    summary:
      "Experience Tanzania's legendary Northern Circuit, from the elephant-filled landscapes of Tarangire to the dramatic Ngorongoro Crater and the endless plains of the Serengeti.",
    priceFrom: "$2,702",
    priceUnit: "Per person",
    priceLines: [
      { label: "Low Season · 2 Pax", amount: "From $3,713 per person" },
      { label: "Low Season · 4 Pax", amount: "From $2,938 per person" },
      { label: "Low Season · 6 Pax", amount: "From $2,702 per person" },
      { label: "High Season · 2 Pax", amount: "From $4,091 per person" },
      { label: "High Season · 4 Pax", amount: "From $3,190 per person" },
      { label: "High Season · 6 Pax", amount: "From $2,954 per person" },
    ],
    destinations: ["Arusha", "Tarangire", "Serengeti", "Ngorongoro"],
    route: {
      start: PT.jro,
      points: [
        { ...PT.arusha, label: "Days 1–3" },
        { ...PT.arushaNP, label: "Day 3" },
        { ...PT.tarangire, label: "Days 4–5" },
        { ...PT.karatu, label: "Day 5" },
        { ...PT.serengeti, label: "Days 6–8" },
        { ...PT.ngorongoro, label: "Day 9" },
      ],
      end: PT.jro,
    },
    itinerary: [
      {
        n: 1,
        label: "Day 1",
        title: "Karibu Tanzania — Arrival at Kilimanjaro Airport",
        paragraphs: [
          "Welcome to Tanzania! Upon arrival at Kilimanjaro International Airport (JRO), your Atlas Tanzania Adventures representative will meet you and welcome you to Tanzania.",
          "Enjoy a private transfer to your hotel in Arusha, where you can settle in and relax after your journey.",
        ],
        overnight: "Arusha",
      },
      {
        n: 2,
        label: "Day 2",
        title: "A Gentle Beginning — Discover Arusha",
        paragraphs: [
          "Today is yours to slow down and settle into the rhythm of Tanzania.",
          "After breakfast, enjoy a relaxed day in Arusha. You may choose to explore the city, visit a local market, discover some of the area's cultural highlights, or simply enjoy the peaceful surroundings of your hotel.",
          "This leisurely day gives you time to recharge before your safari adventure begins.",
        ],
        overnight: "Arusha",
        meals: "Breakfast",
      },
      {
        n: 3,
        label: "Day 3",
        title: "Walking in the Wild — Arusha National Park",
        paragraphs: [
          "Today, experience Tanzania from a completely different perspective. Travel to Arusha National Park, where you'll leave the safari vehicle behind and explore the wilderness on foot with an experienced armed ranger.",
          "Follow forest trails towards a beautiful waterfall, surrounded by lush vegetation and the sounds of birds and wildlife. Along the way, you may encounter giraffes, zebras, buffaloes, warthogs, monkeys and a variety of bird species.",
          "This intimate walking experience allows you to connect with the landscape at a slower and more immersive pace.",
        ],
        overnight: "Arusha",
        meals: "Breakfast & Lunch",
        highlight: "Guided walking safari to a waterfall",
      },
      {
        n: 4,
        label: "Day 4",
        title: "Into Elephant Country — Arusha to Tarangire",
        paragraphs: [
          "Your safari begins! After breakfast, journey towards Tarangire National Park, one of Tanzania's most beautiful wildlife areas.",
          "Famous for its ancient baobabs and enormous elephant herds, Tarangire offers a spectacular introduction to the African wilderness.",
          "Enjoy your first game drive as you explore the park's golden plains, searching for elephants, giraffes, zebras, wildebeest, lions, leopards and more.",
        ],
        overnight: "Tarangire",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "First game drive & Tarangire's elephants",
      },
      {
        n: 5,
        label: "Day 5",
        title: "Beneath the Baobabs — Tarangire",
        paragraphs: [
          "Wake up in the heart of the wilderness. Today, enjoy another full day exploring Tarangire with your private guide. With more time in the park, you'll have the freedom to explore different areas and follow the wildlife encounters that unfold throughout the day.",
          "Watch elephants gather around water sources, giraffes move gracefully between the trees and predators patrol the golden grasslands.",
          "In the late afternoon, drive to Karatu and to a hotel for dinner and overnight.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Full-day wildlife exploration",
      },
      {
        n: 6,
        label: "Day 6",
        title: "Into the Land of the Great Migration — Karatu to Serengeti",
        paragraphs: [
          "Today, the adventure continues towards one of Africa's most iconic wilderness destinations — Serengeti National Park.",
          "After breakfast, leave Karatu and travel through the breathtaking Ngorongoro Conservation Area, with its rolling highlands and dramatic landscapes. Along the way, stop at a spectacular viewpoint overlooking the Ngorongoro Crater, offering a chance to admire this extraordinary natural wonder from above.",
          "Continue towards the Serengeti, where the landscape gradually opens into vast golden plains stretching towards the horizon. The Serengeti is at the heart of the Great Migration — each year more than 1.5 million wildebeest, together with hundreds of thousands of zebras and gazelles, move across the ecosystem in search of fresh grazing and water.",
          "Arrive at your camp or lodge in the heart of the Serengeti, where you can unwind and enjoy your first evening surrounded by the sounds of the wild.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Ngorongoro viewpoint • Entering the Serengeti • Great Migration",
      },
      {
        n: 7,
        label: "Day 7",
        title: "Where the Wild Roams — Serengeti",
        paragraphs: [
          "Wake up surrounded by the sounds of the African wilderness.",
          "Today is dedicated to exploring the Serengeti. Set out on a full-day game drive with your private guide, following the movements of wildlife across the endless plains.",
          "The Serengeti is unpredictable in the best possible way — one moment you may be watching a peaceful herd of zebra, and the next you could find yourself observing a lion stalking its prey.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Full-day Serengeti safari",
      },
      {
        n: 8,
        label: "Day 8",
        title: "Another Day in Paradise — Serengeti",
        paragraphs: [
          "One of the greatest luxuries on safari is having time.",
          "With another full day in the Serengeti, there is no need to rush from one sighting to the next. Explore at your own pace, venture into different areas of the park and spend time observing the animals in their natural environment.",
          "From the smallest details to the grandest wildlife encounters, today is about experiencing the Serengeti beyond the famous photographs.",
        ],
        overnight: "Serengeti",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "A deeper Serengeti experience",
      },
      {
        n: 9,
        label: "Day 9",
        title: "Into the Crater — Serengeti to Ngorongoro to Karatu",
        paragraphs: [
          "Today brings another unforgettable chapter. After breakfast, travel towards the Ngorongoro Crater, one of Africa's most extraordinary wildlife destinations and natural wonders of the world.",
          "Descend approximately 600 metres into the crater for a game drive across its remarkable floor, where lions, elephants, buffaloes, hippos, flamingos and other wildlife thrive within this natural amphitheatre.",
          "Later, ascend from the crater and continue to Karatu, where you'll spend your final night surrounded by the beautiful landscapes of the Ngorongoro highlands.",
        ],
        overnight: "Karatu",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Ngorongoro Crater game drive",
      },
      {
        n: 10,
        label: "Day 10",
        title: "Until We Meet Again — Karatu to Kilimanjaro Airport",
        paragraphs: [
          "After breakfast, enjoy a private transfer towards Kilimanjaro International Airport for your flight home.",
          "As Tanzania disappears behind you, take with you the memories of golden savannahs, ancient baobabs, incredible wildlife and the people who made your journey special.",
        ],
        meals: "Breakfast & Lunch",
        highlight: "Farewell to Tanzania",
      },
    ],
    addOns: ["balloon-safari", "maasai-cultural-experience", "hadzabe-cultural-experience", "materuni-waterfalls", "arusha-town-tour"],
    included: [
      "Both airport transfers",
      "A private safari vehicle; 4 x 4 Land Cruiser with a pop-up roof",
      "A professional, knowledgeable and experienced English speaking driver guide (You can request a guide of your language at an extra fee)",
      "A walking safari in Arusha National Park",
      "All accommodations as listed in the itinerary",
      "Meals as listed in the itinerary",
      "A private safari (It will only be you and the driver guide in the vehicle)",
      "Mineral drinking water & Soft drinks",
    ],
    excluded: ["International flight tickets", "Visa", "Tips & Gratitude"],
  },
  {
    slug: "the-roof-of-africa",
    title: "The Roof of Africa",
    category: "Kilimanjaro Trek",
    days: 8,
    nights: 7,
    region: "Kilimanjaro · Lemosho Route",
    image: "/images/category-trekking.avif",
    alt: "Hikers on the trail to the summit of Mount Kilimanjaro",
    summary:
      "Eight days on the Lemosho Route, crossing montane forest, moorland and alpine desert before a night ascent to Uhuru Peak — the highest point on Mount Kilimanjaro and the continent of Africa.",
    priceFrom: "$1,970",
    priceUnit: "Per person",
    priceLines: [
      { label: "2 Persons", amount: "$2,104 per person" },
      { label: "3 - 6 Persons", amount: "$2,041 per person" },
      { label: "7 - 9 Persons", amount: "$2,026 per person" },
      { label: "10+ Persons", amount: "$1,970 per person" },
    ],
    destinations: [
      "Lemosho Glades",
      "Shira Plateau",
      "Barranco",
      "Karanga",
      "Barafu",
      "Uhuru Peak",
    ],
    route: {
      start: PT.moshi,
      points: [
        { ...PT.mtiMkubwa, label: "Day 1" },
        { ...PT.shira1, label: "Day 2" },
        { ...PT.shira2, label: "Day 3" },
        { ...PT.barranco, label: "Day 4" },
        { ...PT.karanga, label: "Day 5" },
        { ...PT.barafu, label: "Day 6" },
        { ...PT.uhuru, label: "Day 7" },
        { ...PT.mweka, label: "Day 7" },
      ],
      end: PT.mwekaGate,
    },
    itinerary: [
      {
        n: 0,
        label: "Day 0",
        title: "Pre-Trek Briefing",
        paragraphs: [
          "We will pick you up from Kilimanjaro Airport if you have chosen and drive you to your Moshi or Arusha accommodation.",
          "On this day, you will receive a briefing at your hotel before the trip. It is best to schedule your arrival for at least a day before the hike begins. We will spend the day conducting a pre-trek briefing. In addition, we will inspect your equipment and rent any that is required.",
        ],
        overnight: "Moshi or Arusha",
      },
      {
        n: 1,
        label: "Day 1",
        title: "Hotel to Mti Mkubwa Camp",
        paragraphs: [
          "After breakfast and briefing, drive to Lemosho Park Gate. From here a forest track requiring a 4WD vehicle leads to Lemosho Glades.",
          "Walk along forest trails to Mti Mkubwa (big tree) campsite.",
        ],
        overnight: "Mti Mkubwa Camp",
        meals: "Lunch & Dinner",
        stats: [
          { label: "Elevation", value: "1,830m → 2,650m" },
          { label: "Distance", value: "6 km / 4 mi" },
          { label: "Hiking Time", value: "2–3 hours" },
          { label: "Habitat", value: "Montane Forest" },
        ],
      },
      {
        n: 2,
        label: "Day 2",
        title: "Mti Mkubwa Camp to Shira 1 Camp",
        paragraphs: [
          "After breakfast, we continue as the trail gradually steepens and enters the giant heather moorland zone.",
          "After several streams are crossed, we continue over the Shira Ridge then gently downwards to Shira 1 camp located by a stream on the Shira Plateau.",
        ],
        overnight: "Shira 1 Camp",
        meals: "Breakfast, Lunch & Dinner",
        stats: [
          { label: "Elevation", value: "2,650m → 3,500m" },
          { label: "Distance", value: "8 km / 5 mi" },
          { label: "Hiking Time", value: "4–5 hours" },
          { label: "Habitat", value: "Moorland" },
        ],
      },
      {
        n: 3,
        label: "Day 3",
        title: "Shira 1 Camp to Shira 2 Camp",
        paragraphs: [
          "After breakfast, a gentle hike across the plateau leads to Shira 2 camp on moorland meadows by a stream.",
          "A variety of hikes are available on the Plateau, making this an excellent acclimatization day.",
        ],
        overnight: "Shira 2 Camp",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Acclimatization day on the Shira Plateau",
        stats: [
          { label: "Elevation", value: "3,500m → 3,850m" },
          { label: "Distance", value: "8 km / 5 mi" },
          { label: "Hiking Time", value: "4–5 hours" },
          { label: "Habitat", value: "Moorland" },
        ],
      },
      {
        n: 4,
        label: "Day 4",
        title: "Shira 2 Camp to Barranco Camp",
        paragraphs: [
          "From the Shira Plateau we continue to the east up a ridge, passing the junction towards the peak of Kibo. As we continue, our direction changes to the south east towards the Lava Tower, called the Shark's Tooth (4,650m / 15,250ft).",
          "Shortly after the tower we come to the second junction which goes to the Arrow Glacier. We now continue down to the Barranco Camp.",
          "Although you end the day around the same elevation as when you began, this day is very important for acclimatization and will help your body prepare for summit day.",
        ],
        overnight: "Barranco Camp",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Lava Tower at 4,650m — climb high, sleep low",
        stats: [
          { label: "Elevation", value: "3,850m → 4,000m" },
          { label: "Distance", value: "8 km / 5 mi" },
          { label: "Walking Time", value: "5–6 hours" },
          { label: "Habitat", value: "Semi-desert" },
        ],
      },
      {
        n: 5,
        label: "Day 5",
        title: "Barranco Camp to Karanga Camp",
        paragraphs: [
          "After breakfast, we leave Barranco and continue on a steep ridge up the Barranco Wall to the Karanga Valley and the junction which connects with the Mweka Trail.",
        ],
        overnight: "Karanga Camp",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "The Barranco Wall",
        stats: [
          { label: "Elevation", value: "4,000m → 4,050m" },
          { label: "Distance", value: "5 km / 3 mi" },
          { label: "Climbing Time", value: "3–4 hours" },
          { label: "Habitat", value: "Alpine Desert" },
        ],
      },
      {
        n: 6,
        label: "Day 6",
        title: "Karanga Camp to Barafu Camp",
        paragraphs: [
          "We continue up to the Barafu Camp. You have completed the South Circuit, which offers views of the summit from many different angles.",
          "Here we make camp, rest, enjoy dinner, and prepare for the summit day.",
        ],
        overnight: "Barafu Camp",
        meals: "Breakfast, Lunch & Dinner",
        stats: [
          { label: "Elevation", value: "4,050m → 4,700m" },
          { label: "Distance", value: "4 km / 2 mi" },
          { label: "Climbing Time", value: "3–4 hours" },
          { label: "Habitat", value: "Alpine Desert" },
        ],
      },
      {
        n: 7,
        label: "Day 7",
        title: "Barafu Camp to the Summit to Mweka Camp",
        paragraphs: [
          "Very early in the morning (midnight to 2am), we continue our way to the summit between the Rebmann and Ratzel glaciers. You head in a northwesterly direction and ascend through heavy scree towards Stella Point on the crater rim. This is the most mentally and physically challenging portion of the trek.",
          "At Stella Point you will stop for a short rest and will be rewarded with the most magnificent sunrise you are ever likely to see. Faster hikers may view the sunrise from the summit. From Stella Point, you may encounter snow all the way on your one-hour ascent to the summit. Once at Uhuru Peak you have reached the highest point on Mount Kilimanjaro and the continent of Africa.",
          "From the summit we begin our descent by continuing straight down to the Mweka Camp, stopping at Barafu for lunch. You may want gaiters and trekking poles for the loose gravel going down. We arrive at Mweka Camp and enjoy our last evening on the mountain.",
        ],
        overnight: "Mweka Camp",
        meals: "Breakfast, Lunch & Dinner",
        highlight: "Summit night — Stella Point to Uhuru Peak, 5,895m",
        stats: [
          { label: "Elevation", value: "4,700m → 5,895m → 3,090m" },
          { label: "Distance", value: "5 km up / 13 km down" },
          { label: "Hiking Time", value: "5–7 hours up / 5–6 down" },
          { label: "Habitat", value: "Stone scree & ice-capped summit" },
        ],
      },
      {
        n: 8,
        label: "Day 8",
        title: "Mweka Camp to Mweka Gate to Hotel",
        paragraphs: [
          "After breakfast we continue the descent down to the Mweka Park Gate to receive your summit certificates. At lower elevations, it can be wet and muddy — gaiters and trekking poles will help. Shorts and t-shirts will probably be plenty to wear, but keep rain gear and warmer clothing handy.",
          "An Atlas Tanzania Adventures vehicle will be waiting for you at Mweka Gate to drive you back to your hotel in Moshi or Arusha (around 60 minutes).",
        ],
        meals: "Breakfast",
        highlight: "Summit certificates at Mweka Gate",
        stats: [
          { label: "Elevation", value: "3,090m → 1,680m" },
          { label: "Distance", value: "10 km / 6 mi" },
          { label: "Hiking Time", value: "3–4 hours" },
          { label: "Habitat", value: "Forest" },
        ],
      },
    ],
    addOns: ["materuni-waterfalls", "arusha-town-tour"],
    included: [
      "Both airport transfers",
      "All transfers to the mountain and back to your Moshi or Arusha hotel",
      "Professional, experienced, mountain guides",
      "Guides, Porters, Cook salaries and park fees",
      "Quality, waterproof, four-season mountain sleeping tents (on twin sharing basis)",
      "Sleeping Mattress",
      "Emergency Oxygen Cylinder",
      "All meals while on the Mountain",
      "Breakfast meal plan in Arusha",
      "Quality Mess tents with table and chairs",
      "Clean, purified drinking water",
      "Conservation fees (part of park fees)",
      "Camping or Hut fees (part of park fees)",
      "Rescue fees (part of park fees)",
      "VAT (18% charged by the Government)",
      "Kilimanjaro summit certificate",
    ],
    excluded: [
      "Tanzania Visa",
      "International and domestic flights",
      "Hotel (available as an optional add on)",
      "Transfers (available as an optional add on)",
      "Personal trekking equipment such as sleeping bags, hiking boots, clothes, etc (available for renting)",
      "Tips and gratuities",
      "Travel insurance",
      "Personal Expenses (e.g. laundry, telephone, beverages, etc.)",
      "Meals not listed in the itinerary",
      "Liquors, beers and bottled beverages",
    ],
  },
];
