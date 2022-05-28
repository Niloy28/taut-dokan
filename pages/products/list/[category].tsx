import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import ProductCard from "../../../components/Products/ProductCard";
import prisma from "../../../utils/prismaClient";

export default function Category(
	products: InferGetServerSidePropsType<typeof getServerSideProps>
) {
	const router = useRouter();
	const { category } = router.query;

	return (
		<>
			<Head>
				<title>{category}</title>
			</Head>
			{console.log(products.length)}
			<div>
				{/* {Object.values(products).map((product) => {
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
				})} */}
				{products.length}
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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
};
