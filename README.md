# Temitope GX Portfolio

A modern, responsive portfolio website for a web developer and designer, built with Next.js 15 and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and gradients
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive**: Smooth animations and hover effects throughout

## 📱 Pages

1. **Home** - Hero section with introduction and call-to-action buttons
2. **Services** - Comprehensive list of web development and design services
3. **Portfolio** - Showcase of recent projects with filtering capabilities
4. **Contact** - Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Font**: Geist Sans & Geist Mono
- **Icons**: Heroicons (SVG)

## 🎨 Design Features

- Gradient backgrounds and text effects
- Glass morphism elements
- Custom scrollbar styling
- Smooth scroll behavior
- Hover animations and transitions
- Custom CSS animations (float, pulse-glow, gradient-shift)

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   └── Navigation.tsx      # Main navigation component
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   ├── portfolio/
│   │   └── page.tsx           # Portfolio/projects page
│   ├── services/
│   │   └── page.tsx           # Services page
│   ├── globals.css            # Global styles and animations
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page
├── public/                    # Static assets
├── package.json
└── README.md
```

## 🎯 Key Components

### Navigation
- Responsive navigation with mobile menu
- Smooth scroll effects on scroll
- Active page highlighting
- Social links and CTA buttons

### Home Page
- Animated hero section
- Skills preview cards
- Call-to-action sections
- Gradient backgrounds

### Services Page
- Service cards with icons and features
- Process timeline
- Hover animations

### Portfolio Page
- Project filtering by category
- Featured projects section
- Project cards with technology tags
- Live demo and GitHub links

### Contact Page
- Contact form with validation
- Contact information cards
- Social media links
- Quick action buttons

## 🎨 Customization

### Colors
The portfolio uses a blue-to-purple gradient theme. You can customize colors in:
- Tailwind CSS classes
- CSS custom properties in `globals.css`

### Content
Update the following to personalize:
- Personal information in all pages
- Project data in `portfolio/page.tsx`
- Services in `services/page.tsx`
- Contact information in `contact/page.tsx`
- Social media links throughout the site

### Animations
Custom animations are defined in `globals.css`:
- `animate-float`: Floating animation
- `animate-pulse-glow`: Pulsing glow effect
- `animate-gradient`: Gradient shifting animation

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ by Temitope GX**