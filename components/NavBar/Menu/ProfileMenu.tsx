import React from "react";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { signOut } from "next-auth/react";

interface ProfileMenuProps {
	anchorEl: HTMLElement | null;
	handleProfileMenuClose: () => void;
}

const ProfileMenu = (props: ProfileMenuProps) => {
	const isMenuOpen = Boolean(props.anchorEl);

	const handleSignOut = () => {
		signOut();
	};

	return (
		<>
			<Menu
				anchorEl={props.anchorEl}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				id={"profile-menu"}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={isMenuOpen}
				onClose={props.handleProfileMenuClose}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem onClick={handleSignOut}>Log Out</MenuItem>
			</Menu>
		</>
	);
};

export default ProfileMenu;
