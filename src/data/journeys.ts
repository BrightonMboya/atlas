export interface Stop {
  place: string;
  nights: number;
  note: string;
  image: string;
}

export interface PriceLine {
  label: string;
  amount: string;
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
  stops: Stop[];
  included: string[];
  excluded: string[];
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
    stops: [
      {
        place: "Arusha",
        nights: 2,
        note: "Two intentionally slow days to settle in — free to rest, swim or enjoy the gardens, with no early morning wake-up calls or long drives before the safari begins.",
        image: "/images/category-safaris.avif",
      },
      {
        place: "Tarangire",
        nights: 2,
        note: "Famous for its magnificent baobab trees and large herds of elephants, explored on a full-day private safari adapted to the family's pace, with a picnic lunch in the park.",
        image: "/images/itinerary-tarangire-ngorongoro.jpg",
      },
      {
        place: "Karatu",
        nights: 3,
        note: "A charming town nestled among the green landscapes of the Ngorongoro Highlands, with a no-rush family day at the lodge before descending into the Ngorongoro Crater's extraordinary natural amphitheatre.",
        image: "/images/destination-tanzania.avif",
      },
    ],
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
    stops: [
      {
        place: "Arusha & Lake Duluti",
        nights: 2,
        note: "A private sunset canoeing experience on the calm waters of Lake Duluti — paddling together as the sun slowly sets, a beautiful and intimate beginning to your honeymoon.",
        image: "/images/lodge-siringit-camp.jpg",
      },
      {
        place: "Tarangire",
        nights: 1,
        note: "Known for its majestic baobab trees and large elephant populations, a beautiful introduction to Tanzania's wilderness before continuing to your romantic lodge.",
        image: "/images/itinerary-tarangire-ngorongoro.jpg",
      },
      {
        place: "Karatu",
        nights: 1,
        note: "Nestled among the lush landscapes of the Ngorongoro Highlands, with the afternoon free to relax together in peaceful surroundings.",
        image: "/images/destination-tanzania.avif",
      },
      {
        place: "Ngorongoro",
        nights: 1,
        note: "A private game drive into the spectacular Ngorongoro Crater, then a beautiful and intimate night surrounded by the peaceful highland atmosphere.",
        image: "/images/why-travel-cheetah.jpg",
      },
      {
        place: "Serengeti",
        nights: 2,
        note: "Private game viewing across the endless plains and a romantic Serengeti sundowner — raising a glass together as the sun disappears, painting the sky in warm golden colours.",
        image: "/images/itinerary-tanzania-luxury-zanzibar.jpg",
      },
      {
        place: "Zanzibar",
        nights: 6,
        note: "Island life at your own pace — a private candlelit beach dinner, a romantic sunset cruise, a couples' massage, and days with nothing scheduled but each other.",
        image: "/images/itinerary-zanzibar-bliss.jpg",
      },
    ],
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
    stops: [
      {
        place: "West Kilimanjaro & Sinya",
        nights: 2,
        note: "A bush walk with a Maasai warrior on your first evening, then a private safari in the Sinya Wildlife Area at the foot of Mount Kilimanjaro and a visit to a Maasai community for an authentic cultural experience.",
        image: "/images/category-trekking.avif",
      },
      {
        place: "Tarangire",
        nights: 1,
        note: "Spectacular landscapes of ancient baobabs, open savannah and seasonal wetlands — particularly famous for its large elephant populations.",
        image: "/images/itinerary-tarangire-ngorongoro.jpg",
      },
      {
        place: "Ngorongoro",
        nights: 1,
        note: "The landscape gradually changes as you climb into the beautiful highlands surrounding Ngorongoro, with the afternoon at leisure.",
        image: "/images/why-travel-cheetah.jpg",
      },
      {
        place: "Serengeti",
        nights: 3,
        note: "After a game drive across the Ngorongoro Crater floor, two full days exploring the Serengeti's endless plains — lions, cheetahs, leopards and vast herds of wildebeest.",
        image: "/images/destination-tanzania.avif",
      },
      {
        place: "Zanzibar",
        nights: 5,
        note: "From the wild to the beach — days at your own pace with Stone Town, a spice farm, snorkelling, Mnemba Atoll, Jozani Forest, Safari Blue or a sandbank excursion.",
        image: "/images/itinerary-zanzibar-bliss.jpg",
      },
    ],
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
    stops: [
      {
        place: "Arusha",
        nights: 2,
        note: "Your first welcome to Tanzania, followed by a walking safari through Arusha National Park's forest trails towards a beautiful waterfall, encountering giraffes, buffaloes, zebras and warthogs along the way.",
        image: "/images/category-safaris.avif",
      },
      {
        place: "Karatu",
        nights: 1,
        note: "Tarangire's elephants & baobabs — a game drive through the park's enormous elephant herds and ancient baobab trees before continuing to Karatu.",
        image: "/images/itinerary-tarangire-ngorongoro.jpg",
      },
      {
        place: "Serengeti",
        nights: 3,
        note: "Ngorongoro Crater & entering the Serengeti, then full days following the Great Migration — more than 1.5 million wildebeest moving across the endless plains.",
        image: "/images/destination-tanzania.avif",
      },
      {
        place: "Zanzibar",
        nights: 6,
        note: "A direct flight from safari to Zanzibar, then five blissful nights of island relaxation — swim in crystal-clear waters, relax on white-sand beaches, or add a Stone Town tour, spice farm visit or sandbank excursion.",
        image: "/images/itinerary-zanzibar-bliss.jpg",
      },
    ],
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
    stops: [
      {
        place: "Arusha",
        nights: 3,
        note: "A gentle beginning to explore the city or a local market, followed by a guided walking safari in Arusha National Park to a waterfall, encountering giraffes, zebras and buffaloes along forest trails.",
        image: "/images/category-safaris.avif",
      },
      {
        place: "Tarangire",
        nights: 2,
        note: "Famous for its ancient baobabs and enormous elephant herds, explored over two full days with the freedom to follow the wildlife encounters that unfold.",
        image: "/images/itinerary-tarangire-ngorongoro.jpg",
      },
      {
        place: "Serengeti",
        nights: 3,
        note: "Entering via a spectacular Ngorongoro viewpoint, the Serengeti's golden plains are at the heart of the Great Migration — more than 1.5 million wildebeest moving across the ecosystem.",
        image: "/images/destination-tanzania.avif",
      },
      {
        place: "Karatu",
        nights: 1,
        note: "A game drive across the remarkable floor of the Ngorongoro Crater before your final night surrounded by the beautiful landscapes of the highlands.",
        image: "/images/why-travel-cheetah.jpg",
      },
    ],
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
    stops: [
      {
        place: "Mti Mkubwa Camp",
        nights: 1,
        note: "From Lemosho Glades, forest trails lead to the 'big tree' campsite through montane forest.",
        image: "/images/category-trekking.avif",
      },
      {
        place: "Shira 1 & Shira 2 Camp",
        nights: 2,
        note: "The trail steepens through giant heather moorland before a gentle acclimatization day across the Shira Plateau's moorland meadows.",
        image: "/images/category-trekking.avif",
      },
      {
        place: "Barranco Camp",
        nights: 1,
        note: "Past the Lava Tower — the 'Shark's Tooth' — at 4,650m, a crucial acclimatization day that helps the body prepare for summit day.",
        image: "/images/category-trekking.avif",
      },
      {
        place: "Karanga & Barafu Camp",
        nights: 2,
        note: "Up the Barranco Wall into the Karanga Valley, then on to Barafu Camp to rest and prepare for summit night.",
        image: "/images/category-trekking.avif",
      },
      {
        place: "Summit & Mweka Camp",
        nights: 1,
        note: "A night ascent through Stella Point to Uhuru Peak — the highest point in Africa — rewarded by the most magnificent sunrise, before descending to Mweka Camp.",
        image: "/images/category-trekking.avif",
      },
    ],
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
