"use client";
import { Product } from "@/types/products";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/constants/products";
import { ChevronRight, ChevronLeft } from 'lucide-react';


export const SingleProduct = ({ product }: { product: Product }) => {
  const [activeImage, setActiveImage] = useState<StaticImageData | string>(
    product.thumbnail
  );
  const [thumbnails, setThumbnails] = useState<(StaticImageData | string)[]>(product.images);

  const getSlugFromId = (id: number) => {
    // in products find the id that matches the id passed
    const product = products.find((product) => product.id === id);
    // return the slug of the product
    return product?.slug;
  }

  const nextAndPrevProduct = (direction: string) => {
    const currentIndex = product.id || 0; 
    if (direction === 'next') {
      const nextIndex = currentIndex + 1;
      const slug = getSlugFromId(nextIndex);
      return slug;
    } else {
      const prevIndex = currentIndex - 1;
      const slug = getSlugFromId(prevIndex);
      return slug;
    }
  }

  /**
   * If the other images are clicked then swap the thumbnail image to the other positions
   * 
   */

  const handleImageSwap = (image: StaticImageData | string) => {
    setActiveImage(image);
    setThumbnails(prevThumbnails => {
      const newThumbnails = prevThumbnails.filter(thumb => thumb !== image); 
      return [...newThumbnails, activeImage];
    });
  };

  useEffect(() => {
    console.log('active image changed', activeImage)
  }, [activeImage])


  return (
    <div className="">
      <AnimatePresence mode="wait">
        <motion.div
          key={typeof activeImage === 'string' ? activeImage : activeImage.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-lg overflow-hidden"
        >
          <Image
            src={activeImage}
            alt="thumbnail"
            height="1000"
            width="1000"
            className="rounded-md object-contain"
          />
          <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
        </motion.div>
      </AnimatePresence>
      <motion.div 
        className="flex flex-row justify-center my-8 flex-wrap"
        layout
      >
        {thumbnails.map((image, idx) => (
          <motion.button
            layout
            onClick={() => handleImageSwap(image)}
            key={typeof image === 'string' ? image : image.src}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt="product thumbnail"
              height="1000"
              width="1000"
              className="h-14 w-16 md:h-40 md:w-60 object-cover object-top mr-4 mb-r border rounded-lg border-neutral-100"
            />
          </motion.button>
        ))}
      </motion.div>
      
      <div className="flex lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {product.title}</Heading>
        <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
          {product.stack?.map((stack: string) => (
            <span
              key={stack}
              className="text-xs dark:text-zinc-400 md:text-xs lg:text-xs bg-gray-50 dark:bg-zinc-800 px-2 py-1 rounded-sm text-secondary"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <Paragraph className="max-w-xl mt-4 dark:text-zinc-400 ">{product.description}</Paragraph>
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600 dark:text-zinc-400">
        {product?.content}
      </div>
      <div className="flex border-t-2 border-gray-200 gap-1.5 pt-2 mb-4 items-center justify-start">
        <Paragraph className="max-w-xl mt-0 dark:text-zinc-400">{product.clientBlurb}{" "}</Paragraph>
        <Paragraph className="max-w-xl  mt-0 font-semibold dark:text-zinc-400"> {product.client}</Paragraph>
      </div>

      <a
        href={product.href}
        target="__blank"
        className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-800 text-white shadow-lg shadow-black/20 sm:backdrop-blur-sm group-hover/button:bg-gray-50/15 group-hover/button:scale-105 focus-visible:ring-1 focus-visible:ring-offset-2 ring-gray-50/60 text-sm font-medium px-4 py-2 mt-auto origin-left"
      >
        Live Preview
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg>
      </a>
      <div className="flex justify-between mt-14 w-full">
        <Link 
          className="p-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100" 
          href={`/projects/${nextAndPrevProduct('prev')}`}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-blue-500" />
        </Link>
        <Link 
          className="p-2 rounded-full transition-colors duration-200 ease-in-out hover:bg-gray-100" 
          href={`/projects/${nextAndPrevProduct('next')}`}
        >
          <ChevronRight className="w-6 h-6 text-gray-600 transition-colors duration-200 ease-in-out group-hover:text-blue-500" />
        </Link>
      </div>
    </div>
  );
};
