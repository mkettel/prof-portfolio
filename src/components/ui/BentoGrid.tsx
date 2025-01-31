import React from 'react';
import { motion, useMotionValue } from 'framer-motion';

export default function BentoGrid({
  images,
  title,
  thumbnail,
}: {
  images: any;
  title: string;
  thumbnail: any;
}) {
  const allImages = [thumbnail, ...images];
  const x = useMotionValue(0);

  return (
    <motion.div 
      className="overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <motion.div
        drag="x"
        dragConstraints={{
          left: -((allImages.length - 1) * (window.innerWidth * 0.36)), // 40vw + gap
          right: 0
        }}
        className="flex gap-4 pb-4"
        style={{ x }}
      >
        {allImages.map((image: any, index: number) => (
          <motion.div 
            key={index} 
            className="flex-none"
            whileHover={{ scale: 1.00 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.2 }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="rounded-lg w-[40vw] h-full object-cover select-none"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}