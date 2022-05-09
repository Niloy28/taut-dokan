import type { NextPage } from "next";
import Head from "next/head";

import { Container, CssBaseline, ThemeProvider } from "@mui/material";

import DarkTheme from "../src/themes/darkTheme";
import styles from "../styles/Home.module.css";
import ShopTopBar from "../components/ShopTopBar";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>টাউট দোকান (Taut Dokan)</title>
				<meta name="description" content="An E-Commerce site" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<CssBaseline />
			<ThemeProvider theme={DarkTheme}>
				<Container component="nav" fixed disableGutters maxWidth={false}>
					<ShopTopBar />
				</Container>
			</ThemeProvider>
		</div>
	);
};

export default Home;
