import React from "react";
import { MenuProps } from "./MenuProps";

import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfileMenu from "./ProfileMenu";

interface MobileMenuProps extends MenuProps {
	mobileMenuAnchorEl: HTMLElement | null;
	handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
	handleMobileMenuClose: () => void;
}

const MobileMenu = (props: MobileMenuProps) => {
	const isMobileMenuOpen = Boolean(props.mobileMenuAnchorEl);
	return (
		<>
			<Box sx={{ display: { xs: "flex", md: "none" } }}>
				<IconButton
					size="large"
					aria-label="show more"
					aria-controls={props.id}
					aria-haspopup="true"
					onClick={props.handleMobileMenuOpen}
					color="inherit"
				>
					<MoreIcon />
				</IconButton>
				<Menu
					anchorEl={props.mobileMenuAnchorEl}
					open={isMobileMenuOpen}
					onClose={props.handleMobileMenuClose}
				>
					<MenuItem>
						<IconButton size="large" aria-label="show cart" color="inherit">
							<Badge badgeContent={4} color="error">
								<ShoppingCart />
							</Badge>
						</IconButton>
						<p>Cart</p>
					</MenuItem>
					<MenuItem>
						<IconButton
							size="large"
							aria-label="show notifications"
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
					<ProfileMenu
						anchorEl={props.profileAnchorEl}
						handleProfileMenuClose={props.handleProfileMenuClose}
					/>
				</Menu>
			</Box>
		</>
	);
};

export default MobileMenu;
