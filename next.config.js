/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"res.cloudinary.com",
			"unsplash.com",
			"images.unsplash.com",
			"assets.ctfassets.net",
			"images.ctfassets.net",
		],
	},
};

module.exports = nextConfig;
