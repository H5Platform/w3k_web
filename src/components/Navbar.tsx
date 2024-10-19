import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import HoverText from './CSText';
import CSButton from './CSButton';

const navOptions = [
	{ label: 'About Us', href: '/about' },
	{ label: 'W3K DEX', href: '/dex', comingSoon: true },
	{ label: 'Marketplace', href: '/marketplace', comingSoon: true },
	{ label: 'Leaderboard', href: '/leaderboard', comingSoon: true },
	// { label: 'Whitepaper', href: 'https://drive.google.com/drive/folders/1-KWd2Ivjdrx41wnZvkI6bAI1C_x-qgus' },
];

const Navbar = () => {
	return (
		<div className="flex justify-between p-2 items-center absolute top-0 left-0 right-0 w-full z-20">
			<Link href="/">
				<Image height={100} width={100} src={logo} alt="logo" />
			</Link>

			<div className="flex gap-2 font-space uppercase ">
				{navOptions.map((option, index) =>
					!option.comingSoon ? (
						<Link key={index} href={option.href} className="hover:text-primary text-center w-36">
							{option.label}
						</Link>
					) : (
						<HoverText key={index} className="hover:text-primary w-36 text-center">
							{option.label}
						</HoverText>
					)
				)}
				<a href="https://drive.google.com/drive/folders/1-KWd2Ivjdrx41wnZvkI6bAI1C_x-qgus" target="_blank" className="hover:text-primary text-center w-36">
					Whitepaper
				</a>
			</div>

			<div className="font-space">
				<CSButton className="hover:text-primary text-center text-sm w-36 font-space">Launch App</CSButton>
			</div>
		</div>
	);
};

export default Navbar;
