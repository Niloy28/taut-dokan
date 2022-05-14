import React from "react";
import { NavMenuInterface } from "./NavMenuInterface";

import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface MobileNavMenuProps extends NavMenuInterface {
	handleMobileMenuClose: () => void;
	handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu = (props: MobileNavMenuProps) => {
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
				onClose={props.handleMobileMenuClose}
			>
				<MenuItem>
					<IconButton size="large" aria-label="show new mails" color="inherit">
						<Badge badgeContent={4} color="error">
							<MailIcon />
						</Badge>
					</IconButton>
					<p>Messages</p>
				</MenuItem>
				<MenuItem>
					<IconButton
						size="large"
						aria-label="show new notifications"
						color="inherit"
					>
						<Badge badgeContent={17} color="error">
							<NotificationsIcon />
						</Badge>
					</IconButton>
					<p>Notifications</p>
				</MenuItem>
				<MenuItem onClick={props.handleProfileMenuOpen}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="primary-search-account-menu"
						aria-haspopup="true"
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<p>Profile</p>
				</MenuItem>
			</Menu>
		</>
	);
};

export default MobileMenu;
