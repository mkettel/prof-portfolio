import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  images: StaticImageData[] | string[];
  href: string;
  client?: string;
  clientBlurb?: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
