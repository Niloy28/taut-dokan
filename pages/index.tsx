import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { CssBaseline } from "@mui/material";

import HeroCarouselSection from "../components/HeroCarouselSection";
import ProductCategoryShowcase from "../components/Products/ProductCategoryShowcase";
import contentfulClient from "../utils/contentfulClient";
import { TypeProductFields } from "../libs";

export default function Home({
	products,
	categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<CssBaseline />
			<Head>
				<title>টাউট দোকান (Taut Dokan) | Home</title>
				<meta name="description" content="An E-Commerce site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<HeroCarouselSection />

			{categories.items.map((category) => {
				let filteredProducts = products.items.filter(
					(product) => product.metadata.tags[0].sys.id === category.sys.id
				);
				filteredProducts = filteredProducts.slice(0, 4);

				if (filteredProducts.length === 0) {
					return <></>;
				} else {
					return (
						<ProductCategoryShowcase
							key={category.sys.id}
							category={category.name}
							products={filteredProducts}
						/>
					);
				}
			})}
		</>
	);
}

export async function getServerSideProps() {
	const products =
		await contentfulClient.withoutUnresolvableLinks.getEntries<TypeProductFields>(
			{
				"fields.inStock[gt]": 0,
				content_type: "product",
			}
		);

	const categories = await contentfulClient.getTags();

	return {
		props: {
			products: products,
			categories: categories,
		},
	};
}
