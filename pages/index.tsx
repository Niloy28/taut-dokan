import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { CssBaseline, Grid } from "@mui/material";

import ShopTopBar from "../components/NavBar/ShopTopBar";
import ProductCard from "../components/ProductCard";
import Prisma from "../utils/prismaClient";

export default function Home({
	products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<CssBaseline />
			<Head>
				<title>টাউট দোকান (Taut Dokan)</title>
				<meta name="description" content="An E-Commerce site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<ShopTopBar />

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
		</>
	);
}

export async function getServerSideProps() {
	const products = await Prisma.product.findMany();
	return {
		props: {
			products: products,
		},
	};
}
