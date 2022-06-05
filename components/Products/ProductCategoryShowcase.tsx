import { Container, Grid } from "@mui/material";
import Link from "next/link";
import { TypeProduct, TypeProductFields } from "../../libs";
import { capitalizeWord } from "../../utils/capitalizeWord";

import ProductCard from "./ProductCard";

interface ProductShowcaseProps {
	category: string;
	products: TypeProduct[];
}

export default function ProductCategoryShowcase({
	category,
	products,
}: ProductShowcaseProps) {
	return (
		<Container className="container">
			<div className="flex justify-between">
				<h3>{capitalizeWord(category)}</h3>
				<Link href={`/products/list/${category}`}>
					<a>Show More</a>
				</Link>
			</div>

			<Grid
				container
				spacing={1}
				sx={{
					padding: 2,
				}}
			>
				{products.map((product) => {
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
	);
}
