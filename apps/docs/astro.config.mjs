// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://code-agents.github.io',
	base: '/convex-ideas',
	integrations: [
		starlight({
			customCss: ['./src/styles/custom.css'],
			components: {
				Footer: './src/components/CustomFooter.astro',
			},
			head: [
				// Add Iconify web components
				{
					tag: 'script',
					attrs: {
						type: 'module',
						src: 'https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js',
					},
				},
			],
			title: "Convex Ideas",
			description: "A collection of innovative ideas for Convex, focusing on coding agents and developer experience enhancements. Created by code-agents.com.",
			social: [
				{
					icon: "github",
					label: "Repository",
					href: "https://github.com/code-agents/convex-ideas",
				},
				{
					icon: "external",
					label: "code-agents.com",
					href: "https://code-agents.com",
				},
				{
					icon: "x.com",
					label: "@gunta85",
					href: "https://x.com/gunta85",
				},
			],
			sidebar: [
				{
					label: "Getting Started",
					items: [
						{ label: "Browse All Ideas", slug: "ideas" },
						{ label: "Submit an Idea", slug: "contribute" },
					],
				},
				{
					label: "Featured Ideas",
					items: [
						{ 
							label: "AI-Powered Schema Assistant", 
							slug: "ideas/schema-assistant" 
						},
					],
				},
				{
					label: "All Ideas",
					autogenerate: { directory: "ideas" },
				},
			],
		}),
	],
});
