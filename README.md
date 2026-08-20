# GigPilot AI Blog & Knowledge Platform

GigPilot AI is a modern freelancing platform and knowledge hub built with [Astro](https://astro.build). It provides comprehensive guides, career roadmaps, platform reviews, and AI-powered productivity strategies for independent professionals, remote workers, and freelancers.

## 🚀 Features

- ⚡ **Blazing Fast Performance**: Static site generation powered by Astro
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile viewing
- 🔍 **Technical SEO Optimized**: Canonical links, Open Graph metadata, Sitemap, and Schema.org Article / WebSite JSON-LD
- 📑 **Content Collections**: Type-safe frontmatter schema with Astro Content Collections
- 🗂 **Category Filtering**: Dynamic filtering for Freelancing, Jobs, Platforms, Work From Home, and Skills
- 📡 **RSS & Sitemap**: Auto-generated RSS feed (`/rss.xml`) and XML sitemap (`/sitemap-index.xml`)

## 📁 Project Structure

```text
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro
│   │   └── HeaderLink.astro
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── about.astro
│   │   ├── blog/
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   └── rss.xml.js
│   ├── styles/
│   │   └── global.css
│   ├── consts.ts
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds the production site to `./dist/` |
| `npm run preview` | Previews the production build locally |

## 📝 Included Articles

1. What Is Freelancing? Meaning, How It Works, and How to Start
2. How to Become a Freelancer: A Beginner's Step-by-Step Guide
3. Best Freelancing Sites in 2026: Where to Find Freelance Jobs Online
4. Freelancing Work in India: How to Start and Find Online Jobs
5. Freelancing Work From Home: Best Jobs, Skills, and Tips for Beginners
6. Upwork for Freelancers: How to Find Your First Freelance Job
7. Digital Marketing Freelancer: Skills, Services, Jobs, and How to Start
8. Video Editing Freelance Jobs: How to Start a Career as a Freelance Video Editor
9. Freelance Writing: How to Start, Find Clients, and Make Money Online
10. Data Entry Jobs Work From Home: How to Find Legitimate Freelance Work
