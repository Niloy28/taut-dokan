import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { Container, CssBaseline } from "@mui/material";

import prisma from "../utils/prismaClient";
import HeroCarouselSection from "../components/HeroCarouselSection";
import ProductCategoryShowcase from "../components/Products/ProductCategoryShowcase";

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

			{Object.values(categories).map((category) => {
				let filteredProducts = products.filter(
					(product) => product.category === category.category
				);
				filteredProducts = filteredProducts.slice(0, 4);

				return (
					<ProductCategoryShowcase
						key={category.category}
						category={category.category}
						products={filteredProducts}
					/>
				);
			})}
		</>
	);
}

export async function getServerSideProps() {
	const products = await prisma.product.findMany({
		where: {
			inStock: {
				gt: 0,
			},
		},
		orderBy: {
			price: "asc",
		},
	});

	const categories = await prisma.product.findMany({
		distinct: ["category"],
		select: {
			category: true,
		},
	});

	return {
		props: {
			products: products,
			categories: categories,
		},
	};
}
