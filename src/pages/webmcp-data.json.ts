import { getCollection } from 'astro:content';
import { freelancerTools } from '../data/freelancerTools';

export async function GET() {
	const posts = await getCollection('blog');
	const articles = posts
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.map((p) => ({
			title: p.data.title,
			description: p.data.description,
			slug: p.id,
			url: `https://www.gigpilotai.com/blog/${p.id}/`,
			category: p.data.category || 'Freelancing',
			pubDate: p.data.pubDate.toISOString(),
			author: p.data.author || 'GigPilot AI Editorial',
			readingTime: p.data.readingTime || '8 min read',
		}));

	const tools = freelancerTools.map((t) => ({
		id: t.id,
		title: t.title,
		description: t.description,
		url: `https://www.gigpilotai.com${t.href}/`,
		category: t.category,
		features: t.features || [],
		free: t.free,
	}));

	const data = {
		siteName: 'GigPilot AI',
		siteUrl: 'https://www.gigpilotai.com/',
		description:
			'Free freelancer tools, project quote calculators, and actionable guides to help independent professionals build with AI.',
		tools,
		articles,
	};

	return new Response(JSON.stringify(data, null, 2), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
