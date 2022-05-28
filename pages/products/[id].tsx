import React from "react";
import Head from "next/head";
import prisma from "../../utils/prismaClient";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Container } from "@mui/material";

export default function Product({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>{product?.name}</title>
			</Head>

			<Container>
				<Image
					src={product?.imgSrc as string}
					width={500}
					height={400}
					alt={product?.name}
				></Image>
				<div>{product?.description}</div>
			</Container>
		</>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string;

	const product = await prisma.product.findUnique({
		where: {
			id: id,
		},
	});

	return {
		props: { product: product },
	};
}
