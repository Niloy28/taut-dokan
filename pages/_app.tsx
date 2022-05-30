import Head from "next/head";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "../styles/globals.css";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../src/themes/darkTheme";
import LightTheme from "../src/themes/lightTheme";
import { CssBaseline } from "@mui/material";
import createEmotionCache from "../src/createEmotionCache";
import { Session } from "next-auth";

import ShopTopBar from "../components/NavBar/ShopTopBar";
import Footer from "../components/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
	session: Session;
}

function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
		session,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

			<ThemeProvider theme={DarkTheme}>
				<SessionProvider session={session}>
					<CssBaseline />
					<ShopTopBar />
					<Component {...pageProps} />
					<Footer />
				</SessionProvider>
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
