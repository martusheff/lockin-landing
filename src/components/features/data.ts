import type { Feature } from "@t/content";

/**
 * App features configuration
 *
 * Showcase your app's key capabilities and benefits.
 * Each feature should have:
 * - title: Short, catchy name (2-4 words)
 * - description: Brief explanation of the feature (1-2 sentences)
 * - icon: Icon name from react-icons (FiStar, FiZap, FiBox, etc.)
 *
 * Available icon sets:
 * - Feather Icons (Fi): FiStar, FiZap, FiBox, FiHeart, FiTrendingUp
 * - More at: https://react-icons.github.io/react-icons/icons/fi/
 *
 * Tips for great features:
 * - Focus on user benefits, not technical specs
 * - Use action-oriented language
 * - Choose icons that visually represent each feature
 */
export const features: Feature[] = [
	{
		title: "Capture",
		description: "Designed to line up progress photos for consistent framing.",
		icon: "FiCamera",
	},
	{
		title: "Visualize",
		description: "See your transformation over time across custom angles.",
		icon: "FiZap",
	},
	{
		title: "Private",
		description: "No accounts, tracking, orcloud storage. All data stays on your device. You are NOT the product.",
		icon: "FiLock",
	},
	// Add more features here...
];
