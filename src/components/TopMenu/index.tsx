'use client';
import { TopHeaderProps } from './types';

export const TopMenu = ({ data }: TopHeaderProps) => {
	console.log(data)
	const onClick = (link: string) => {
		window.open(link, '_blank');
	};

	return (
		<div className='flex justify-center items-center gap-4'>
			{data.links.map((link) => {
				return (
					<div key={link.text} className='relative group'>
						<p className='cursor-pointer'>{link.text}</p>
						{/* Popover menu */}
						<div className='absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
							<ul className='py-2 text-sm text-gray-700'>
								{link.dropdownLinks?.map((dropdownLink) => {
									return (
										<li
											key={dropdownLink.text}
											className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
											onClick={() => onClick(dropdownLink.link)}
										>
											{dropdownLink.text}
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	);
};
