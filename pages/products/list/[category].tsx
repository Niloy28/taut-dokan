import { Container, Grid } from "@mui/material";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import ProductCard from "../../../components/Products/ProductCard";
import { capitalizeWord } from "../../../utils/capitalizeWord";
import prisma from "../../../utils/prismaClient";

export default function Category(
	products: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const router = useRouter();
	const { category } = router.query;

	return (
		<>
			<Head>
				<title>{capitalizeWord(category as string)}</title>
			</Head>

			<Container className="container" maxWidth={false}>
				<h1>{capitalizeWord(category as string)}</h1>
				<Grid container columns={13} gap={1}>
					{Object.values(products.products).map((product) => {
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const category = context.params?.category as string;

	console.log(category);
	const products = await prisma.product.findMany({
		where: {
			category: category,
		},
	});

	return {
		props: {
			products: products,
		},
	};
}
