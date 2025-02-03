import type { Image } from 'sanity';

export type HeaderSchema = {
	logo: Image;
	links: HeaderLink[];
};

type HeaderLink = {
	text: string;
	link: string;
};

export type TopMenuSchema = {
	links: TopMenuLink[];
};

export type TopMenuLink = {
	text: string;
	dropdownLinks: TopMenuDropdownLink[];
};

export type TopMenuDropdownLink = {
	text: string;
	link: string;
};
