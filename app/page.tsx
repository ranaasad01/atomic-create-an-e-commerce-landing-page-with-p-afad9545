"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Star, ShoppingCart, Heart, ArrowRight, Truck, RotateCcw, Shield, Sparkles, ChevronRight, Zap } from 'lucide-react';
import { Reveal } from "@/components/Reveal";
import { staggerContainer, fadeInUp, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
type APP_NAME = any;
const APP_NAME: any = [];
type APP_TAGLINE = any;
const APP_TAGLINE: any = [];

// ─── Brand constants ────────────────────────────────────────────────────────
const BRAND = APP_NAME;
const TAGLINE = APP_TAGLINE;

// ─── Products ────────────────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: "1",
    name: "Obsidian Runner Pro",
    category: "Footwear",
    price: 189,
    originalPrice: 240,
    rating: 4.8,
    reviews: 312,
    badge: "Best Seller",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/88647675df9e4ea2a0cb1481edda2eb3.png",
    colors: ["#1a1a1a", "#e5e5e5", "#c8a96e"],
    isNew: false,
    isSale: true,
  },
  {
    id: "2",
    name: "Velour Oversized Hoodie",
    category: "Tops",
    price: 129,
    originalPrice: null,
    rating: 4.9,
    reviews: 198,
    badge: "New",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/51f888d5bab746fa88e6e1ed6cdd4fc2.jpg",
    colors: ["#6b4f3a", "#2d2d2d", "#8b7355"],
    isNew: true,
    isSale: false,
  },
  {
    id: "3",
    name: "Structured Cargo Pant",
    category: "Bottoms",
    price: 149,
    originalPrice: 180,
    rating: 4.7,
    reviews: 245,
    badge: "Sale",
    image: "https://picsum.photos/seed/9985ed45abfc/800/600",
    colors: ["#3d3d2e", "#1a1a1a", "#8b8b7a"],
    isNew: false,
    isSale: true,
  },
  {
    id: "4",
    name: "Matte Leather Tote",
    category: "Accessories",
    price: 219,
    originalPrice: null,
    rating: 4.9,
    reviews: 87,
    badge: "New",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/3f2d329398ba480ab309f22eb9520544.jpg",
    colors: ["#1a1a1a", "#c8a96e", "#8b4513"],
    isNew: true,
    isSale: false,
  },
  {
    id: "5",
    name: "Ribbed Knit Turtleneck",
    category: "Tops",
    price: 99,
    originalPrice: 130,
    rating: 4.6,
    reviews: 421,
    badge: "Sale",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/0710dbf3087c4f7992582ce9d7636858.jpg",
    colors: ["#f5f0eb", "#2d2d2d", "#c8a96e"],
    isNew: false,
    isSale: true,
  },
  {
    id: "6",
    name: "Minimalist Field Watch",
    category: "Accessories",
    price: 349,
    originalPrice: null,
    rating: 5.0,
    reviews: 64,
    badge: "Premium",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/246966a2b8674128a9625b528ea8b44c.jpg",
    colors: ["#c8a96e", "#1a1a1a", "#e5e5e5"],
    isNew: true,
    isSale: false,
  },
  {
    id: "7",
    name: "Waxed Canvas Jacket",
    category: "Outerwear",
    price: 289,
    originalPrice: 360,
    rating: 4.8,
    reviews: 156,
    badge: "Sale",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/211659e10aa747868a3873a899e3ec7e.jpg",
    colors: ["#3d2b1f", "#1a1a1a", "#6b5a4e"],
    isNew: false,
    isSale: true,
  },
  {
    id: "8",
    name: "Slim Tapered Chino",
    category: "Bottoms",
    price: 119,
    originalPrice: null,
    rating: 4.7,
    reviews: 334,
    badge: "New",
    image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/dcc1887c6d8a4247be66fccbd7a0ee42.jpg",
    colors: ["#c8b89a", "#2d2d2d", "#8b7355"],
    isNew: true,
    isSale: false,
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))] as const;

// ─── Value props ─────────────────────────────────────────────────────────────
const VALUE_PROPS = [
  {
    icon: Truck,
    title: "Free Shipping Over $150",
    desc: "Complimentary delivery on all orders above $150. Express options available at checkout.",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    desc: "Not feeling it? Return any unworn item within 30 days, no questions asked.",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    desc: "Every piece is quality-checked and verified before it ships from our warehouse.",
  },
  {
    icon: Zap,
    title: "Same-Day Dispatch",
    desc: "Orders placed before 2 PM ship the same business day from our fulfillment center.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: "t1",
    name: "Mara Chen",
    handle: "@marainstyle",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mara%20Chen",
    rating: 5,
    text: "The Obsidian Runner Pro is genuinely the most comfortable sneaker I've owned. The quality is insane for the price. Already ordered two more colorways.",
    product: "Obsidian Runner Pro",
  },
  {
    id: "t2",
    name: "Jordan Ellis",
    handle: "@jordanellis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan%20Ellis",
    rating: 5,
    text: "Nova Shop has completely replaced my usual go-to brands. The Waxed Canvas Jacket arrived in two days and fits perfectly. Packaging was beautiful too.",
    product: "Waxed Canvas Jacket",
  },
  {
    id: "t3",
    name: "Priya Nair",
    handle: "@priyawears",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya%20Nair",
    rating: 5,
    text: "I was skeptical ordering a watch online but the Minimalist Field Watch exceeded every expectation. Solid, elegant, and the customer service was outstanding.",
    product: "Minimalist Field Watch",
  },
];

// ─── Featured categories ──────────────────────────────────────────────────────
const FEATURED_CATEGORIES = [
  { label: "Footwear", image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d8d801da137c49aaaec9705e0f78bdb5.jpg", count: 48 },
  { label: "Outerwear", image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d8d801da137c49aaaec9705e0f78bdb5.jpg", count: 32 },
  { label: "Accessories", image: "https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/d8d801da137c49aaaec9705e0f78bdb5.jpg", count: 67 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= Math.round(rating) ? "fill-[var(--accent)] text-[var(--accent)]" : "fill-white/20 text-white/20"}
        />
      ))}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  const [wished, setWished] = useState(false);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] hover:border-white/16 hover:shadow-[0_2px_4px_rgba(0,0,0,0.3),0_16px_40px_-8px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-black">
          {product.badge}
        </span>
        {discount && (
          <span className="absolute left-3 top-9 mt-1 rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-[11px] font-medium text-white/80">
            -{discount}%
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={() => setWished((w) => !w)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 rounded-full bg-black/40 backdrop-blur-sm p-2 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-black/60"
        >
          <Heart
            size={15}
            className={wished ? "fill-[var(--accent)] text-[var(--accent)]" : "text-white"}
          />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-4">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-widest text-white/40">
            {product.category}
          </p>
          <h3 className="mt-0.5 text-sm font-semibold text-white/90 leading-snug">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-white/40">({product.reviews})</span>
        </div>

        {/* Colors */}
        <div className="flex items-center gap-1.5">
          {product.colors.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full border border-white/20 ring-offset-1 ring-offset-black hover:ring-1 hover:ring-white/40 cursor-pointer transition-all"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-bold text-white">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-white/35 line-through">${product.originalPrice}</span>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3.5 py-1.5 text-xs font-semibold text-black transition-opacity hover:opacity-90"
          >
            <ShoppingCart size={12} />
            Add
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="min-h-screen bg-[var(--bg)] text-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-[var(--accent)]/8 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-[400px] w-[600px] translate-x-1/3 translate-y-1/4 rounded-full bg-[var(--accent)]/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  <Sparkles size={12} />
                  New Season Drop
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white text-balance md:text-6xl lg:text-7xl"
              >
                {BRAND}
                <span className="block text-[var(--accent)]">Redefines</span>
                Your Wardrobe.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-md text-lg leading-relaxed text-white/55 text-pretty"
              >
                {TAGLINE} Discover curated pieces built for people who refuse to blend in. Premium materials, uncompromising fit.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="#product-grid"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_24px_rgba(200,169,110,0.35)] transition-all duration-300 hover:opacity-90 hover:shadow-[0_0_32px_rgba(200,169,110,0.5)]"
                >
                  Shop the Collection
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#category-filter"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  Browse Categories
                  <ChevronRight size={16} />
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-4 border-t border-white/8">
                {[
                  { value: "50K+", label: "Happy Customers" },
                  { value: "4.9", label: "Avg. Rating" },
                  { value: "200+", label: "New Styles" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-xs text-white/40 mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right image collage */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="relative hidden lg:block"
            >
              <div className="relative grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4 pt-8">
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <img
                      src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/a4413ce3f53a4393bad5fc0c328efc94.png"
                      alt="Nova Shop hero look"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl aspect-square border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <img
                      src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/1ac561a4a16a4a4a9c9e87491084515a.jpg"
                      alt="Accessories collection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-2xl aspect-square border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <img
                      src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/cc140d0199a5475cae518360ec7752ec.webp"
                      alt="Sneaker detail"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl aspect-[3/4] border border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                    <img
                      src="https://titoaistorageaccount.blob.core.windows.net/titoai-storage/site-images/cd119e60d81942c2a0fd788564740a5d.jpg"
                      alt="Outerwear collection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-2xl border border-[var(--accent)]/30 bg-black/80 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                >
                  <p className="text-[11px] text-white/50 uppercase tracking-widest">This Week</p>
                  <p className="text-sm font-bold text-white mt-0.5">Up to 35% Off</p>
                  <p className="text-[11px] text-[var(--accent)] mt-0.5">Selected Styles</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Categories ───────────────────────────────────────────── */}
      <Reveal>
        <section id="category-filter" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                  Shop by Category
                </p>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Find Your Style
                </h2>
              </div>
              <Link
                href="#product-grid"
                className="hidden items-center gap-1.5 text-sm font-medium text-white/50 transition-colors hover:text-white sm:flex"
              >
                View all <ChevronRight size={15} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {FEATURED_CATEGORIES.map((cat, i) => (
                <Reveal key={cat.label} delay={i * 0.1}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(cat.label)}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] w-full border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 text-left">
                      <p className="text-lg font-bold text-white">{cat.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{cat.count} styles</p>
                    </div>
                    <div className="absolute right-4 top-4 rounded-full bg-[var(--accent)] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Shop
                    </div>
                  </motion.button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Product Grid ─────────────────────────────────────────────────── */}
      <Reveal>
        <section id="product-grid" className="py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                New Arrivals
              </p>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                This Season&apos;s Picks
              </h2>
            </div>

            {/* Category filter pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={[
                    "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                    activeCategory === cat
                      ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                      : "border-white/12 bg-white/[0.04] text-white/55 hover:border-white/25 hover:text-white",
                  ].join(" ")}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filtered.map((product) => (
                <motion.div key={product.id} variants={scaleIn}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <div className="py-24 text-center text-white/40">
                No products in this category yet.
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* ── Value Props ───────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-16 md:py-20 border-y border-white/6 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {VALUE_PROPS.map((vp, i) => (
                <Reveal key={vp.title} delay={i * 0.08}>
                  <div className="flex flex-col gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--accent)]/25 bg-[var(--accent)]/10">
                      <vp.icon size={20} className="text-[var(--accent)]" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{vp.title}</h3>
                    <p className="text-sm leading-relaxed text-white/45">{vp.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Social Proof ─────────────────────────────────────────────────── */}
      <Reveal>
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Real Reviews
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Worn and Loved
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base text-white/45 text-pretty">
                Over 50,000 customers trust Nova Shop for their wardrobe. Here is what a few of them had to say.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.id} delay={i * 0.1}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)]">
                    <StarRating rating={t.rating} />
                    <p className="text-sm leading-relaxed text-white/70 flex-1">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                      <div className="h-9 w-9 overflow-hidden rounded-full border border-white/12 bg-white/10">
                        <img src={t.avatar} alt={t.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.name}</p>
                        <p className="text-xs text-white/35">{t.handle}</p>
                      </div>
                      <span className="ml-auto rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/40">
                        {t.product}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Newsletter CTA ────────────────────────────────────────────────── */}
      <Reveal>
        <section id="newsletter" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--accent)]/12 via-white/[0.03] to-transparent px-8 py-16 text-center shadow-[0_2px_4px_rgba(0,0,0,0.3),0_24px_64px_-16px_rgba(0,0,0,0.5)] md:px-16">
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-[80px]" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                Exclusive Access
              </p>
              <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-white text-balance md:text-4xl">
                Get 15% Off Your First Order
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base text-white/50 text-pretty">
                Join the Nova Shop inner circle. Be first to know about new drops, exclusive sales, and style guides delivered straight to your inbox.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm text-white placeholder-white/35 outline-none transition-all focus:border-[var(--accent)]/50 focus:ring-2 focus:ring-[var(--accent)]/20"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-bold text-black shadow-[0_0_20px_rgba(200,169,110,0.3)] transition-all hover:opacity-90 hover:shadow-[0_0_28px_rgba(200,169,110,0.45)]"
                >
                  Claim Discount
                </button>
              </form>

              <p className="mt-4 text-xs text-white/30">
                No spam. Unsubscribe anytime. Discount applied at checkout.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}