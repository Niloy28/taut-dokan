export interface NavMenuInterface {
	id: string;
	anchorEl: HTMLElement | null;
	isMenuOpen: boolean;
	handleSignOut: () => void;
}
