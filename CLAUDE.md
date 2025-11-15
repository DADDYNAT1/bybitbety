# Bybit Bety Token Website

## Project Overview
A high-quality, modern landing page for Bety - the Bybit Exchange mascot token. This site will feature stunning visuals, live token data, smooth animations, and an exceptional user experience that surpasses the bybitbilli.com reference.

## Tech Stack
- **Frontend Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom animations
- **Animation Libraries**: Framer Motion (for smooth, performant animations)
- **API Integration**: Dexscreener API for live token data/charts
- **Charts**: Lightweight Chart (TradingView) for token price visualization
- **Icons**: React Icons + Custom SVGs
- **Deployment**: Vercel/Netlify

## Project Structure
```
bybitbety/
├── public/
│   ├── images/           # Bety mascot images, banners, icons
│   ├── favicon.ico
│   └── og-image.png      # Open Graph preview image
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Main hero section with Bety
│   │   ├── TokenInfo.jsx      # Contract address, links, key info
│   │   ├── LiveChart.jsx      # Dexscreener price chart
│   │   ├── About.jsx          # Bety story and background
│   │   ├── Tokenomics.jsx     # Token distribution/info
│   │   ├── Ecosystem.jsx      # Partners and integrations
│   │   ├── Community.jsx      # Social links and community
│   │   ├── Footer.jsx         # Footer with disclaimers
│   │   └── animations/
│   │       ├── ParticleBackground.jsx
│   │       └── ScrollAnimations.jsx
│   ├── hooks/
│   │   ├── useDexscreener.js  # API hook for token data
│   │   └── useScrollAnimation.js
│   ├── utils/
│   │   ├── api.js             # API helpers
│   │   └── constants.js       # Token address, social links, etc.
│   ├── styles/
│   │   └── globals.css        # Global styles, Tailwind imports
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── CLAUDE.md
```

## Features & Sections

### 1. Hero Section
- Eye-catching animated background (particles/gradients)
- High-quality Bety mascot image with subtle animations
- Compelling headline and tagline
- Primary CTA buttons (Buy Now, View Chart, Join Community)
- Smooth scroll indicators

### 2. Live Token Chart
- Real-time price data from Dexscreener API
- Interactive candlestick/line chart
- Price statistics (24h change, volume, market cap)
- Multiple timeframe options (1H, 4H, 1D, 1W)

### 3. Token Information
- Contract address with one-click copy
- Quick stats (holders, transactions, liquidity)
- Direct links to DEX, Bybit, block explorer
- Trust indicators (verified, audited badges)

### 4. About Bety
- Engaging story about Bety mascot
- High-quality image gallery
- Bybit brand connection
- Community-driven narrative
- Animated on scroll reveal

### 5. Tokenomics
- Visual representation of token distribution
- Clear breakdown (community, liquidity, team, etc.)
- Animated pie chart or infographic
- Key metrics and total supply

### 6. Ecosystem & Partners
- Bybit logo and branding
- Partner/integration logos
- Network information (chain, DEX platforms)
- Animated grid layout

### 7. Community Section
- Social media links (Twitter, Telegram, Discord)
- Community stats
- Latest updates/news feed
- Join community CTA

### 8. Footer
- Legal disclaimers
- Additional links
- Copyright info
- Social icons

## Design Philosophy
- **Modern & Playful**: Professional yet fun, matching Bety's personality
- **Performance First**: Optimized images, lazy loading, minimal bundle size
- **Mobile Responsive**: Perfect experience on all devices
- **Accessibility**: WCAG compliant, keyboard navigation, screen reader friendly
- **Brand Consistency**: Bybit-aligned color scheme with unique Bety flair

## Color Palette (To be refined with actual Bety branding)
- Primary: Bybit Yellow (#F7A600)
- Secondary: Deep Blue/Purple gradient
- Accent: Vibrant complementary colors
- Background: Dark theme with subtle gradients
- Text: High contrast whites and grays

## Animation Guidelines
- Subtle, purposeful animations (avoid overwhelming)
- Scroll-triggered reveals with stagger effects
- Smooth transitions (0.3-0.6s easing)
- Parallax effects for depth
- Interactive hover states
- Loading states for chart/API data

## API Integration

### Dexscreener API
- Endpoint: `https://api.dexscreener.com/latest/dex/tokens/{tokenAddress}`
- Fetch price, volume, liquidity data
- Handle loading/error states gracefully
- Cache data with reasonable refresh intervals

## Development Phases

### Phase 1: Setup & Structure ✓
- [x] Initialize Vite + React project
- [ ] Install dependencies (Tailwind, Framer Motion, etc.)
- [ ] Setup project structure
- [ ] Configure Tailwind with custom theme

### Phase 2: Core Components
- [ ] Build Hero section layout
- [ ] Create reusable Button, Card components
- [ ] Implement responsive navigation
- [ ] Setup global animations and transitions

### Phase 3: Token Integration
- [ ] Integrate Dexscreener API
- [ ] Build LiveChart component
- [ ] Create TokenInfo with copy-to-clipboard
- [ ] Add loading and error states

### Phase 4: Content Sections
- [ ] About Bety section with image gallery
- [ ] Tokenomics visualization
- [ ] Ecosystem/Partners grid
- [ ] Community section

### Phase 5: Polish & Optimization
- [ ] Add particle/background animations
- [ ] Implement scroll animations throughout
- [ ] Optimize images and lazy loading
- [ ] Performance audit and improvements
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing

### Phase 6: Deployment
- [ ] Build production bundle
- [ ] Deploy to Vercel/Netlify
- [ ] Setup custom domain (if applicable)
- [ ] SEO optimization (meta tags, sitemap)

## Assets Needed
- [ ] Bety mascot main image (high-res PNG/WebP)
- [ ] Bety variations/poses
- [ ] Banner/header images
- [ ] Icons (social media, features)
- [ ] Logo files (Bybit, partners)
- [ ] Favicon set

## Performance Targets
- Lighthouse score: 95+ (all categories)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle size: < 200kb (initial)

## SEO & Metadata
- OpenGraph tags for social sharing
- Twitter card metadata
- Descriptive meta descriptions
- Structured data markup
- Sitemap and robots.txt

## Notes
- Keep code clean, modular, and well-commented
- Use TypeScript for better type safety (optional upgrade)
- Implement error boundaries for robust error handling
- Add analytics integration (Google Analytics/Plausible)
- Consider adding Easter eggs or fun interactions for community engagement
