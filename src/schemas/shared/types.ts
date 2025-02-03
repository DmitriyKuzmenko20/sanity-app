import type { Image } from 'sanity';

export type HeaderSchema = {
	logo: Image;
	links: HeaderLink[];
};

type HeaderLink = {
	text: string;
	link: string;
};
