export interface PhotoSeries {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  location?: string;
  photoCount: number;
}

export const photoSeries: PhotoSeries[] = [
  {
    id: "quiet-hours",
    title: "Quiet Hours",
    subtitle: "4–6 AM across three cities",
    description:
      "A documentary photography series capturing the stillness of cities between 4 and 6 AM. Shot over six months across Tokyo, Taipei, and Vancouver.",
    year: "2025",
    location: "Tokyo · Taipei · Vancouver",
    photoCount: 8,
  },
  {
    id: "seasons-in-kyoto",
    title: "Seasons in Kyoto",
    subtitle: "A year in temple gardens",
    description:
      "Documenting the changing seasons through Kyoto's gardens and temples — the subtle transitions in light, foliage, and atmosphere.",
    year: "2024",
    location: "Kyoto",
    photoCount: 10,
  },
  {
    id: "finding-light",
    title: "Finding Light",
    subtitle: "Urban light studies",
    description:
      "A visual meditation on how natural light transforms urban spaces throughout the day. Exploring the interplay of shadow and architecture.",
    year: "2024",
    location: "Various",
    photoCount: 6,
  },
  {
    id: "in-between",
    title: "In Between",
    subtitle: "Transit and transition",
    description:
      "Portraits of people in motion — on trains, in airports, at bus stops. The liminal spaces where we pause between destinations.",
    year: "2023",
    location: "Asia · North America",
    photoCount: 7,
  },
];
