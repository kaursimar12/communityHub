import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

const Carousel = ({ slides }) => {
	const [activeIndex, setActiveIndex] = useState(1);

	return (
		<div className='relative w-full max-w-6xl mx-auto'>
			<Swiper
				modules={[Navigation, Autoplay]}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				loop
				autoplay={{ delay: 2000 }}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
				className='w-full'
			>
				{slides.map((slide, index) => (
					<SwiperSlide
						key={index}
						className='!flex flex-col md:!flex-row items-center justify-between bg-[#F6F5F3] rounded-[16px]'
					>
						<img
							src={slide.img}
							alt={slide.title}
							className='w-auto lg:w-2/3 md:w-2/3 sm:w-auto h-auto rounded-[16px]'
						/>
						<div className=' flex flex-col xl:pl-[64px] lg:pl-[32px] md:pl-[32px] sm:pl-0 text-start md:max-w-[400px] gap-0 xl:gap-[12px] lg:gap-0 md:gap-0 sm:gap-0 py-[32px] sm:py-[32px] md:py-0 '>
							<div className='text-[#BD9A5F] text-[12px] xl:text-[16px] lg:text-[12px] md:text-[12px] sm:text-[12px] font-manrope font-[500] uppercase tracking-[0.15em]'>
								{slide.title}
							</div>
							<div className='text-[#2D2A26] text-[25px] xl:text-[39px] lg:text-[28px] md:text-[28px] sm:text-[25px] font-[300] font-manrope'>
								Stay with SoW
							</div>
							<p className='text-gray-600 mt-2 text-start text-[#2D2A26] text-[14px] xl:text-[18px] lg:text-[14px] md:text-[14px] sm:text-[14px] font-[400] font-manrope'>
								{slide.description}
							</p>
							<a
								href={slide.link}
								className='flex flex-row mt-4 inline-block px-[14px] py-[10px] bg-black text-white rounded-[12px] w-fit text-[14px] font-[600] font-manrope'
							>
								BOOK STAY <ArrowTopRightOnSquareIcon className='ml-2 w-5 h-5' />
							</a>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='flex justify-end items-center gap-2 mt-4'>
				<span className='text-[#2D2A26] font-manrope text-[16px] font-[400]'>
					{activeIndex} / {slides.length}
				</span>
				<button className='custom-prev w-[24px] h-[24px] flex items-center justify-center rounded-full border-2 border-gray-300'>
					<ChevronLeftIcon className='w-4 h-4 text-black' />
				</button>
				<button className='custom-next w-[24px] h-[24px] flex items-center justify-center rounded-full border-2 border-gray-300'>
					<ChevronRightIcon className='w-4 h-4 text-black' />
				</button>
			</div>
		</div>
	);
};

export default Carousel;
