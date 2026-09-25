/** Photographs illustrating the Zanzibar excursions guide.
 *
 * Every file came from Wikimedia Commons on 25 September 2026, cropped to 3:2
 * to match the itinerary photographs. They illustrate the excursion; none is a
 * photograph of an Atlas departure.
 *
 * The page renders no credit line — that is a deliberate call by Atlas, taken
 * on 25 September 2026. Photographer, licence and Commons file are recorded in
 * public/images/zanzibar/SOURCES.md, which stays the provenance record for
 * these files.
 *
 * Keys are the excursion's heading in ZANZIBAR EXCURSIONS.docx, so renaming a
 * heading in the source document drops its photograph rather than mismatching
 * one.
 */
export interface SectionPhoto {
  src: string;
  alt: string;
}

const zanzibarPhotos: Record<string, SectionPhoto> = {
  "Mnemba Atoll Snorkeling": {
    src: "/images/zanzibar/mnemba-atoll.jpg",
    alt: "A reef fish in the shallow turquoise water off Mnemba Island",
  },
  "Safari Blue": {
    src: "/images/zanzibar/safari-blue-dhow.jpg",
    alt: "The sail and bow of a traditional dhow under way off Zanzibar",
  },
  "Nakupenda Sandbank": {
    src: "/images/zanzibar/nakupenda-sandbank.jpg",
    alt: "A figure wading the shallow flats off a Zanzibar sandbank",
  },
  "Blue Lagoon Snorkeling": {
    src: "/images/zanzibar/blue-lagoon-snorkeling.jpg",
    alt: "A snorkeller swimming through clear blue water",
  },
  "Sunset Dhow Cruise": {
    src: "/images/zanzibar/sunset-dhow-cruise.jpg",
    alt: "A dhow under sail against an orange Zanzibar sunset",
  },
  "Romantic Sunset Cruise": {
    src: "/images/zanzibar/romantic-sunset-cruise.jpg",
    alt: "The silhouette of a dhow's sail as the sun drops into the Indian Ocean",
  },
  "Dolphin Experience": {
    src: "/images/zanzibar/dolphin-experience.jpg",
    alt: "Dolphins surfacing beside a boat of visitors off the Zanzibar coast",
  },
  "Salaam Cave – Swim with Turtles": {
    src: "/images/zanzibar/swim-with-turtles.jpg",
    alt: "A green sea turtle resting on a shallow coral reef",
  },
  "Jozani Forest": {
    src: "/images/zanzibar/jozani-red-colobus.jpg",
    alt: "A Zanzibar red colobus monkey in the canopy at Jozani",
  },
  "Spice Farm Experience": {
    src: "/images/zanzibar/spice-farm-nutmeg.jpg",
    alt: "A farmer holding a freshly opened nutmeg on a Zanzibar spice farm",
  },
  "Stone Town Tour": {
    src: "/images/zanzibar/stone-town-alley.jpg",
    alt: "A narrow Stone Town lane between tall coral-rag buildings",
  },
  "Prison Island": {
    src: "/images/zanzibar/prison-island-tortoise.jpg",
    alt: "An Aldabra giant tortoise on Changuu, known as Prison Island",
  },
  "Forodhani Evening Food Experience": {
    src: "/images/zanzibar/forodhani-night-market.jpg",
    alt: "Lit food stalls filling Forodhani Gardens after dark",
  },
  "Local Village & Cultural Experience": {
    src: "/images/zanzibar/fishing-village.jpg",
    alt: "Fishing boats drawn up beside a village on the Zanzibar shore",
  },
  "Private Beach Picnic": {
    src: "/images/zanzibar/private-beach.jpg",
    alt: "A quiet stretch of Zanzibar beach below a thatched makuti shelter",
  },
};

/** The photograph for an excursion, where Commons has one worth showing.
 *
 * Four excursions have none — horseback riding, the candlelit beach dinner,
 * the couples massage and the sunset ride — because Commons has no honest
 * photograph of them. They render as text, as they did before.
 */
export function sectionPhoto(slug: string, sectionTitle: string): SectionPhoto | undefined {
  return slug === "zanzibar-excursions" ? zanzibarPhotos[sectionTitle] : undefined;
}
