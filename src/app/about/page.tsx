import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png';
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
		<div className="pt-32 lg:max-w-[90%] m-auto">
			<p className="text-4xl text-primary text-center">STORY OF War Three Kingdom</p>
			<p className="text-4xl pt-6 text-center">EXPLORE NEW PLANETS</p>
			<div className="w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					Earth is in peril as it is hit by a massive solar storm that threatens to destroy all life on the planet. In a desperate attempt to save humanity, the government has launched various
					missions to explore new planets for possible settlement.
				</p>

				<p className="text-lg">
					What they didn’t know. going into this mission was that each planet has unique challenges and dangers, from scorching sun rays, freezing conditions, radioactive explosions, insuffucient
					oxygen, supersonic winds and acid rains.
				</p>

				<p className="text-lg">
					The goal of the game is to act as a team to explore and conquer new planets, while fighting other groups of migrating humans trying to survive and escape the planet’s hardships with limited
					time. The player must ensure the survival of their team as they travel from planet to planet, gathering resources and upgrading their technology.
				</p>
			</div>

			<div className="flex flex-col items-center gap-4 border-[0.5px] border-primary rounded-xl pt-10 pb-0 overflow-hidden lg:w-2/3 mx-auto text-center">
				<p className="font-space text-3xl text-primary">CREATED WITH FUTURE TECHNOLOGIES</p>
				<p className="font-space marker:text-primary">Presented by War Three Kingdom</p>
				<Image height={700} width={700} src={banner} alt="author avatar" className="w-full h-full object-cover border-b border-gray-500" />
			</div>

			<div className="w-2/3 m-auto flex flex-col gap-5 mb-10 font-space text-center">
				<p className="text-lg mt-10">
					Earth is in peril as it is hit by a massive solar storm that threatens to destroy all life on the planet. In a desperate attempt to save humanity, the government has launched various
					missions to explore new planets for possible settlement.
				</p>

				<p className="text-lg">
					What they didn’t know. going into this mission was that each planet has unique challenges and dangers, from scorching sun rays, freezing conditions, radioactive explosions, insuffucient
					oxygen, supersonic winds and acid rains.
				</p>

				<p className="text-lg">
					The goal of the game is to act as a team to explore and conquer new planets, while fighting other groups of migrating humans trying to survive and escape the planet’s hardships with limited
					time. The player must ensure the survival of their team as they travel from planet to planet, gathering resources and upgrading their technology.
				</p>
			</div>

			<div className="py-5 w-1/2 m-auto font-mont text-5xl text-center">
				<DividerWithText>
					<p className="font-light">THE TEAM</p>
				</DividerWithText>
			</div>

			<p className="font-space text-center">We are constantly continuing to improve ourselves with our flawless vision and innovative perspective that will shape the future.</p>

			<div className="grid grid-cols-12 gap-10 px-5">
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
