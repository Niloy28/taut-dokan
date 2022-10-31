import { Container, Grid } from "@mui/material";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import ProductCard from "../../../components/Products/ProductCard";
import { TypeProductFields } from "../../../libs";
import { capitalizeWord } from "../../../utils/capitalizeWord";
import contentfulClient from "../../../utils/contentfulClient";

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
					{products.products.items.map((product) => {
						return (
							<ProductCard
								key={product.fields.id}
								id={product.fields.id}
								name={product.fields.name as string}
								price={product.fields.price?.toString() as string}
								inStock={product.fields.inStock?.toString() as string}
								imgSrc={`https:${(
									product.fields.imgSrc?.fields.file?.url as string
								).replace("https:", "")}`}
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

	const products = await contentfulClient.getEntries<TypeProductFields>({
		content_type: "product",
		"metadata.tags.sys.id[in]": category,
	});

	return {
		props: {
			products: products,
		},
	};
}
