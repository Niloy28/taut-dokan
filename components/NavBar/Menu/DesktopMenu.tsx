import React, { useState } from "react";
import { MenuProps } from "./MenuProps";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfileMenu from "./ProfileMenu";

interface DesktopNavMenuProps extends MenuProps {}

const DesktopMenu = (props: DesktopNavMenuProps) => {
	return (
		<>
			<Box sx={{ display: { xs: "none", md: "flex" } }}>
				<IconButton size="large" aria-label="shopping cart" color="inherit">
					<Badge badgeContent={4} color="error">
						<ShoppingCart />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					aria-label="show new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<IconButton
					size="large"
					edge="end"
					aria-label="account of current user"
					aria-controls={props.id}
					aria-haspopup="true"
					onClick={props.handleProfileMenuOpen}
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<ProfileMenu
					anchorEl={props.profileAnchorEl}
					handleProfileMenuClose={props.handleProfileMenuClose}
				/>
			</Box>
		</>
	);
};

export default DesktopMenu;
