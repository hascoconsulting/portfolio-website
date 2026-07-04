# Bijal Patel Portfolio Website

React + Vite + TypeScript personal portfolio website for Bijal Patel.

## Pages

- `/`
- `/about`
- `/projects`
- `/projects/stufd`
- `/projects/recipe-cost-calculator`
- `/projects/nse-intraday-screener`
- `/skills`
- `/contact`
- `/thank-you`

## Stack

- React
- Vite
- TypeScript
- React Router
- Plain CSS
- Netlify Forms
- Netlify deployment

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Netlify deployment settings

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```

The repository includes `netlify.toml` and `public/_redirects` so direct route loads work for React Router.

## Contact form

The contact form is configured for Netlify Forms with the form name `contact`.

Visible fallback email:

```text
bijalvp@gmail.com
```

## Pre-launch edit

Replace the placeholder domain in:

- `public/robots.txt`
- `public/sitemap.xml`

Current placeholder:

```text
https://example.com
```

## Lighthouse targets

Run Lighthouse on mobile and desktop for Home, About, Projects, one project page, and Contact.

Target scores:

- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

Core Web Vitals targets:

- LCP under 2.5s
- CLS under 0.1
- INP under 200ms
