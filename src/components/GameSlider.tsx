'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ss1 from '@/assets/Thumbnails/t1.jpg';
import ss2 from '@/assets/Thumbnails/t2.jpg';
import ss3 from '@/assets/Thumbnails/t3.jpg';
import ss4 from '@/assets/Thumbnails/t4.jpg';
import ss5 from '@/assets/Thumbnails/t6.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GameSlider = () => {
	return (
		<div className="h-[180px] lg:h-[350px] w-[300px] lg:w-[600px] m-auto">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className="mySwiper">
				<SwiperSlide>
					<Image src={ss1} height={400} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ss2} height={400} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ss3} height={400} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ss4} height={400} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={ss5} height={400} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default GameSlider;
