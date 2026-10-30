const SITE_URL = import.meta.env.PUBLIC_SITE_URL || "http://localhost:5200";

export const siteConfig = {
	title: "The Reading Room",
	author: "",
	url: SITE_URL,
	utm: {
		source: SITE_URL,
		medium: "referral",
		campaign: "navigation",
	},
	meta: {
		title: "The Reading Room — A place for good ideas",
		description:
			"A quiet corner for notes, ideas, and things worth returning to.",
		keywords:
			"blog, writing, notes, stories",
		image: `${SITE_URL}/assets/preview.jpg`,
		twitterHandle: "",
	},
	social: {
		github: "https://github.com/ricocc/ricoui-astro-starter",
	},
};
