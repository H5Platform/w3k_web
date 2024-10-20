'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import partner1 from '@/assets/partners/Bytedance.png';
import partner2 from '@/assets/partners/Galxe_Logo_Icon_White.png';
import partner3 from '@/assets/partners/Nabox-white.png';
import partner4 from '@/assets/partners/NexGami.png';
import partner5 from '@/assets/partners/PoolzBoost Logo White.png';
import partner6 from '@/assets/partners/logo@2x-bca0d9e2.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import Image from 'next/image';

const partners = [
	{ name: 'Bytedance', photo: partner1, link: '' },
	{ name: 'Galxe', photo: partner2, link: '' },
	{ name: 'Nabox', photo: partner3, link: '' },
	{ name: 'NexGami', photo: partner4, link: '' },
	{ name: 'PoolzBoost', photo: partner5, link: '' },
	{ name: 'AS Coin Wallet', photo: partner6, link: '' },
];

export default function MultiSlide() {
	return (
		<div className="multislide">
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Navigation, Autoplay]}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				navigation={true}
				className="mySwiper">
				{partners.map((partner) => (
					<SwiperSlide key={partner.name}>
						<div className="w-[300px] h-[160px] border border-gray-500 px-8 py-4 rounded-xl overflow-hidden m-auto">
							<Image src={partner.photo} alt={partner.name} className="w-full !object-contain" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
