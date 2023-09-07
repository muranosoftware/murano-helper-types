type TextValue = {
	type: "text";
	value: string;
	desc: string;
};

type BoolValue = {
	type: "boolean";
	value: boolean;
	desc: string;
};

type SingleSelectValue = {
	type: "singleSelect";
	values: string[] | string;
	value: string;
	desc: string;
};

type MultiSelectValue = {
	type: "multiSelect";
	values: string[] | string;
	value: "<ALL>" | string[];
	desc: string;
};

type DictionaryValue = {
	type: "dictionary";
	value: Record<string, string>;
	desc: string;
};

type TextareaValue = {
	type: "textarea";
	value: string;
	desc: string;
};

export type MapFileParamType =
	| TextValue
	| BoolValue
	| SingleSelectValue
	| MultiSelectValue
	| DictionaryValue
	| TextareaValue;
