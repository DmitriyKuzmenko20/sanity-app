'use client'
import Image from 'next/image';
import { HeaderProps } from './types';
import { urlFor } from '@/utils/sanity';

export const Header = ({ data }: HeaderProps) => {
	const onClick = (link: string) => {
		window.open(link, '_blank');
	};

	return (
		<div className='flex justify-between items-center'>
			<Image src={urlFor(data.logo).url()} width={210} height={48} alt='logo' />
			<div className='flex items-center gap-4'>
				{data.links.map((link) => {
					return (
						<p key={link.text} className='cursor-pointer' onClick={() => onClick(link.link)}>
							{link.text}
						</p>
					);
				})}
			</div>
			Search icon
		</div>
	);
};
