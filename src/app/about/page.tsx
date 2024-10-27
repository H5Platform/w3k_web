import Image from 'next/image';
import React from 'react';
// import banner from '@/assets/banner.png';
import banner2 from '@/assets/banner4.jpg';
import DividerWithText from '@/components/DividerWithText';
// import marco from '@/assets/team/cto.jpg';
// import jason from '@/assets/team/jason.png';
// import emma from '@/assets/team/emma.png';
import marco2 from '@/assets/team/cto.jpg';
import emma2 from '@/assets/team/emma2.png';
import jason2 from '@/assets/team/jason.jpg';
import lan from '@/assets/team/lan.jpg';

const team = [
	{ name: 'Emma Han', photo: emma2, designation: 'Founder/CEO', desc: ['Over 10 years of game development experience', 'Led 2 successful RPG games and blockchain projects'] },
	{ name: 'Marco', photo: marco2, designation: 'TECHNICAL DIRECTOR/CTO', desc: ['Game Development 20 years', 'Extensive blockchain development and smart contract design experience.'] },
	{ name: 'Jason Gu', photo: jason2, designation: 'GAME DESIGNER', desc: ['Senior strategy game designe', 'Participated in the development of several successful Three Kingdoms-themed games.'] },
	{
		name: 'Lan Bai',
		photo: lan,
		designation: 'ARTIST',
		desc: ['Expert in character and environment design for mobile RPGs', 'Skilled in creating immersive visuals and engaging narratives'],
	},
];

const page = () => {
	return (
		<div className="lg:pt-32 pt-12 lg:max-w-[90%] m-auto">
			<p className="text-4xl text-primary text-center">War Three Kingdoms: Rise of a New Empire</p>
			<div className="w-10/12 g:w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					In a world where the three most powerful kingdoms vie for control, the land is ravaged by endless battles, political schemes, and betrayals. The once-great empires of the Three Kingdoms—Wei,
					Shu, and Wu—are now embroiled in a struggle for dominance, and only one will emerge victorious to unite the fragmented territories under one banner.
				</p>

				<p className="text-lg">
					The kingdoms are not only at war with each other but are also forced to confront threats from mystical forces and barbaric tribes beyond the borders. Warriors from each kingdom must rise to
					the occasion, navigating treacherous lands, harsh climates, and the looming menace of mythical beasts, while harnessing new technologies and ancient artifacts that could tip the scales in
					their favor.
				</p>

				<p className="text-3xl py-4 font-semibold text-center">The Objective</p>

				<p className="text-lg">
					Players must choose a kingdom to pledge their loyalty to and lead a faction to victory. The game revolves around three core pillars: conquest, resource management, and survival. Each kingdom
					offers unique strengths, such as tactical intelligence, raw power, or mastery of ancient magic, but their survival depends on strategic decisions and collaboration.
				</p>
				<p className="text-3xl py-4 font-semibold text-center">Exploring New Frontiers</p>

				<p className="text-lg">
					As war consumes the land, your kingdom must push its boundaries, venturing into uncharted territories. These lands are filled with challenges—burning deserts, frigid mountains, radioactive
					wastelands, and poisonous swamps. The natural dangers are only the beginning. Players must also confront rival kingdoms who are seeking to seize the same resources and treasures that will
					secure their survival and dominance.
				</p>
				<p className="text-3xl py-4 font-semibold text-center">Team-Based Gameplay</p>

				<p className="text-lg">
					Players must act as a team, gathering resources and upgrading their kingdom’s technology and defenses. From forging powerful weapons to fortifying strongholds, strategic planning is key.
					Players can form alliances within and across kingdoms to face the common enemies or challenge each other in epic large-scale battles.
				</p>
			</div>

			<div className="flex flex-col items-center gap-4 border-[0.5px] border-primary rounded-xl pt-5 pb-0 overflow-hidden lg:w-2/3 mx-auto text-center">
				<p className="font-space text-3xl text-primary">Battle for Supremacy</p>
				<p className="font-space marker:text-primary">Presented by War Three Kingdom</p>
				<Image height={700} width={700} src={banner2} alt="author avatar" className="w-full h-full object-cover border-b border-gray-500" />
			</div>

			<div className="w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					In War Three Kingdoms, time is limited, and each decision counts. To survive, players must conquer territories, expand their influence, and outsmart enemy factions. You will lead armies,
					engage in legendary battles, and make or break alliances. But beware: trust is fragile, and betrayal is a constant shadow in this chaotic world.
				</p>
				<p className="text-lg mt-10">The fate of the Three Kingdoms lies in your hands. Will you unite the land under your rule, or will your kingdom fall to the might of your enemies?</p>

				<p className="text-lg">
					This version adapts the planetary exploration and survival elements into the core conflict of War Three Kingdoms, focusing on the dynamics of resource management, exploration, and strategic
					warfare within a fantasy setting.
				</p>
			</div>

			<div className="py-5 w-1/2 m-auto font-mont text-5xl text-center">
				<DividerWithText>
					<p className="font-light">THE TEAM</p>
				</DividerWithText>
			</div>

			<p className="font-space text-center">We are constantly continuing to improve ourselves with our flawless vision and innovative perspective that will shape the future.</p>

			<div className="grid grid-cols-12 lg:gap-10 px-5">
				{team.map((n) => (
					<div key={n.name} className="py-5 flex flex-col gap-6 col-span-12 lg:col-span-3">
						<div className="flex flex-col items-center border-[0.5px] border-gray-500 rounded-xl overflow-hidden h-full hover:shadow-lg hover:shadow-primary overflow-hidden">
							<Image height={800} width={800} src={n.photo} alt="author avatar" className="w-full h-[400px] lg:h-[320px] object-cover  rounded-t-xl object-top" />
							<div className="flex flex-col gap-1 px-8 border-t border-gray-500 pt-4">
								<p className="font-space text-end text-3xl uppercase font-bold text-primary">{n.name}</p>
								<p className="font-space text-end text-lg">{n.designation}</p>
								<ul className="mt-4">
									{n.desc.map((desc) => (
										<li key={desc} className="font-space marker:text-primary text-sm pb-3">
											{desc}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
