import { useState } from 'react';
import Carousel from '../components/carousal';

const Home = () => {
	const tabs = ['STAY', 'DINE', 'PUMP', 'RELAX', 'SHOP'];
	const [selectedTab, setSelectedTab] = useState('STAY');

	const slides = [
		{
			img: '/images/stay-1.png',
			title: 'Vida Hotels & Resorts',
			description:
				'Experience unparalleled luxury and comfort at our exclusive locations. Redeem your points and enjoy a unique stay with SoW.',
			link: '/book',
		},
		{
			img: '/images/stay-2.png',
			title: 'Armani Hotels & Resorts',
			description:
				'Experience unparalleled luxury and comfort at our exclusive locations. Redeem your points and enjoy a unique stay with SoW.',
			link: '/book',
		},
		{
			img: '/images/stay-3.png',
			title: 'Address Hotels & Resorts',
			description:
				'Experience unparalleled luxury and comfort at our exclusive locations. Redeem your points and enjoy a unique stay with SoW.',
			link: '/book',
		},
	];

	return (
		<div className='relative flex flex-col items-center min-h-screen pt-[80px] px-[16px] lg:py-[120px] lg:px-[150px]'>
			<Carousel slides={slides} />
			<section className='w-full max-w-6xl mt-12 sm:mt-16'>
				<div className='text-[#BD9A5F] text-[12px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-manrope font-[500] uppercase tracking-[0.15em]'>
					earn & redeem
				</div>
				<div className='text-[#2D2A26] text-[25px] lg:text-[39px] md:text-[30px] sm:text-[25px] font-manrope font-[300] text-left'>
					Here's How It Works
				</div>
				<div
					className='flex gap-3 sm:gap-4 mt-4 overflow-x-auto scrollbar-hide'
					style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
				>
					{tabs.map((tab) => (
						<button
							key={tab}
							onClick={() => setSelectedTab(tab)}
							className={`px-3 sm:px-4 py-1 sm:py-2 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[14px] font-[700] font-manrope rounded-full border font-semibold whitespace-nowrap
								${
									selectedTab === tab
										? 'bg-[#2D2A26] text-white border-black'
										: 'border-[#D9C19D] hover:bg-[#2D2A26] hover:text-white hover:border-[#2D2A26]'
								}`}
						>
							{tab}
						</button>
					))}
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6'>
					<div className='bg-white rounded-[16px] shadow-md'>
						<div className='p-[20px] lg:p-[32px] sm:p-[20px]'>
							<div className='text-[#2D2A26] font-manrope font-[400] text-[14px] xl:text-[16px] lg:text-[14px] md:text-[16px] sm:text-[14px] flex items-center uppercase tracking-[0.15em]'>
								earn
								<span className='text-[#2D2A26] font-manrope font-[700] text-[14px] xl:text-[16px] lg:text-[14px] md:text-[16px] sm:text-[14px] ml-2 pl-2 border-l-[1px] border-[#A4A2A0]'>
									2AED = 1UPoint
								</span>
							</div>
							<p className='text-[#2D2A26] font-manrope text-[18px] max-w-[394px] mt-[32px] font-[400]'>
								You earn 1 Upoint for every AED 2 spent across participating
								outlets for stay.
							</p>
							<p className='text-[#BD9A5F] text-[16px] font-manrope font-[600] underline underline-offset-2 mt-[20px]'>
								Earn through Stay
							</p>
						</div>
						<div className='mt-[24px] sm:mt-[24px] md:mt-[40px] lg:mt-[56px] ml-[53px] lg:ml-[72px] sm:ml-[53px]'>
							<img
								src='/images/card-1.png'
								alt='Earning Points'
								className='rounded-lg w-full'
							/>
						</div>
					</div>
					<div className='bg-white rounded-[16px] shadow-md'>
						<div className='p-[20px] lg:p-[32px] sm:p-[20px]'>
							<div className='text-[#2D2A26] font-manrope font-[400] text-[14px] xl:text-[16px] lg:text-[14px] md:text-[16px] sm:text-[14px] flex items-center uppercase tracking-[0.15em]'>
								redeem
								<span className='text-[#2D2A26] font-manrope font-[700] text-[14px] xl:text-[16px] lg:text-[14px] md:text-[16px] sm:text-[14px] ml-2 pl-2 border-l-[1px] border-[#A4A2A0]'>
									10 Upoints = 1 AED
								</span>
							</div>
							<p className='text-[#2D2A26] font-manrope text-[18px] max-w-[394px] mt-[32px] font-[400]'>
								You can redeem them at participating outlets for Stay, Dine,
								Play & Relax experiences.
							</p>
							<p className='text-[#BD9A5F] text-[16px] font-manrope font-[600] underline underline-offset-2 mt-[20px]'>
								Redeem Upoints
							</p>
						</div>
						<div className='mt-[24px] sm:mt-[24px] md:mt-[40px] lg:mt-[56px] ml-[53px] lg:ml-[72px] sm:ml-[53px]'>
							<img
								src='/images/card-2.png'
								alt='Earning Points'
								className='rounded-lg w-full'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
