# FreshCart — Grocery Delivery Platform

A production-ready React e-commerce frontend for fast grocery delivery, built on the original FreshCart landing page design.

## Features

- Multi-page routing (Home, Products, Product Details, Categories, Cart, Auth, Contact, 404)
- Shopping cart with quantity controls and order summary
- Category pages with filtering and sorting
- SEO meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- Lazy-loaded routes, skeleton loaders, scroll reveal, and page transitions
- Social proof, animated stats, FAQ accordion, and newsletter signup

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tech Stack

- React 18 + Vite
- React Router 6
- Framer Motion
- react-helmet-async

## Project Structure

```
src/
  components/   # Reusable UI, layout, home sections
  context/      # Cart state
  data/         # Products, categories, FAQ, testimonials
  hooks/        # Scroll reveal, animated counters
  pages/        # Route pages
  styles/       # Global CSS (original design system + extensions)
```

Legacy static files (`style.css`, `script.js` in project root) are preserved for reference; the app uses `src/styles/index.css`.
