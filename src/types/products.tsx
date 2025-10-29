import { StaticImageData } from "next/image";

export type MediaType = 'image' | 'video' | 'reel';

export type MediaItem = {
  type: MediaType;
  src: StaticImageData | string;
  title?: string;
  poster?: StaticImageData | string; // Optional poster/thumbnail for videos
};

export type Product = {
  id?: number;
  title: string;
  description: string;
  thumbnail: StaticImageData | MediaItem;
  images: (StaticImageData | string | MediaItem)[];
  href: string;
  client?: string;
  clientBlurb?: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
