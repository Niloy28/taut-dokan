import { Container, Grid } from "@mui/material";
import { Product } from "@prisma/client";
import Link from "next/link";
import { capitalizeWord } from "../../utils/capitalizeWord";

import ProductCard from "./ProductCard";

interface ProductShowcaseProps {
	category: string;
	products: Product[];
}

export default function ProductCategoryShowcase({
	category,
	products,
}: ProductShowcaseProps) {
	return (
		<Container>
			<div className="flex justify-between">
				<h3>{capitalizeWord(category)}</h3>
				<Link href="/">
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
	);
}
