import { Copyright, GitHub, ShoppingBag } from "@mui/icons-material";
import { Box, Container, Grid, Divider, IconButton } from "@mui/material";
import Link from "next/link";

export default function Footer() {
	return (
		<footer>
			<Divider variant="middle" />

			<Box px={{ xs: 4, sm: 12 }} py={4}>
				<Container maxWidth="lg">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<p>
								{" "}
								<ShoppingBag /> Taut Dokan
							</p>
						</Grid>
						<Grid
							item
							xs={12}
							sm={4}
							sx={{
								zIndex: 5,
								marginBottom: "1em",
							}}
						>
							<ul className="list-none">
								<li>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href="/privacy">
										<a>Privacy Policy</a>
									</Link>
								</li>
								<li>
									<Link href="/shipping">
										<a>Shipping and Returns</a>
									</Link>
								</li>
								<li>
									<Link href="/refund">
										<a>Refund Policy</a>
									</Link>
								</li>
							</ul>
						</Grid>
					</Grid>
					<Divider />
					<Grid
						container
						spacing={5}
						sx={{
							marginTop: "1em",
						}}
					>
						<Grid item xs={12} sm={6}>
							<p>
								{" "}
								<Copyright /> 2022, All rights reseved
							</p>
						</Grid>
						<Grid item xs={12} sm={6}>
							<IconButton
								sx={{
									float: "right",
									top: -10,
								}}
							>
								<a
									href="https://github.com/Niloy28/taut-dokan"
									target="_blank"
									rel="noreferrer"
								>
									<GitHub />
								</a>
							</IconButton>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
}
