export interface MenuProps {
	id: string;
	profileAnchorEl: HTMLElement | null;
	handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
	handleProfileMenuClose: () => void;
}
