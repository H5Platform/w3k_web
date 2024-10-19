import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import HoverText from './CSText';
import CSButton from './CSButton';

const navOptions = [
	{ label: 'Home', href: '/' },
	{ label: 'W3K DEX', href: '/dex', comingSoon: true },
	{ label: 'Marketplace', href: '/marketplace', comingSoon: true },
	{ label: 'Leaderboard', href: '/leaderboard', comingSoon: true },
	{ label: 'Whitepaper', href: '/whitepaper' },
];

const Navbar = () => {
	return (
		<div className="flex justify-between p-2 items-center">
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
			</div>

			<div className="font-space">
				<CSButton className="hover:text-primary text-center text-sm w-36 font-space">Launch App</CSButton>
			</div>
		</div>
	);
};

export default Navbar;
