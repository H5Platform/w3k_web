import React from 'react';
import legendary from '@/assets/NFT Icon/legendary.jpg';
import epic from '@/assets/NFT Icon/epic.jpg';
import rare from '@/assets/NFT Icon/rare.jpg';
import uncommon from '@/assets/NFT Icon/uncommon.jpg';
import common from '@/assets/NFT Icon/common.jpg';
import eth from '@/assets/eth.png';
import Image from 'next/image';
import { Button } from '@mui/material';

const shopItems = [
	{ name: 'Legendary Crate', description: 'Coming soon', auctionEnd: '2024-12-30', currentBid: 'Bidding Not Started', link: '', photo: legendary },
	{ name: 'Epic Crate', description: 'Coming soon', auctionEnd: '2024-12-30', currentBid: 'Bidding Not Started', link: '', photo: epic },
	{ name: 'Rare Crate', description: 'Coming soon', auctionEnd: '2024-12-30', currentBid: 'Bidding Not Started', link: '', photo: rare },
	{ name: 'Uncommon Crate', description: 'Coming soon', auctionEnd: '2024-12-30', currentBid: 'Bidding Not Started', link: '', photo: uncommon },
	{ name: 'Common Crate', description: 'Coming soon', auctionEnd: '2024-12-30', currentBid: 'Bidding Not Started', link: '', photo: common },
];

const page = () => {
	return (
		<div className="bg-gradient-to-br from-[#1b1b1b] ">
			<div className="flex flex-col items-center font-space mx-auto py-24">
				<div className=" w-full pt-6 relative">
					<p className="text-center text-3xl">Marketplace</p>
					<p className="text-center lg:text-9xl font-extralight text-opacity-45 absolute left-0 right-0 -z-50 hidden lg:inline-block">MARKET</p>
					<div className="flex items-center w-full">
						<div className="flex flex-col gap-6 lg:px-10 py-5 rounded-xl mt-16 relative lg:overflow-hidden text-center lg:text-left w-full justify-center items-center">
							{shopItems.map((item) => (
								<div key={item.name} className="flex flex-col lg:flex-row items-center gap-6 lg:max-w-[75%] max-w-[90%] w-fit lg:w-full">
									<div className="lg:rotate-180 text-center rounded-xl verticalText">Crates</div>
									<div className="bg-black w-full flex flex-col lg:flex-row items-center p-6 rounded-xl gap-6 justify-between">
										<div className="max-w-[50%]">
											<Image height={500} width={500} src={item.photo} alt="" className="max-w-[300px] w-full max-h-[300px] rounded-xl" />
										</div>
										<div className="w-full h-full lg:px-6 lg:max-w-[70%]">
											<p className="text-3xl">{item.name}</p>

											<div className="grid grid-cols-12 justify-between gap-4 w-fit mt-6 text-[8px]">
												<div className="col-span-5 flex justify-center">
													<p className="outlinedText">Aution Ends In</p>
												</div>
												<div className="lg:col-span-1 col-span-2"></div>

												<div className="col-span-5 flex justify-center">
													<p className="outlinedText col-span-5">Current Bid</p>
												</div>
												<div className="col-span-5 flex justify-center">
													<p className="outlinedText grid grid-cols-12 col-span-5">
														{item.auctionEnd.split('-').map((datepart, i) => (
															<span key={i} className="col-span-4 text-center border-r last:border-0 px-1 lg:px-2 py-1">
																{datepart}
															</span>
														))}
													</p>
												</div>

												<div className="lg:col-span-1 col-span-2">
													<Image src={eth} alt="" className="h-8 w-8 object-contain border rounded-full border-gray-500 p-1" />
												</div>

												<div className="col-span-5 flex justify-center">
													<p className="outlinedText col-span-5">{item.currentBid}</p>
												</div>

												<div className="w-full lg:col-span-5 flex justify-center mt-5 col-span-12">
													<Button variant="contained" size="small" className="!text-[10px]">
														Coming Soon
													</Button>
												</div>
												<div className="col-span-1 hidden lg:inline-block">{/* <Image src={eth} alt="" className="" /> */}</div>

												<div className="w-full col-span-12 lg:col-span-5 flex justify-center lg:mt-5">
													<Button variant="outlined" color="info" size="small" className="!text-[10px]">
														View Content
													</Button>
												</div>
												{/* <div className="flex flex-col gap-6"></div>

												<div className="flex flex-col gap-6"></div> */}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
