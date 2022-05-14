import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";

interface ProductProp {
	id: string;
	name: string;
	price: string;
	imgSrc: string;
	inStock: string;
}

export default function Product(props: ProductProp) {
	return (
		<div>
			<Card key={props.id}>
				<Image
					src={props.imgSrc}
					width="100%"
					height="100%"
					alt={`A picture of a ${props.name}`}
				/>
			</Card>
		</div>
	);
}
