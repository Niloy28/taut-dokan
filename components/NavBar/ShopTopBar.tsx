import React, { useState } from "react";
import { useSession } from "next-auth/react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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
import { SwipeableDrawer } from "@mui/material";
import { Home } from "@mui/icons-material";

type Anchor = "top" | "left" | "bottom" | "right";

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

export default function ShopTopBar() {
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

	const anchor: Anchor = "left";

	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setState({ ...state, [anchor]: open });
		};

	const list = (anchor: Anchor) => (
		<Box
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Home />
							<Link href="/">
								<p>Home</p>
							</Link>
						</ListItemIcon>
						<ListItemText />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed">
				<Toolbar>
					<React.Fragment key={anchor}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="open drawer"
							sx={{ mr: 2 }}
							onClick={toggleDrawer(anchor, true)}
						>
							<MenuIcon />
						</IconButton>

						<SwipeableDrawer
							anchor={anchor}
							open={state[anchor]}
							onClose={toggleDrawer(anchor, false)}
							onOpen={toggleDrawer(anchor, true)}
						>
							{list(anchor)}
						</SwipeableDrawer>
					</React.Fragment>
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
