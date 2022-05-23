import React from "react";
import Head from "next/head";
import Prisma from "../../utils/prismaClient";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function Product({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<Head>
				<title>{product.name}</title>
			</Head>
			<div>
				<Image
					src={product.imgSrc}
					width={500}
					height={400}
					alt={product.name}
				></Image>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await Prisma.product.findMany();

	const paths = products.map((product) => {
		return {
			params: { id: product.id },
		};
	});

	return {
		paths: paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string;

	const product = await Prisma.product.findUnique({
		where: {
			id: id,
		},
	});

	return {
		props: { product: product },
	};
};
