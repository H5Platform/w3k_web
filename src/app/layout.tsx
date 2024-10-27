import type { Metadata } from 'next';
import { Space_Mono, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import MUITheme from '@/components/MUITheme';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const Mono = Space_Mono({ weight: '400', subsets: ['latin'], variable: '--font-space-mono' });
const Mont = Montserrat({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
	title: 'War Three Kingdoms',
	description: 'War Three Kingdoms: Rise of a New Empire, is a WEB3-oriented NFT Mobile / Telegram Mini game for RPG game lovers, enhanced with new dynamics and strategies',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${Mono.variable} ${Mont.variable}`}>
				<MUITheme>
					<Navbar />
					{children}
					<Toaster />
					<Footer />
				</MUITheme>
			</body>
		</html>
	);
}
