export interface NavLink {
  label: string;
  href: string;
  key: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Products", href: "#product-grid", key: "products" },
  { label: "Categories", href: "#category-filter", key: "categories" },
  { label: "Newsletter", href: "#newsletter", key: "newsletter" },
];

export const navCTA: NavLink = {
  label: "Shop Now",
  href: "#product-grid",
  key: "shopNow",
};

export const BRAND = {
  name: "Nova Shop",
  tagline: "Bold style for bold people.",
} as const;

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  salePercentage?: number;
  image: string;
  category: string;
}

export interface Category {
  label: string;
  value: string;
}