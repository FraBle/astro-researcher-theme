# astro-researcher-theme

A simple, monospaced resume theme for [Astro](https://astro.build/). Ported from [hugo-researcher](https://github.com/ojroques/hugo-researcher).

## Credits

This theme is an Astro port of the Hugo Researcher theme:

- **Hugo theme:** [ojroques/hugo-researcher](https://github.com/ojroques/hugo-researcher) by [Olivier Roques](https://oroques.dev/)
- **Original concept:** [ankitsultana/researcher](https://github.com/ankitsultana/researcher) by Ankit Sultana

## Installation

```bash
# From GitHub (no npm publish needed)
bun add github:FraBle/astro-researcher-theme

# or with npm
npm install github:FraBle/astro-researcher-theme
```

Your project also needs `sass` installed (peer dependency for SCSS):

```bash
bun add sass
```

## Usage

### 1. Define your site config

```typescript
// src/site.config.ts
import type { ResearcherConfig } from "astro-researcher-theme";

export const themeConfig: ResearcherConfig = {
  title: "Your Name",
  description: "Your site description.",
  author: "Your Name",
  favicon: "/favicon.ico",
  googleAnalyticsId: "G-XXXXXXXXXX", // optional
  nav: [
    { name: "About", url: "/about" },
    { name: "Resume", url: "/resume.pdf" },
    { name: "Contact", url: "/contact" },
  ],
  footer: {
    text: "Privacy Policy",
    url: "https://example.com/privacy",
    blank: true,
  },
  consent: { // optional
    items: [
      {
        title: "Google Analytics",
        description: "We use cookies to analyze site traffic.",
        isFunctional: false,
        script: "https://www.googletagmanager.com/gtag/js",
      },
    ],
  },
};
```

### 2. Use the layout in your pages

```astro
---
// src/pages/about.astro
import { BaseLayout } from "astro-researcher-theme";
import { themeConfig } from "../site.config";
---

<BaseLayout title="About" config={themeConfig}>
  <div class="container">
    <h2>About Me</h2>
    <p>Your content here.</p>
  </div>
</BaseLayout>
```

## Exported Components

| Component          | Props                        | Description                                |
| ------------------ | ---------------------------- | ------------------------------------------ |
| `BaseLayout`       | `title`, `config`, `noindex` | Full HTML page layout with head and chrome  |
| `Header`           | `title`, `nav`               | Nav bar with site title and menu items     |
| `Footer`           | `footer`                     | Footer with optional link                  |
| `GoogleAnalytics`  | `gaId`                       | GA script with Do-Not-Track respect        |
| `CookieConsent`    | `items`                      | Cookie consent banner and preferences modal |

## Exported Types

```typescript
interface ResearcherConfig {
  title: string;
  description: string;
  author: string;
  favicon?: string;
  googleAnalyticsId?: string;
  nav: NavItem[];
  footer?: FooterConfig;
  consent?: ConsentConfig;
}

interface NavItem { name: string; url: string; }
interface FooterConfig { text: string; url: string; blank?: boolean; }
interface ConsentItem { title: string; description: string; isFunctional: boolean; script: string; }
interface ConsentConfig { items: ConsentItem[]; }
```

## Styling

The theme includes SCSS that depends on these CDN resources (loaded automatically by `BaseLayout`):

- [Bootstrap 4.6.2](https://getbootstrap.com/docs/4.6/) (CSS only)
- [Inconsolata](https://fonts.google.com/specimen/Inconsolata) (Google Fonts)
- [Font Awesome 6.4.0](https://fontawesome.com/)
- [Academicons 1.9.3](https://jpswalsh.github.io/academicons/)

### Avatar support

Use the `avatar` class on a figure to get a circular, right-floated profile photo:

```html
<figure class="avatar"><img src="/avatar.jpg" /></figure>
```

## License

[GPL-3.0](LICENSE) — inherited from the original [hugo-researcher](https://github.com/ojroques/hugo-researcher) theme.
