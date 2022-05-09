import React, { FormEvent } from "react";

import { Button, Divider, Stack, Typography } from "@mui/material";
import { Google, GitHub, Facebook, Key } from "@mui/icons-material";
import { NextAuthOptions } from "next-auth";
import { getProviders, getSession, signIn } from "next-auth/react";
import { NextPageContext } from "next";
import Head from "next/head";

export default function SignIn({ providers }: NextAuthOptions) {
	const handleSignIn = (e: FormEvent, providerId: string) => {
		e.preventDefault();
		signIn(providerId);
	};

	return (
		<div className="flex justify-center items-center h-screen flex-col self-center content-center">
			<Head>
				<title>Sign In</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography
				variant="h2"
				sx={{
					marginBottom: "0.5em",
				}}
			>
				Sign In to continue shopping
			</Typography>
			<Divider variant="middle" flexItem></Divider>
			<br />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				{Object.values(providers).map((provider) => {
					if (provider.id === "credentials") return <></>;
					let icon: JSX.Element;
					switch (provider.id) {
						case "google":
							icon = <Google />;
							break;
						case "github":
							icon = <GitHub />;
							break;
						case "facebook":
							icon = <Facebook />;
							break;
						default:
							icon = <Key />;
							break;
					}
					return (
						<Button
							startIcon={icon}
							key={provider.id}
							id={provider.id}
							variant="outlined"
							sx={{
								padding: "10px",
								margin: "5px",
							}}
							onClick={(event) => handleSignIn(event, provider.id)}
						>
							Sign In With {provider.name}
						</Button>
					);
				})}
			</Stack>
		</div>
	);
}

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	return {
		props: {
			providers: await getProviders(),
		},
	};
}
