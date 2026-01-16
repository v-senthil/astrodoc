// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
	site: 'https://v-senthil.github.io',
	base: '/im-sdk-docs',
	integrations: [
		starlight({
			title: 'Zoho IM SDK',
			description: 'Unified Instant Messaging Integration Platform - Complete API Reference and Developer Guide',
			logo: {
				src: './src/assets/zoho-im-logo.png',
			},
			favicon: '/favicon.png',
			plugins: [
				starlightVersions({
					versions: [{ slug: '1.0.0', label: 'v1.0.0' }],
				}),
			],
			lastUpdated: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 4 },
			sidebar: [
				{ label: 'Onboarding into Zoho IM', collapsed: true, autogenerate: { directory: 'onboarding-into-zoho-im' } },
				{ label: 'Getting Started', collapsed: true, autogenerate: { directory: 'getting-started' } },
				{ label: 'Authentication', collapsed: true, autogenerate: { directory: 'authentication' } },
				{ label: 'Real Time Notifications', collapsed: true, autogenerate: { directory: 'real-time-notifications' } },
				{ label: 'EFC', collapsed: true, autogenerate: { directory: 'efc' } },
				{ label: 'Organizations', collapsed: true, autogenerate: { directory: 'organizations' } },
				{ label: 'Integration Services', collapsed: true, autogenerate: { directory: 'integration-services' } },
				{ label: 'Channels', collapsed: true, autogenerate: { directory: 'channels' } },
				{ label: 'Sessions', collapsed: true, autogenerate: { directory: 'sessions' } },
				{ label: 'Messages', collapsed: true, autogenerate: { directory: 'messages' } },
				{ label: 'Layout Messages', collapsed: true, autogenerate: { directory: 'layout-messages' } },
				{ label: 'WhatsApp Template Messages', collapsed: true, autogenerate: { directory: 'template-messages' } },
				{ label: 'Bots', collapsed: true, autogenerate: { directory: 'bots' } },
				{ label: 'Subscriptions', collapsed: true, autogenerate: { directory: 'subscriptions' } },
				{ label: 'Metrics', collapsed: true, autogenerate: { directory: 'metrics' } },
				{ label: 'Broadcasts', collapsed: true, autogenerate: { directory: 'broadcasts' } },
				{ label: 'WhatsApp Custom APIs', collapsed: true, autogenerate: { directory: 'whatsapp-custom-apis' } },
				{ label: 'Telegram Custom APIs', collapsed: true, autogenerate: { directory: 'telegram-integration-custom-apis' } },
				{ label: 'Line Custom APIs', collapsed: true, autogenerate: { directory: 'line-custom-apis' } },
				{ label: 'WhatsApp Integration SDK', collapsed: true, autogenerate: { directory: 'whatsapp-integration-sdk' } },
				{ label: 'IM Mobile SDK', collapsed: true, autogenerate: { directory: 'im-mobile-sdk' } },
				{ label: 'Guided Conversation in IM SDK', collapsed: true, autogenerate: { directory: 'guided-conversation-in-im-sdk' } },
				{ label: 'Calls', collapsed: true, autogenerate: { directory: 'calls' } },
				{ label: 'WeCom Integration', collapsed: true, autogenerate: { directory: 'wecom-integration' } },
			],
		}),
	],
});
