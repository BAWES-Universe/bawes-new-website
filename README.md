# 🦋 BAWES Universe

An impressive, animated Next.js website for BAWES — building shared digital environments where people work, learn, trade, and collaborate in real time.

## ✨ Features

- **Stunning WebGL Hero** — Cosmic animated background with BAWES brand colors
- **Framer Motion Animations** — Smooth scroll-triggered animations throughout
- **BAWES Brand Identity** — Gold, red, and orange gradient accents
- **Glassmorphism Design** — Modern glass-effect cards and components
- **Fully Responsive** — Beautiful on all devices
- **Dark Theme** — Elegant dark aesthetic
- **Logo & Branding** — Official BAWES logo integrated

## 📄 Pages

- **Home** (`/`) — Interactive pixel-world hero (`components/home/LivingWorld.tsx`), feature tour, bot transcript, ecosystem diagram, CTAs
- **How It Works** (`/how-it-works`) — Universe structure explained
- **Market** (`/market`) — Commerce in shared spaces
- **Work** (`/work`) — Selected projects and case studies
- **Manifesto** (`/manifesto`) — The BAWES Universe Manifesto
- **The Empty Seat** (`/empty-seat`) — Leadership philosophy
- **Contact** (`/contact`) — Contact form with animations

## 🛠️ Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animation library
- **WebGL** — Custom shader for hero background

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
BAWES/
├── app/
│   ├── page.tsx              # Home page
│   ├── how-it-works/         # How It Works
│   ├── market/               # Market
│   ├── work/                 # Work
│   ├── manifesto/            # Manifesto
│   ├── empty-seat/           # The Empty Seat
│   ├── contact/              # Contact
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Navigation.tsx        # Animated navigation
│   ├── Footer.tsx            # Footer with links
│   ├── Hero.tsx              # WebGL hero section
│   ├── Section.tsx           # Animated section wrapper
│   └── ui/
│       └── Button.tsx        # Animated button component
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   └── images/               # Logo and brand assets
└── package.json
```

## 🎨 Design System

### Colors (BAWES Brand)
- **Gold**: `#9F7E2F`
- **Red**: `#F03E2F`
- **Orange**: `#F7941D`
- **Brown**: `#5C4A1F`

### Animations
- Scroll-triggered fade-ins
- Hover scale effects
- WebGL cosmic background
- Floating elements
- Gradient rotations

### Components
- Glass-effect cards
- Gradient borders
- Animated buttons
- Scroll progress indicators

## 📝 Next Steps

- Connect contact form to backend API
- Add project showcase content
- Implement Discord integration
- Deploy to production (Vercel recommended)

## 📜 License

Open by default.

---

*Built with 🦋 by BAWES*
