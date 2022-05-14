import React from "react";
import { NavMenuInterface } from "./NavMenuInterface";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

interface DesktopNavMenuProps extends NavMenuInterface {
	handleMenuClose: () => void;
}

const DesktopMenu = (props: DesktopNavMenuProps) => {
	return (
		<>
			<Menu
				anchorEl={props.anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				id={props.id}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={props.isMenuOpen}
				onClose={props.handleMenuClose}
			>
				<MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
				<MenuItem onClick={props.handleMenuClose}>My account</MenuItem>
				<MenuItem onClick={props.handleSignOut}>Log Out</MenuItem>
			</Menu>
		</>
	);
};

export default DesktopMenu;
