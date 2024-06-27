module.exports = {
	async redirects() {
		return [
			{
				source: "/contact",
				destination: "https://matthewglasser.org/contact",
				permanent: true,
			},
			{
				source: "/etsy",
				destination: "https://3dmaniaprints.etsy.com",
				permanent: true,
			},
		];
	},
};
