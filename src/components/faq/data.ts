import type { FAQ } from "@t/content";

/**
 * Frequently Asked Questions configuration
 *
 * Answer common user questions before they ask.
 * Each FAQ should have:
 * - question: Clear, specific question users might have
 * - answer: Concise, helpful answer (1-3 sentences)
 *
 * Recommended topics to cover:
 * - Pricing and payment methods
 * - Key features and functionality
 * - Platform compatibility (iOS, Android, web)
 * - Customer support and contact info
 * - Privacy and data security
 *
 * Tips for effective FAQs:
 * - Use simple, conversational language
 * - Address real concerns from beta testing or user feedback
 * - Keep answers brief but informative
 */
export const faqs: FAQ[] = [
	{
		question: "How is my data kept private?",
		answer: "It never leaves your device unless you want it to. We don't store your data in any cloud services. Competing apps charge you an annual fee to store your data in the cloud, and turn around and sell your sensitive information to the highest bidder. We believe in privacy by design.",
	},
	{
		question: "How do I manage my data?",
		answer: "The old fashioned way. You can export and import saves from the app, we have even set reminders to save backups from within the app.",
	},

	// Add more questions here...
];
