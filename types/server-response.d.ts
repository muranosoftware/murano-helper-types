import { MapFileParamType } from "./map-file-param";

export type MapFile = {
	id: string;
	name: string;
	author?: string;
	desc: string;
	isEnabled: boolean;
	canBeToggled: boolean;
	predicate: string;
	params: Record<string, MapFileParamType>;
};

export type Site = {
	id: string;
	name: string;
	iconUrl: string;
	domains: string[];
	isJQuery?: boolean;
	files: MapFile[];
};

export type Link = {
	id: string;
	name: string;
	icon?: string;
	url: string;
	canBeToggled: boolean;
	isEnabled: boolean;
	isCustom?: boolean;
};

export type LinkGroup = {
	id: string;
	name: string;
	iconUrl: string;
	links: Link[];
};

export type Project = {
	id: string;
	name: string;
	iconUrl: string;
	url: string;
	desc: string;
	canBeToggled: boolean;
	isEnabled: boolean;
	linkGroups: LinkGroup[];
	sites: Site[];
};

export interface FileData {
	fileData: string;
}
