import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import DesktopMenu from "./Menu/DesktopMenu";
import MobileMenu from "./Menu/MobileMenu";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(3),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "20ch",
		},
	},
}));

export default function PrimarySearchAppBar() {
	const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(
		null
	);
	const [mobileMenuAnchorEl, setMobileMenuAnchorEl] =
		useState<HTMLElement | null>(null);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setProfileAnchorEl(event.currentTarget);
	};

	const handleProfileMenuClose = () => {
		setProfileAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMenuAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMenuAnchorEl(null);
	};

	const session = useSession();

	const menuId = "primary-search-account-menu";
	const mobileMenuId = "primary-search-account-menu-mobile";

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="open drawer"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: "none", sm: "block" } }}
					>
						টাউট দোকান
					</Typography>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
					<Box sx={{ flexGrow: 1 }} />

					{session.status === "authenticated" ? (
						<>
							<DesktopMenu
								profileAnchorEl={profileAnchorEl}
								id={menuId}
								handleProfileMenuOpen={handleProfileMenuOpen}
								handleProfileMenuClose={handleProfileMenuClose}
							/>
							<MobileMenu
								profileAnchorEl={profileAnchorEl}
								mobileMenuAnchorEl={mobileMenuAnchorEl}
								id={mobileMenuId}
								handleMobileMenuOpen={handleMobileMenuOpen}
								handleMobileMenuClose={handleMobileMenuClose}
								handleProfileMenuOpen={handleProfileMenuOpen}
								handleProfileMenuClose={handleProfileMenuClose}
							/>
						</>
					) : (
						<Link href="/api/auth/signin">
							<Button
								sx={{
									fontSize: { xs: "0.7em", md: "1em" },
								}}
							>
								Sign In
							</Button>
						</Link>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
