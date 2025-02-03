import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

export const client = createClient({
	apiVersion: '2022-03-07',
	dataset: 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: false,
});

export const urlFor = (source: Image | string) => imageUrlBuilder(client).image(source);

export const fetchSanityData = async (query: string) => {
	return await client.fetch(query);
};
