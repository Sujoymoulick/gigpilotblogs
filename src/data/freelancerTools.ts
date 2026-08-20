export interface FreelancerTool {
	id: string;
	title: string;
	shortTitle?: string;
	description: string;
	href: string;
	category: string;
	icon: string;
	badge?: string;
	free: boolean;
	featured?: boolean;
	features?: string[];
	status: 'active' | 'coming_soon';
}

export const freelancerTools: FreelancerTool[] = [
	{
		id: 'freelance-rate-calculator',
		title: 'Freelance Project Quote Calculator',
		shortTitle: 'Project Quote Calculator',
		description:
			'Calculate accurate, profitable fixed-price project quotes based on estimated hours, hourly rate, revision buffer, and direct project expenses.',
		href: '/tools/freelance-rate-calculator',
		category: 'Pricing & Income',
		icon: '💼',
		badge: '100% Free • No Signup',
		free: true,
		featured: true,
		features: [
			'Fixed-Price Quote Breakdown',
			'Revision Buffer & Scope Protection',
			'Direct Expenses Pass-Through',
			'100% Browser-Based & Private',
		],
		status: 'active',
	},
];
