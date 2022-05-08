import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { MenuBookSharp } from "@mui/icons-material";
import { useSession, signOut } from "next-auth/react";

export default function ShopTopBar() {
	const session = useSession();

	return (
		<div>
			<AppBar position="static">
				<Toolbar
					sx={{
						justifyContent: "space-between",
					}}
				>
					<div className="flex">
						<IconButton size="medium" edge="start">
							<MenuBookSharp />
						</IconButton>
						<Typography
							variant="h6"
							sx={{
								padding: "1rem",
								fontWeight: 600,
							}}
						>
							টাউট দোকান
						</Typography>
					</div>
					{session.status !== "authenticated" ? (
						<Link href="/api/auth/signin">
							<Button>Sign In</Button>
						</Link>
					) : (
						<div className="flex">
							<Typography
								variant="caption"
								justifySelf="center"
								alignSelf="center"
								sx={{
									padding: "2px",
								}}
							>
								Signed in as {session.data.user?.name}
							</Typography>
							<Link href="/api/auth/signout">
								<Button onClick={() => signOut()}>Sign Out</Button>
							</Link>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
