import React, { useState } from 'react';
import { motion, useMotionValue, animate, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Expand, Move } from 'lucide-react';

const CustomCursor = ({ mouseX, mouseY }: any) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-[100] flex items-center justify-center"
      style={{
        left: mouseX,
        top: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 100,
        mass: 0.7
      }}
    >
      <div className="w-16 h-16 mix-blend-difference rounded-full border-2 p-6 border-black flex items-center justify-center">
        <p className='text-black mix-blend-difference'>drag</p>
      </div>
    </motion.div>
  );
};

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
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  const [showCursor, setShowCursor] = useState(false);
  
  const mouseX = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const slideWidth = window.innerWidth * 0.36;
  const gap = 16;
  
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
    <>
      <AnimatePresence>
        {showCursor && (
          <CustomCursor 
            mouseX={mouseX} 
            mouseY={mouseY} 
          />
        )}
      </AnimatePresence>

      <div 
        className="relative group rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <motion.div 
          className="overflow-hidden cursor-none rounded-lg"
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
                className="flex-none relative group/image"
                whileHover={{ scale: 1.00 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="rounded-lg w-[40vw] h-full object-cover select-none"
                  draggable={false}
                />
                <motion.button
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover/image:opacity-100 transition-all hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  aria-label="View full image"
                >
                  <Expand size={20} />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0
                   hover:bg-black/90 disabled:cursor-not-allowed cursor-none"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === allImages.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0
                   hover:bg-black/90 disabled:cursor-not-allowed cursor-none"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

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

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-7xl mx-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allImages[selectedImage].src}
                alt={allImages[selectedImage].title}
                className="max-h-[80vh] w-auto rounded-lg"
              />
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prev => prev !== null && prev > 0 ? prev - 1 : prev);
                  }}
                  disabled={selectedImage === 0}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prev => prev !== null && prev < allImages.length - 1 ? prev + 1 : prev);
                  }}
                  disabled={selectedImage === allImages.length - 1}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}