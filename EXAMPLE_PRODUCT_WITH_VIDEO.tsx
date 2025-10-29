// // Example: How to add a product with images, videos, and reels

// import productHome from "public/images/product-home.png";
// import productDash from "public/images/product-dash.png";
// // Import your video files
// import productDemoVideo from "public/videos/demo.mp4";
// import productHighlightReel from "public/videos/highlight-reel.mp4";
// import videoThumbnail from "public/images/video-thumb.png";

// export const exampleProductWithVideo = {
//   id: 7,
//   href: "https://myproduct.com/",
//   title: "My Product with Videos",
//   description: "A product showcasing images, videos, and reels in the carousel.",

//   // Thumbnail can be an image or a MediaItem
//   thumbnail: productHome,

//   // Images array can contain:
//   // 1. StaticImageData (imported images)
//   // 2. String URLs
//   // 3. MediaItem objects with type, src, poster, and title
//   images: [
//     // Regular imported image
//     productDash,

//     // Video with controls
//     {
//       type: 'video',
//       src: productDemoVideo, // Can also be a URL string: "https://example.com/video.mp4"
//       poster: videoThumbnail, // Optional thumbnail
//       title: 'Product Demo Video'
//     },

//     // Reel (auto-loops, muted, no controls)
//     {
//       type: 'reel',
//       src: productHighlightReel,
//       poster: videoThumbnail, // Optional
//       title: 'Quick Highlight Reel'
//     },

//     // Another regular image
//     productHome,

//     // Video with URL
//     {
//       type: 'video',
//       src: '/videos/tutorial.mp4',
//       title: 'How to Use'
//     }
//   ],

//   stack: ["React", "TypeScript", "Video"],
//   client: "Example Corp",
//   clientBlurb: "Built for",
//   slug: "example-product",
//   content: (
//     <div>
//       <p>
//         This product demonstrates how to mix images, videos, and reels in the carousel.
//         Videos will have controls, while reels auto-loop silently.
//       </p>
//     </div>
//   ),
// };

// // You can also keep using the old format - it's 100% backward compatible!
// export const exampleProductWithImagesOnly = {
//   id: 8,
//   href: "https://myproduct.com/",
//   title: "Traditional Product",
//   description: "This uses the old format and works perfectly.",
//   thumbnail: productHome,
//   images: [productDash, productHome], // Just images like before
//   // ... rest of your product
// };
