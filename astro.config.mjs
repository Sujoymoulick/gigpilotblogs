// @ts-check

import mdx from '@astrojs/mdx';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://gigpilotai.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) =>
				!page.includes('/404') &&
				!page.includes('/500') &&
				!page.includes('/contact-us') &&
				!page.includes('/privacy-policy') &&
				!page.includes('/terms-and-conditions'),
			serialize(item) {
				const url = item.url;
				if (url === 'https://gigpilotai.com/' || url === 'https://gigpilotai.com') {
					item.priority = 1.0;
					item.changefreq = ChangeFreqEnum.DAILY;
				} else if (url.includes('/tools')) {
					item.priority = 0.9;
					item.changefreq = ChangeFreqEnum.WEEKLY;
				} else if (url.includes('/blog')) {
					item.priority = 0.85;
					item.changefreq = ChangeFreqEnum.WEEKLY;
				} else if (url.includes('/about') || url.includes('/contact')) {
					item.priority = 0.7;
					item.changefreq = ChangeFreqEnum.MONTHLY;
				} else if (url.includes('/privacy') || url.includes('/terms')) {
					item.priority = 0.5;
					item.changefreq = ChangeFreqEnum.MONTHLY;
				}
				item.lastmod = new Date().toISOString();
				return item;
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
