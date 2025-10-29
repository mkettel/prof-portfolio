import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, AnimatePresence, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Expand, Move } from 'lucide-react';
import { MediaItem as MediaItemType } from '@/types/products';

// Helper function to check if an item is a MediaItem
const isMediaItem = (item: any): item is MediaItemType => {
  return item && typeof item === 'object' && 'type' in item && 'src' in item;
};

// Helper function to get the source from any media type
const getMediaSrc = (media: any): string => {
  if (isMediaItem(media)) {
    return typeof media.src === 'string' ? media.src : media.src.src;
  }
  return typeof media === 'string' ? media : media.src;
};

// Helper function to get media type
const getMediaType = (media: any): 'image' | 'video' | 'reel' => {
  if (isMediaItem(media)) {
    return media.type;
  }
  return 'image'; // Default to image for backward compatibility
};

// Component to render different media types
const MediaRenderer = ({
  media,
  className,
  onClick
}: {
  media: any;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const type = getMediaType(media);
  const src = getMediaSrc(media);
  const poster = isMediaItem(media) && media.poster ? getMediaSrc(media.poster) : undefined;

  useEffect(() => {
    const videoElement = videoRef.current;

    // Auto-play reels when they come into view
    if (type === 'reel' && videoElement) {
      videoElement.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }

    // Pause video when component unmounts
    return () => {
      if (videoElement) {
        videoElement.pause();
      }
    };
  }, [type]);

  if (type === 'video' || type === 'reel') {
    return (
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={className}
        controls={type === 'video'}
        loop={type === 'reel'}
        muted={type === 'reel'}
        autoPlay={type === 'reel'}
        playsInline
        onClick={onClick}
        draggable={false}
        preload="metadata"
      />
    );
  }

  return (
    <img
      src={src}
      alt={isMediaItem(media) ? media.title : 'media'}
      className={className}
      onClick={onClick}
      draggable={false}
    />
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  }
};

const CustomCursor = ({ mouseX, mouseY }: any) => {
  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 100,
        mixBlendMode: 'difference'
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
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
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <Move />
        </div>
      </motion.div>
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
  const [slideWidth, setSlideWidth] = useState(0);
  const gap = 16;
  
  const mouseX = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });
  const mouseY = useSpring(0, { damping: 25, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    const updateSlideWidth = () => {
      const newWidth = window.innerWidth * 0.36;
      setSlideWidth(newWidth);
      console.log('newWidth', newWidth);
      
      // Update current slide position when width changes
      animate(x, -(currentIndex * (newWidth + gap)), {
        type: "spring",
        stiffness: 300,
        damping: 30
      });
    };

    // Initial width calculation
    updateSlideWidth();

    // Add resize listener
    window.addEventListener('resize', updateSlideWidth);

    // Cleanup
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, [currentIndex, gap, x]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };
  
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
      {/* <AnimatePresence>
        {showCursor && (
          <CustomCursor 
            mouseX={mouseX} 
            mouseY={mouseY} 
          />
        )}
      </AnimatePresence> */}

      <div 
        className="relative group rounded-lg"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        <motion.div 
          className="overflow-hidden cursor-auto rounded-lg"
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
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
                variants={item}
                className="flex-none relative group/image"
                whileHover={{ scale: 1.00 }}
                transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.2 }}
              >
                <MediaRenderer
                  media={image}
                  className="rounded-lg w-auto h-[25vh] md:w-[40vw] md:h-full object-cover select-none"
                />
                <motion.button

                  className="absolute top-4 right-4 bg-black/30 p-2 rounded-full text-white opacity-0 group-hover/image:opacity-100 transition-all hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(index);
                  }}
                  aria-label="View full media"
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
                   hover:bg-black/90 disabled:cursor-not-allowed cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === allImages.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full 
                   opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0
                   hover:bg-black/90 disabled:cursor-not-allowed cursor-pointer"
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
              <MediaRenderer
                media={allImages[selectedImage]}
                className="max-h-[80vh] w-auto rounded-lg"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 z-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prev => prev !== null && prev > 0 ? prev - 1 : prev);
                  }}
                  disabled={selectedImage === 0}
                  className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Previous media"
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
                  aria-label="Next media"
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