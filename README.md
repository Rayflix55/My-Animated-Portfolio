# Rayflix Portfolio - High-Performance Frontend Experience

A polished, production-ready portfolio built with React 19, Vite, and Tailwind CSS. The site features smooth transitions, glassmorphic UI elements, and performance-optimized 3D backgrounds.

## 🚀 Recent Updates & Features

We've implemented a series of high-end features to elevate the user experience:

- **Performance-Optimized Smooth Scroll**: Integrated `@studio-freight/lenis` with custom configurations for a fluid, high-refresh-rate scrolling experience (optimized for 90Hz+ displays).
- **Glassmorphic Navbar**: A fixed, responsive navigation bar that adapts its appearance on scroll and features a custom mobile "Terminal" menu.
- **Smooth Anchor Links**: Implemented custom scroll-to-section logic that accounts for fixed headers, providing a seamless landing experience for every nav item.
- **High-Performance 3D Backgrounds**: Optimized `@react-three/fiber` canvases with `powerPreference: "high-performance"` and managed Device Pixel Ratios to ensure smooth visuals across all devices.
- **Polished Typography**: Scaled-down display fonts for better hierarchy on mobile/tablet while maintaining the "bold" brand identity.
- **Responsive Animations**: Orchestrated `motion` (Framer Motion) staggered entrances and viewport-triggered animations.

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) / [@react-three/fiber](https://r3f.docs.pmnd.rs/)
- **Scroll Engine**: [Lenis](https://github.com/darkroomengineering/lenis)

## 💻 Local Setup Instructions

If you've already downloaded the project, follow these steps to get it running:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed on your machine. We recommend using [pnpm](https://pnpm.io/) as the package manager.

### 2. Installation
The user mentioned running `pnpm install`. If you haven't, run:
```bash
pnpm install
```

### 3. Run Development Server
Start the project locally to see your changes in real-time:
```bash
pnpm dev
```
The application will be available at `http://localhost:3000`.

### 4. Production Build
To create a optimized production build:
```bash
pnpm build
```
The output will be in the `dist/` folder.

## 🏗 Project Structure

- `src/components/`: Reusable UI modules (Navbar, Hero, Projects, etc.).
- `src/lib/`: Utility functions and shared logic.
- `src/index.css`: Global styles and Tailwind configuration.
- `src/App.tsx`: Main application assembly.
