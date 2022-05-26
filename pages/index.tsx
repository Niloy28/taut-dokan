import { InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";

import { Container, CssBaseline, Grid } from "@mui/material";

import ProductCard from "../components/ProductCard";
import Prisma from "../utils/prismaClient";
import HeroCarouselSection from "../components/HeroCarouselSection";

export default function Home({
	products,
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

			<Container>
				<Link href="/products/">
					<a>Show More</a>
				</Link>
				<Grid
					container
					spacing={1}
					sx={{
						padding: 2,
					}}
				>
					{Object.values(products).map((product) => {
						return (
							<ProductCard
								key={product.id}
								id={product.id}
								name={product.name}
								price={product.price.toString()}
								inStock={product.inStock.toString()}
								imgSrc={product.imgSrc}
							/>
						);
					})}
				</Grid>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const products = await Prisma.product.findMany({
		take: 4,
		orderBy: {
			name: "asc",
		},
	});
	return {
		props: {
			products: products,
		},
	};
}
