'use client';

import { Button, TextField } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import banner from '@/assets/banner.png';

const Newsletter = () => {
	const [email, setEmail] = useState('');

	const handleSubmit = () => {
		console.log('clicked');
		fetch('https://api.sheetbest.com/sheets/e32bc125-e1cb-49b7-a46e-bf36a6e70d22', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 'Email Address': email }),
		})
			.then((r) => r.json())
			.then((data) => {
				// The response comes here
				console.log(data);
			})
			.catch((error) => {
				// Errors are reported there
				console.log(error);
			});
	};

	return (
		<div className="relative lg:w-2/3 mx-6 lg:mx-auto p-10 rounded-xl overflow-hidden font-mont ">
			<div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover -z-10 opacity-35 bg-black"></div>
			<Image src={banner} alt="banner" className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover -z-20" />

			<p className="text-2xl lg:text-5xl text-primary">SUBSCRIBE</p>
			<p className="text-xl py-3 tracking-widest">The War Three Kingdom Newsletter</p>
			<div className="flex flex-col lg:flex-row items-center gap-2 py-4 max-w-[60%]">
				<TextField
					id="filled-basic"
					label="Email"
					variant="outlined"
					color="primary"
					sx={{
						color: '#fff',
					}}
					fullWidth
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Button variant="contained" color="primary" onClick={handleSubmit}>
					Subscribe
				</Button>
			</div>
			<p className="tracking-widest">Please, Subscribe to our newsletter and stay uptaded.</p>
		</div>
	);
};

export default Newsletter;