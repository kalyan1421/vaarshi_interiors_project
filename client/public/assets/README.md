# Assets Directory

This directory contains all media assets for the Velanspaces Interior and constructions website.

## 📁 Directory Structure

```
public/assets/
├── videos/
│   └── 4301617-hd_1920_1080_30fps.mp4
└── images/
    ├── aaron-huber-G7sE2S4Lab4-unsplash.jpg
    └── spacejoy-YI2YkyaREHk-unsplash.jpg
```

## 🎬 Video Requirements

**File:** `videos/4301617-hd_1920_1080_30fps.mp4`
- **Purpose:** Main cinematic background for hero section
- **Resolution:** 1920x1080 (Full HD)
- **Frame Rate:** 30fps
- **Format:** MP4 (H.264 codec recommended)
- **Duration:** Should loop seamlessly
- **Size:** Optimize for web (recommended < 10MB)

## 🖼️ Image Requirements

### Fallback Image 1
**File:** `images/aaron-huber-G7sE2S4Lab4-unsplash.jpg`
- **Purpose:** Mobile fallback background (slideshow image 1)
- **Recommended Size:** 1920x1080 or higher
- **Format:** JPEG (optimized for web)
- **Content:** Interior design/architecture scene

### Fallback Image 2
**File:** `images/spacejoy-YI2YkyaREHk-unsplash.jpg`
- **Purpose:** Mobile fallback background (slideshow image 2)
- **Recommended Size:** 1920x1080 or higher
- **Format:** JPEG (optimized for web)
- **Content:** Interior design/architecture scene

## 📝 Usage

These assets are used in the **Hero Section** component:
- Desktop: Video plays as looping background with parallax effect
- Mobile (<768px): Rotating image slideshow (fades every 5 seconds)

## 🎨 Design Guidelines

- All images should match the brand's soft beige luxury aesthetic
- Images should feature modern, elegant interior spaces
- Ensure good contrast for white text overlay
- Optimize all files for web performance

## 🔄 How to Add Assets

1. Place your video file in: `public/assets/videos/`
2. Place your images in: `public/assets/images/`
3. Ensure filenames match exactly as specified above
4. Restart the development server if needed

## ⚡ Performance Tips

- Compress video using tools like HandBrake or FFmpeg
- Optimize images using tools like TinyPNG or ImageOptim
- Consider using WebP format for images (with JPEG fallback)
- Test loading times on slower connections
