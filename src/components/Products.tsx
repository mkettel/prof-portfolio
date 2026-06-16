"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product, MediaItem } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { motion } from "framer-motion";

// Type guard for MediaItem thumbnails (video/reel/image with a `type` field)
const isMediaItem = (thumb: Product["thumbnail"]): thumb is MediaItem =>
  typeof thumb === "object" && thumb !== null && "type" in thumb;

// Uniform thumbnail frame - every card is the same size; media is letterboxed
// (object-contain) inside it so nothing gets cropped.
const FRAME =
  "relative rounded-md w-[200px] h-[200px] flex-shrink-0 overflow-hidden";

const ProductThumbnail = ({ thumbnail }: { thumbnail: Product["thumbnail"] }) => {
  // Video / reel thumbnails autoplay in a muted loop
  if (isMediaItem(thumbnail) && (thumbnail.type === "video" || thumbnail.type === "reel")) {
    const src = typeof thumbnail.src === "string" ? thumbnail.src : thumbnail.src.src;
    const poster =
      thumbnail.poster && typeof thumbnail.poster !== "string"
        ? thumbnail.poster.src
        : (thumbnail.poster as string | undefined);

    return (
      <div className={FRAME}>
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          draggable={false}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    );
  }

  // Image thumbnails (StaticImageData or an image MediaItem)
  const imageSrc = isMediaItem(thumbnail) ? thumbnail.src : thumbnail;

  return (
    <div className={FRAME}>
      <Image
        src={imageSrc}
        alt="thumbnail"
        fill
        sizes="200px"
        className="object-contain"
      />
    </div>
  );
};

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {products.map((product: Product, idx: number) => (
          <motion.div
            key={product.slug ?? idx}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.slug ? `/projects/${product.slug}` : product.href}
              className="group hover:translate-x-1 ease-in flex p-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-2xl transition duration-200"
            >
              <ProductThumbnail thumbnail={product.thumbnail} />
              <div className="flex flex-col justify-center">
                <div className="">
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg dark:text-white"
                  >
                    {product.title}
                  </Heading>
                  <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl dark:text-zinc-400">
                    {product.description}
                  </Paragraph>
                </div>
                <div className="flex gap-1 flex-wrap mt-4">
                  {product.stack?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
