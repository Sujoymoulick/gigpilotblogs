/**
 * Adsterra Real Advertising Configuration
 * Publisher ID: 6110797
 *
 * Real Ad Units Configured:
 * - Ad Unit A (Native/Container): container-5f96e2de53c455f92cf1e9a783e4d097
 *   Script: https://pl31744653.profitableratecpmnetwork.com/5f96e2de53c455f92cf1e9a783e4d097/invoke.js
 * - Ad Unit B (320x50 Banner): key c2113b0e9c21f43943e1c30606a2fb2d
 *   Script: https://www.highrevenueformat.com/c2113b0e9c21f43943e1c30606a2fb2d/invoke.js
 * - Ad Unit C (300x250 Banner): key df53fa7d92073deb2e1d0c021b9b36df
 *   Script: https://www.highrevenueformat.com/df53fa7d92073deb2e1d0c021b9b36df/invoke.js
 */

export const ADSTERRA_PUBLISHER_ID = '6110797';

export interface BannerAdConfig {
	key: string;
	width: number;
	height: number;
	scriptUrl: string;
}

export interface ContainerAdConfig {
	containerId: string;
	key: string;
	scriptUrl: string;
}

export const REAL_AD_UNITS = {
	nativeContainer: {
		containerId: 'container-5f96e2de53c455f92cf1e9a783e4d097',
		key: '5f96e2de53c455f92cf1e9a783e4d097',
		scriptUrl: 'https://pl31744653.profitableratecpmnetwork.com/5f96e2de53c455f92cf1e9a783e4d097/invoke.js',
	} as ContainerAdConfig,
	banner320x50: {
		key: 'c2113b0e9c21f43943e1c30606a2fb2d',
		width: 320,
		height: 50,
		scriptUrl: 'https://www.highrevenueformat.com/c2113b0e9c21f43943e1c30606a2fb2d/invoke.js',
	} as BannerAdConfig,
	banner300x250: {
		key: 'df53fa7d92073deb2e1d0c021b9b36df',
		width: 300,
		height: 250,
		scriptUrl: 'https://www.highrevenueformat.com/df53fa7d92073deb2e1d0c021b9b36df/invoke.js',
	} as BannerAdConfig,
};

export const ADSTERRA_CONFIG = {
	enabled: (import.meta.env.PUBLIC_ADSTERRA_ENABLED ?? 'true') !== 'false',
	publisherId: ADSTERRA_PUBLISHER_ID,
	units: REAL_AD_UNITS,
};
