export interface LinkManifest {
	id: string;
	name: string;
	icon?: string;
	url: string;
	canBeToggled: boolean;
	isEnabled: boolean;
}

export interface LinkGroupManifest {
	id: string;
	name: string;
	links: LinkManifest[];
}
