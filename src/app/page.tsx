import { Header } from '@/components/Header';
import { TopMenu } from '@/components/TopMenu';
import { headerQuery, topMenuQuery } from '@/schemas/shared/queris';
import { HeaderSchema, TopMenuSchema } from '@/schemas/shared/types';
import { fetchSanityData } from '@/utils/sanity';

export const revalidate = 30;

export default async function Home() {
	const headerData: HeaderSchema = await fetchSanityData(headerQuery);
	const topMenuData: TopMenuSchema = await fetchSanityData(topMenuQuery);

	return (
		<div>
			<Header data={headerData} />
			<TopMenu data={topMenuData} />
		</div>
	);
}
