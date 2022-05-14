import { InferGetServerSidePropsType } from "next";
import Head from "next/head";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import DarkTheme from "../src/themes/darkTheme";
import styles from "../styles/Home.module.css";
import ShopTopBar from "../components/ShopTopBar";
import Product from "../components/Product";
import Prisma from "../utils/prismaClient";

export default function Home({
	products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className={styles.container}>
			<Head>
				<title>টাউট দোকান (Taut Dokan)</title>
				<meta name="description" content="An E-Commerce site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CssBaseline />
			<ThemeProvider theme={DarkTheme}>
				<Container component="nav" fixed disableGutters maxWidth={false}>
					<ShopTopBar />
				</Container>
			</ThemeProvider>

			{Object.values(products).map((product) => {
				return (
					<Product
						key={product.id}
						id={product.id}
						name={product.name}
						price={product.price.toString()}
						inStock={product.inStock.toString()}
						imgSrc={product.imgSrc}
					/>
				);
			})}
		</div>
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
