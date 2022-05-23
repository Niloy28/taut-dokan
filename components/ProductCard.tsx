import { Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductProp {
	id: string;
	name: string;
	price: string;
	imgSrc: string;
	inStock: string;
}

export default function ProductCard(props: ProductProp) {
	return (
		<Grid item xs={12} md={3}>
			<Link href={`/products/${props.id}`}>
				<a>
					<Card>
						<Image
							src={props.imgSrc}
							layout="responsive"
							height={300}
							width={400}
							alt={`An image of ${props.name}`}
						/>
						<div className="flex justify-between mx-2 my-1">
							<Typography variant="h6">{props.name}</Typography>
							<Typography variant="h6">{`$${props.price}`}</Typography>
						</div>
					</Card>
				</a>
			</Link>
		</Grid>
	);
}
