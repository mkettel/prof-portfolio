# Video and Reel Support in Product Carousel

Your product carousel now supports images, videos, and reels! Here's how to use them.

## Media Types

- **image**: Standard images (default for backward compatibility)
- **video**: Full videos with controls
- **reel**: Auto-looping, muted short-form videos (like Instagram Reels)

## Basic Usage

### Option 1: Continue Using Images (Backward Compatible)

```tsx
// Your existing products still work!
{
  id: 1,
  title: "My Product",
  thumbnail: myImageImport,
  images: [image1, image2, image3],
  // ... other fields
}
```

### Option 2: Add Videos and Reels

```tsx
import productVideo from "public/videos/my-product-demo.mp4";
import productReel from "public/videos/my-product-reel.mp4";
import videoPoster from "public/images/video-thumbnail.png";

{
  id: 1,
  title: "My Product with Video",
  thumbnail: myImageImport,
  images: [
    image1,
    // Add a video with controls
    {
      type: 'video',
      src: productVideo,
      poster: videoPoster, // Optional thumbnail while video loads
      title: 'Product Demo'
    },
    // Add a reel (auto-loops, muted)
    {
      type: 'reel',
      src: productReel,
      poster: videoPoster, // Optional
      title: 'Quick Preview'
    },
    image2,
    image3
  ],
  // ... other fields
}
```

### Option 3: Using External URLs

```tsx
{
  id: 1,
  title: "My Product",
  thumbnail: myImageImport,
  images: [
    image1,
    {
      type: 'video',
      src: 'https://example.com/my-video.mp4',
      poster: 'https://example.com/video-poster.jpg',
      title: 'Product Demo'
    },
    {
      type: 'reel',
      src: '/videos/my-reel.mp4', // Local path also works
      title: 'Quick Reel'
    }
  ],
  // ... other fields
}
```

## Key Differences

### Video vs Reel

| Feature | Video | Reel |
|---------|-------|------|
| Controls | ✅ Yes | ❌ No |
| Auto-loop | ❌ No | ✅ Yes |
| Muted | ❌ No | ✅ Yes |
| Use case | Full product demos, tutorials | Quick previews, highlights |

## Complete Example

Here's a complete product entry mixing images, videos, and reels:

```tsx
import productHome from "public/images/product-home.png";
import productDash from "public/images/product-dash.png";
import productDemo from "public/videos/product-demo.mp4";
import productReel from "public/videos/product-highlight.mp4";
import demoThumb from "public/images/demo-thumbnail.png";

{
  id: 7,
  href: "https://myproduct.com/",
  title: "My Amazing Product",
  description: "A revolutionary product that changes everything.",
  thumbnail: productHome,
  images: [
    // Regular image
    productDash,

    // Video with controls and poster
    {
      type: 'video',
      src: productDemo,
      poster: demoThumb,
      title: 'Full Product Demo'
    },

    // Auto-looping reel
    {
      type: 'reel',
      src: productReel,
      title: 'Quick Highlight Reel'
    },

    // Another image
    productHome
  ],
  stack: ["React", "TypeScript", "Tailwind"],
  client: "Acme Corp",
  clientBlurb: "Built for",
  slug: "my-amazing-product",
  content: (
    <div>
      <p>Product description here...</p>
    </div>
  ),
}
```

## Best Practices

1. **Poster Images**: Always provide a `poster` image for videos to improve initial load experience
2. **File Size**: Keep video files optimized and compressed
3. **Reel Length**: Keep reels short (5-15 seconds) for better user experience
4. **Format**: Use MP4 format for maximum compatibility
5. **Mix Media**: Combine images and videos to tell a complete story
6. **Video First**: Place important videos early in the images array for visibility

## Features

- ✅ Drag to navigate through carousel
- ✅ Click expand button to view in fullscreen modal
- ✅ Videos have native controls in fullscreen mode
- ✅ Reels auto-loop and are muted for silent autoplay
- ✅ Smooth animations and transitions
- ✅ Fully responsive on all devices
- ✅ Backward compatible with existing image-only products

## Notes

- Videos will pause when navigating away from the carousel
- Reels loop automatically but won't auto-play sound (following web best practices)
- The fullscreen modal supports both images and videos
- All existing products continue to work without any changes
