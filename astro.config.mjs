// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: "https://almounah.github.io/orsted-doc", // full site URL
    base: "/orsted-doc/", // repo name
	integrations: [
		starlight({
			title: 'Orsted C2 Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/almounah' }],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Global Commands',
					autogenerate: { directory: 'globalcommands' },
				},
				{
					label: 'Windows Commands',
					autogenerate: { directory: 'windowscommands' },
				},
				{
					label: 'Linux Commands',
					autogenerate: { directory: 'linuxcommands' },
				},
				{
					label: 'FAQ',
					autogenerate: { directory: 'faq' },
				},
			],
		}),
	],
});
