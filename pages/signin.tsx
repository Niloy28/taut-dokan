import React, { FormEvent, Provider } from "react";

import { Button, Divider, Stack, Typography } from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { NextAuthOptions } from "next-auth";
import { getProviders, getSession, signIn } from "next-auth/react";
import { NextPageContext } from "next";
import Head from "next/head";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

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
			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					marginBottom: "1rem",
				}}
			>
				<TextField required id="outlined-required" label="Username" />
				<TextField
					required
					id="outlined-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<Button onClick={(event) => handleSignIn(event, "credentials")}>
					Sign In
				</Button>
			</Box>

			<Divider variant="middle" flexItem>
				<Typography variant="h6">or</Typography>
			</Divider>
			<br />
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				{Object.values(providers).map((provider) => {
					if (provider.id === "credentials") return <></>;
					const icon = provider.id === "google" ? <Google /> : <GitHub />;
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
