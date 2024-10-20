import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo2.png';
import HoverText from './CSText';
import CSButton from './CSButton';
import MobileNav from './MobileNav';

const navOptions = [
	{ label: 'About Us', href: '/about' },
	{ label: 'W3K DEX', href: '/dex', comingSoon: true },
	{ label: 'Marketplace', href: '/marketplace', comingSoon: true },
	{ label: 'Leaderboard', href: '/leaderboard', comingSoon: true },
];

const Navbar = () => {
	return (
		<div>
			<div className="justify-between p-2 items-center absolute top-0 left-0 right-0 w-full z-20 hidden lg:flex">
				<Link href="/">
					<Image height={100} width={100} src={logo} alt="logo" />
				</Link>

				<div className="flex gap-2 font-space uppercase ">
					{navOptions.map((option, index) =>
						!option.comingSoon ? (
							<Link key={index} href={option.href} className="hover:text-primary text-center w-32 text-[12px]">
								{option.label}
							</Link>
						) : (
							<HoverText key={index} className="hover:text-primary w-32 text-[12px] text-center">
								{option.label}
							</HoverText>
						)
					)}
					<a href="https://drive.google.com/file/d/1LSctiJ4kR5xd7UDI0AC-N7vFr1m9ZJqX/view?usp=drive_link" target="_blank" className="hover:text-primary text-center  w-32 text-[12px]">
						Whitepaper
					</a>
				</div>

				<div className="font-space">
					<CSButton className="hover:text-primary text-center text-[12px] w-36 font-space">Launch App</CSButton>
				</div>
			</div>
			<div className="lg:hidden inline-block w-full">
				<MobileNav navOptions={navOptions} />
			</div>
		</div>
	);
};

export default Navbar;
