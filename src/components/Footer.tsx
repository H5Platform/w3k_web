import React from 'react';
import HoverText from '@/components/CSText';
import Image from 'next/image';
import logo from '@/assets/logo2.png';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const footerOptions = [
	{ label: 'About Us', href: '/about' },
	{ label: 'W3K DEX', href: '/dex', comingSoon: true },
	{ label: 'Marketplace', href: '/marketplace', comingSoon: false },
	{ label: 'Leaderboard', href: '/leaderboard', comingSoon: true },
];

const socials = [
	{ name: 'Twitter', icon: FaXTwitter, link: 'https://x.com/habijabiking' },
	{ name: 'Telegram', icon: FaTelegram, link: 'https://t.me/war3kingdoms_ann' },
	// { name: 'Discord', icon: FaDiscord, link: 'https://discord.com/app' },
	// { name: 'Twitter', icon: FaTwitter, link: '' },
	// { name: 'Instagram', icon: FaInstagram, link: '' },
	// { name: 'YouTube', icon: FaYoutube, link: '' },
	// { name: 'Facebook', icon: FaFacebook, link: '' },
	// { name: 'LinkedIn', icon: FaLinkedin, link: '' },
];

const Footer = () => {
	return (
		<div className="lg:mx-32 bg-black p-14 pb-6 rounded-2xl mt-32">
			<Image src={logo} alt="" className="w-44" />

			<div className="flex flex-col lg:flex-row items-center justify-between font-space">
				<div className="lg:w-1/3 flex flex-col gap-4">
					<p className="text-primary">War Three Kingdom © 2024 COPYRIGHT</p>
					<p>War Three Kingdom is a WEB3-oriented NFT PC / Mobile / Console game for real game lovers, enhanced with new dynamics and realistic graphics.</p>
				</div>

				<div className="flex items-center gap-3">
					{socials.map((s) => (
						<Link key={s.link} href={s.link}>
							<s.icon size={'1.5rem'} />
						</Link>
					))}
				</div>
			</div>

			<div className="flex flex-col lg:flex-row gap-2 items-center justify-between pt-16">
				{footerOptions.map((option, index) =>
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
				<a href="https://drive.google.com/file/d/1LSctiJ4kR5xd7UDI0AC-N7vFr1m9ZJqX/view?usp=drive_link" target="_blank" className="hover:text-primary text-center w-36">
					Whitepaper
				</a>
			</div>
		</div>
	);
};

export default Footer;
