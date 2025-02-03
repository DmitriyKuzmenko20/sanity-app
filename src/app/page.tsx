import { Header } from '@/components/Header';
import { headerQuery } from '@/schemas/shared/queris';
import { HeaderSchema } from '@/schemas/shared/types';
import { fetchSanityData } from '@/utils/sanity';

export const revalidate = 30;

export default async function Home() {
	const headerResponse: HeaderSchema = await fetchSanityData(headerQuery);

	return (
		<div>
			<Header data={headerResponse} />
		</div>
	);
}
