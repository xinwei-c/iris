

import peru1 from "@/assets/photography/peru/peru1.jpg";
import peru2 from "@/assets/photography/peru/peru2.jpg";
import peru3 from "@/assets/photography/peru/peru3.jpg";
import peru4 from "@/assets/photography/peru/peru4.jpg";
import peru5 from "@/assets/photography/peru/peru5.jpg";
import peru6 from "@/assets/photography/peru/peru6.jpg";
import peru7 from "@/assets/photography/peru/peru7.jpg";
import peru8 from "@/assets/photography/peru/peru8.jpg";
import peru9 from "@/assets/photography/peru/peru9.jpg";
import peru10 from "@/assets/photography/peru/peru10.jpg";

export interface PhotoSeries {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  year: string;
  location?: string;
  photoCount: number;
  photos: { src: string; caption?: string }[];
}


export const photoSeries: PhotoSeries[] = [
  {
    id: "peru",
    title: "Peru Wonders",
    subtitle: "Travel to Peru",
    description:
      "Our meeting with lost Inka",
    year: "2026",
    location: "Peru",
    photoCount: 10,
    photos: [
    { src: peru1 },
    { src: peru2 },
    { src: peru3 },
    { src: peru4 },
    { src: peru5 },
    { src: peru6 },
    { src: peru7 },
    { src: peru8 },
    { src: peru9 },
    { src: peru10 },
  ],
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
    photos: [], 
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
    photos: [], 
  },
  
];
