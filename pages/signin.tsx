import React, { FormEvent } from "react";

import { Button, Stack } from "@mui/material";
import { Google, GitHub } from "@mui/icons-material";
import { NextAuthOptions } from "next-auth";
import { getProviders, getSession, signIn } from "next-auth/react";
import { NextPageContext } from "next";

export default function SignIn({ providers }: NextAuthOptions) {
	const handleSignIn = (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
	};

	return (
		<div>
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={1}
			>
				{Object.values(providers).map((provider) => {
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
							onSubmit={handleSignIn}
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
