deploy5

# Sanctus Pro Deo Website

A modern Next.js website for the Christian music group Sanctus Pro Deo, converted from the original HTML/CSS/JS implementation.

## Features

- **Hero Section**: Stunning hero section with logo overlay and background images
- **Story Sections**: Three story sections with alternating layouts showcasing the group's journey
- **Values Section**: Display of core values (Passion, Community, Gospel)
- **Video Section**: Interactive video player with hero image background
- **Music Section**: Latest releases with links to streaming platforms
- **Merchandise**: Product showcase with images and pricing
- **Get Involved**: Call-to-action for joining the group
- **Donation**: Support section for the ministry
- **Partners**: Sponsor and partner showcase
- **Responsive Design**: Mobile-first responsive design with Tailwind CSS

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Poppins, Baskerville)
- **Images**: Next.js optimized images

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── HeroSection.tsx     # Main hero section with logo overlay
│   ├── StorySection.tsx    # Three story sections with images
│   ├── ValuesSection.tsx   # Core values display
│   ├── VideoSection.tsx    # Video player section
│   ├── MusicSection.tsx    # Music and merchandise showcase
│   ├── GetInvolvedSection.tsx # Join the group CTA
│   ├── DonateSection.tsx   # Donation section
│   ├── PartnersSection.tsx # Sponsors and partners
│   └── Footer.tsx          # Footer with links and newsletter
└── public/
    └── assets/             # Images and media files
```

## Assets

All original assets from the HTML version have been copied to the `public/assets/` directory:

- Hero images (hero-image-1.png through hero-image-4.png)
- Logo files (SVG and PNG versions)
- Album cover and sponsor logos

## Customization

### Colors

The color palette is defined in `tailwind.config.ts`:

- `sanctus-dark`: #171718 (background)
- `sanctus-light`: #F0F0F0 (text)
- `sanctus-brown`: #A26D46 (accent)
- `sanctus-gray`: #1B1C1C (secondary background)
- `sanctus-beige`: #EAE8E6 (partners section)
- `sanctus-lightgray`: #F7F7F7 (music section)

### Fonts

- **Headings**: Baskerville (serif)
- **Body text**: Poppins (sans-serif)

## Development

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Conversion Notes

This Next.js version maintains all the visual design and functionality of the original HTML website while providing:

- Modern React component architecture
- TypeScript type safety
- Optimized image loading with Next.js Image component
- Better performance and SEO with server-side rendering
- Mobile-responsive design improvements
- Clean, maintainable codebase

## License

© Sanctus Pro Deo 2019. All Rights Reserved
