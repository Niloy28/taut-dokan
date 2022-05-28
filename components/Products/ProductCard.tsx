import { styled } from "@mui/material/styles";
import { Card, Grid, Theme, Typography } from "@mui/material";
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

const StyledCard = styled(Card)(({ theme }) => ({
	[theme.breakpoints.down("md")]: {
		height: "20vh",
	},
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
}));

export default function ProductCard(props: ProductProp) {
	return (
		<Grid item xs={6} md={3}>
			<Link href={`/products/${props.id}`}>
				<a>
					<StyledCard>
						<Image
							src={props.imgSrc}
							layout="responsive"
							height={300}
							width={400}
							alt={`An image of ${props.name}`}
						/>
						<div className="flex justify-between mx-1">
							<StyledTypography variant="h6">{props.name}</StyledTypography>
							<StyledTypography variant="h6">{`$${props.price}`}</StyledTypography>
						</div>
					</StyledCard>
				</a>
			</Link>
		</Grid>
	);
}
