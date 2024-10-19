'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import ss1 from '@/assets/screenshot/1.png';
import ss2 from '@/assets/screenshot/2.png';
import ss3 from '@/assets/screenshot/3.png';
import ss4 from '@/assets/screenshot/4.png';
import ss5 from '@/assets/screenshot/5.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
	return (
		<div className="h-[50vh] w-[400px] m-auto">
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				// loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				// navigation={true}
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

export default Slider;
