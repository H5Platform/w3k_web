import Slider from '@/components/Slider';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '@/assets/logo2.png';
import banner2 from '@/assets/banner2.png';
import banner3 from '@/assets/banner3.jpg';
import news1 from '@/assets/Thumbnails/t4.jpg';
import news2 from '@/assets/Thumbnails/t3.jpg';
import news3 from '@/assets/Thumbnails/t2.jpg';
import GameSlider from '@/components/GameSlider';
import DividerWithText from '@/components/DividerWithText';
import MultiSlide from '@/components/MultiSlide';
import Newsletter from '@/components/Newsletter';

const socials = [
	{ name: 'Twitter', icon: FaXTwitter, link: 'https://x.com/habijabiking' },
	{ name: 'Telegram', icon: FaTelegram, link: 'https://t.me/war3kingdoms_ann' },
	// { name: 'Discord', icon: FaDiscord, link: 'https://discord.com/app' },
	// { name: 'Instagram', icon: FaInstagram, link: '' },
	// { name: 'YouTube', icon: FaYoutube, link: '' },
	// { name: 'Facebook', icon: FaFacebook, link: '' },
	// { name: 'LinkedIn', icon: FaLinkedin, link: '' },
];

const news = [
	{ title: 'War Three Kingdom: Pioneering the Future of Web3 Gaming', image: news3, date: 'April 10, 2024' },
	{ title: 'New Strategy update for empires', image: news2, date: 'April 10, 2024' },
	{ title: 'Conquer more with the new characters', image: news1, date: 'April 10, 2024' },
];

export default function Home() {
	return (
		<div className="">
			<main className="bg-gradient-to-br from-[#1b1b1b] ">
				{/* banner */}
				<div className="flex flex-col lg:flex-row items-center justify-center gap-28 relative min-h-[80vh]">
					{/* left side */}
					<div className="font-space pt-20 lg:pt-0">
						<div className="leading-loose lg:gap-3 flex flex-col pb-3">
							<p className="text-5xl lg:text-5xl font-bold">PLAY!</p>
							<p className="lg:text-3xl">War Three Kingdom </p>
							<p className="lg:text-3xl">Rise of a New Empire</p>
							<p className="">Join the battle of kingdoms for supremacy</p>
						</div>
						<div className="flex flex-col lg:flex-row items-center gap-3">
							<a href="https://t.me/war3kingdoms">
								<Button variant="outlined" color="info">
									Register & Subscribe
								</Button>
							</a>
							<div className="flex  gap-3">
								{socials.map((s) => (
									<Link key={s.link} href={s.link}>
										<s.icon size={'1.5rem'} />
									</Link>
								))}
							</div>
						</div>
					</div>

					{/* right side */}
					<div className="max-w-1/2 flex flex-col items-center font-space lg:py-6">
						<Image height={100} width={100} src={logo} alt="logo" />
						<p className="text-xl max-w-[70%] text-center py-4">The fate of the Three Kingdoms lies in your hands</p>
						<GameSlider />
					</div>

					<Image src={banner3} alt="banner" className="h-full w-full object-cover absolute -z-10" />
					<div className="bg-black opacity-15 w-full absolute h-full -z-10"></div>
				</div>

				{/* explore section */}
				<div className="flex flex-col items-center font-space mx-auto py-10">
					<div className="lg:w-2/3 pt-6 relative">
						<p className="text-center text-3xl">EXPLORE THE KINGDOMS</p>
						<p className="text-center lg:text-9xl font-extralight text-opacity-45 absolute left-0 right-0 -z-10 hidden lg:inline-block">EXPLORE</p>
						<div className="flex flex-col lg:flex-row items-center bg-black px-10 py-5 rounded-xl mt-16 gap-5">
							<div className="lg:w-1/2 text-center lg:text-left">
								<p className="text-3xl text-primary pb-3">Battle for Supremacy</p>
								<p>
									In War Three Kingdoms, time is limited, and each decision counts. To survive, players must conquer territories, expand their influence, and outsmart enemy factions. You will lead
									armies, engage in legendary battles, and make or break alliances. But beware: trust is fragile, and betrayal is a constant shadow in this chaotic world.
								</p>
							</div>
							<Slider />
						</div>
					</div>
				</div>

				{/* roadmap section */}
				<div className="flex flex-col items-center font-space mx-auto py-10">
					<div className="lg:w-2/3 w-full pt-6 relative">
						<p className="text-center text-3xl">ROADMAP</p>
						<p className="text-center lg:text-9xl font-extralight text-opacity-45 absolute left-0 right-0 -z-50 hidden lg:inline-block">ROADMAP</p>
						<div className="grid grid-cols-12 lg:gap-10  lg:px-10 py-5 rounded-xl mt-16 relative lg:overflow-hidden text-center lg:text-left">
							<div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover -z-10 opacity-35 bg-black"></div>
							<Image src={banner2} alt="banner" className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover object-center scale-150 -z-20 hidden lg:inline-block " />
							<div className="col-span-12 lg:col-span-4 pb-6 lg:pb-0 ">
								<p className="text-3xl text-primary pb-3">2024 Q2</p>
								<ul>
									<li>Project establishment.</li>
									<li>Launch of private round financing.</li>
								</ul>
							</div>
							<div className="col-span-12 lg:col-span-4 pb-6 lg:pb-0">
								<p className="text-3xl text-primary pb-3">2024 Q3</p>
								<ul>
									<li>Completion of internal testing.</li>
									<li>Test server online.</li>
								</ul>
							</div>
							<div className="col-span-12 lg:col-span-4 pb-6 lg:pb-0">
								<p className="text-3xl text-primary pb-3">2024 Q4</p>
								<ul>
									<li>Official game launch</li>
									<li>Start of W3KT token public sale..</li>
								</ul>
							</div>
							<div className="col-span-12 lg:col-span-4 pb-6 lg:pb-0">
								<p className="text-3xl text-primary pb-3">2025 Q1</p>
								<ul>
									<li>Launch of cross-server PVP battles.</li>
									<li>In-game NFT market.</li>
								</ul>
							</div>
							<div className="col-span-12 lg:col-span-4 pb-6 lg:pb-0">
								<p className="text-3xl text-primary pb-3">2025 Q2</p>
								<ul>
									<li>Add growth system and more PVE content.</li>
									<li>Further expand game features.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="my-t0 lg:max-w-[70%] m-auto">
					<div className="py-5 w-1/2 m-auto font-mont text-5xl text-center pb-10">
						<DividerWithText>
							<p className="font-light">Partners</p>
						</DividerWithText>
					</div>

					<div>
						<MultiSlide />
					</div>
				</div>

				<div className="my-40 mx-6 lg:mx-auto">
					<div className="py-5 w-1/2 m-auto font-mont text-5xl text-center">
						<DividerWithText>
							<p className="font-light">LASTEST NEWS</p>
						</DividerWithText>
					</div>

					<p className="text-center text-xl font-space max-w-[50vw] m-auto my-14">
						Don’t miss out on the latest updates, exclusive offers, and exciting news from War Three Kingdom! Sign up for our newsletter today and be the first to know.
					</p>

					<div className="grid grid-cols-12 w-full lg:w-2/3 lg:gap-10 m-auto mt-10 text-center">
						{news.map((n) => (
							<div key={n.title} className="py-5 flex flex-col gap-6 col-span-12 lg:col-span-4 h-full">
								<div className="h-full flex flex-col items-center gap-4 border-[0.5px] border-gray-500 rounded-xl pt-0 pb-10 overflow-hidden">
									<Image height={700} width={700} src={n.image} alt="author avatar" className="w-full h-[180px] object-cover border-b border-gray-500" />
									<div className="flex flex-col gap-6 px-4">
										<p className="font-space">{n.title}</p>
										<li className="font-space marker:text-primary text-sm">{n.date}</li>
									</div>
								</div>
								<Link href="/comingsoon">
									<Button variant="outlined" color="primary">
										Coming Soon
									</Button>
								</Link>
							</div>
						))}
					</div>
				</div>

				<Newsletter />
			</main>
		</div>
	);
}
