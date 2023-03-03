import { MapFileParamType } from "@global-types/map-file-param";

export default interface ScriptManifest<T extends {}> {
	author?: string;
	desc: string;
	isEnabled: boolean;
	canBeToggled: boolean;
	predicate: () => Promise<boolean>;
	params: Record<keyof T, MapFileParamType>;
}
