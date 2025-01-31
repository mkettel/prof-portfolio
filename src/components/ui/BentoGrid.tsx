import React, { useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideWidth = window.innerWidth * 0.36;
  const gap = 16; // 4 in tailwind equals 16px
  
  const handleNext = () => {
    if (currentIndex < allImages.length - 1) {
      const nextIndex = currentIndex + 1;
      animate(x, -(nextIndex * (slideWidth + gap)), {
        type: "spring",
        stiffness: 300,
        damping: 30
      });
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const nextIndex = currentIndex - 1;
      animate(x, -(nextIndex * (slideWidth + gap)), {
        type: "spring",
        stiffness: 300,
        damping: 30
      });
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div className="relative group rounded-lg">
      <motion.div 
        className="overflow-hidden cursor-grab rounded-lg active:cursor-grabbing"
      >
        <motion.div
          drag="x"
          dragConstraints={{
            left: -((allImages.length - 1) * (slideWidth + gap)),
            right: 0
          }}
          className="flex gap-4"
          style={{ x }}
          onDragEnd={(event, info) => {
            const velocity = info.velocity.x;
            const offset = info.offset.x;
            
            // Calculate the nearest slide based on current position and velocity
            const currentX = x.get();
            const nearestSlide = Math.round(-currentX / (slideWidth + gap));
            const bounded = Math.max(0, Math.min(nearestSlide, allImages.length - 1));
            
            animate(x, -(bounded * (slideWidth + gap)), {
              type: "spring",
              stiffness: 300,
              damping: 30
            });
            setCurrentIndex(bounded);
          }}
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

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0
                 hover:bg-black/70 disabled:cursor-not-allowed"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex === allImages.length - 1}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0
                 hover:bg-black/70 disabled:cursor-not-allowed"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Optional: Dots Indicator */}
      <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 flex gap-2 pb-2">
        {allImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              animate(x, -(index * (slideWidth + gap)), {
                type: "spring",
                stiffness: 300,
                damping: 30
              });
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}