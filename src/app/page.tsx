import Slider from '@/components/Slider';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '@/assets/logo.png';

const socials = [
	{ name: 'Twitter', icon: FaXTwitter, link: '' },
	{ name: 'Discord', icon: FaDiscord, link: 'https://discord.com/app' },
	{ name: 'Twitter', icon: FaTwitter, link: '' },
	{ name: 'Instagram', icon: FaInstagram, link: '' },
	{ name: 'YouTube', icon: FaYoutube, link: '' },
	{ name: 'Facebook', icon: FaFacebook, link: '' },
	{ name: 'Telegram', icon: FaTelegram, link: '' },
	{ name: 'LinkedIn', icon: FaLinkedin, link: '' },
];

export default function Home() {
	return (
		<div className="">
			<main>
				{/* banner */}
				<div className="flex items-center justify-center gap-28 pt-6">
					<div className="font-space">
						<div className="leading-loose gap-3 flex flex-col pb-3">
							<p className="text-8xl font-bold">NOW!</p>
							<p className="text-3xl">Presented by War Three Kingdom </p>
							<p className="text-3xl">The Final Frontier</p>
							<p className="">War Three Kingdom, The Final Frontier.</p>
						</div>
						<div className="flex items-center gap-3">
							<Button variant="outlined" color="info">
								Register & Subscribe
							</Button>
							{socials.map((s) => (
								<Link key={s.link} href={s.link}>
									<s.icon size={'1.5rem'} />
								</Link>
							))}
						</div>
					</div>

					<div className="max-w-1/2 flex flex-col items-center font-space">
						<Image height={100} width={100} src={logo} alt="logo" />
						<p className="text-2xl max-w-80 text-center py-4">Earth is threatened by a solar system</p>
						<Slider />
					</div>
				</div>
				<div className="flex flex-col items-center font-space mx-auto my-10 bg-gradient-to-br from-[#1b1b1b]">
					<div className=" w-1/2 pt-6">
						<p className="text-center text-3xl">EXPLORE THE FEATURES OF THE MAPS</p>
						<p className="text-center text-9xl font-extralight text-opacity-45">EXPLORE</p>
						<div className="flex items-center bg-black px-10 py-5 rounded-xl -mt-6">
							<div className="w-1/2 ">
								<p className="text-3xl text-primary pb-3">QUANTUM QUANDARY</p>
								<p>
									Enter the Quantum Quandary, a fortified space station teeming with danger! Engage in thrilling third-person shootouts through tight corridors and expansive chambers. Commandeer
									high-tech weaponry and outmaneuver your rivals to dominate this epic space battleground!
								</p>
							</div>
							<Slider />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
