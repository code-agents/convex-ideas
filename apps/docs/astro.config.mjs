// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/styles/custom.css'],
			title: "Convex Ideas",
			description: "A collection of innovative ideas for Convex, focusing on coding agents and developer experience enhancements.",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/get-convex/convex",
				},
			],
			sidebar: [
				{
					label: "🚀 Ideas",
					items: [
						{ label: "Browse All Ideas", slug: "ideas" },
						{ label: "Submit an Idea", slug: "contribute" },
					],
				},
				{
					label: "🤖 Coding Agents",
					autogenerate: { directory: "coding-agents" },
				},
				{
					label: "💡 Developer Experience",
					autogenerate: { directory: "developer-experience" },
				},
				{
					label: "🔧 Platform Features",
					autogenerate: { directory: "platform-features" },
				},
			],
		}),
	],
});
