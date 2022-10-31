import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { Container, Grid } from "@mui/material";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import contentfulClient from "../../utils/contentfulClient";
import { TypeProductFields } from "../../libs";

export default function Product({
	product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<Head>
				<title>{product?.items[0].fields.name}</title>
			</Head>

			<Container
				sx={{
					paddingBottom: "2em",
				}}
			>
				<br />
				<br />
				<Grid
					container
					columnGap={3}
					sx={{ paddingTop: "2em" }}
					justifyContent="space-between"
				>
					<Grid item xs={14} sm={4}>
						<Image
							className="justify-center self-center"
							src={`https:${product.items[0].fields.imgSrc?.fields.file?.url}`}
							width={500}
							height={400}
							alt={product?.items[0].fields.name}
						></Image>
						<div className="text-right">{`Price: $${product.items[0].fields.price}`}</div>
						<div className="text-right">{`Items Left: ${product.items[0].fields.inStock}`}</div>
					</Grid>
					<Grid item xs={12} sm={7}>
						<ReactMarkdown>
							{product.items[0].fields.description as string}
						</ReactMarkdown>
					</Grid>
				</Grid>
			</Container>
		</>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const id = context.params?.id as string;

	const product = await contentfulClient.getEntries<TypeProductFields>({
		content_type: "product",
		"fields.id": id,
	});

	return {
		props: { product: product },
	};
}
