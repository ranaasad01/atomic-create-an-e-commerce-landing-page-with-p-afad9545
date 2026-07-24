# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
Create an e-commerce landing page with product cards

## Goal
Build a bold, dark-themed e-commerce landing page with a hero, category filter tabs, product card grid with cart functionality, newsletter signup, and footer.

## Project type
e-commerce

## Design system — match this exactly
- Color tokens: `--background: #1a1a2e`, `--foreground: #ffffff`, `--muted: #8892a4`, `--primary: #e94560`, `--accent: #f5a623`, `--border: #0f3460`, `--brand-primary: #059669`, `--brand-on-primary: #ffffff`, `--brand-secondary: #10b981`, `--brand-accent: #ea580c`, `--brand-background: #ecfdf5`, `--brand-foreground: #064e3b`

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`categoryFilter`, `footer`, `hero`, `nav`, `newsletter`, `productGrid`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
