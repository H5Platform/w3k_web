'use client';

import { Button } from '@mui/material';
import React, { ReactNode, useState } from 'react';

const CSButton = ({ children, className }: { children: ReactNode; className: string }) => {
	// State to hold the text content
	const [text, setText] = useState(children);

	// Handlers to change text on hover
	const handleMouseEnter = () => {
		setText('Coming Soon');
	};

	const handleMouseLeave = () => {
		setText(children);
	};

	return (
		<Button variant="outlined" color={text == 'Coming Soon' ? 'primary' : 'info'} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={className}>
			{text}
		</Button>
	);
};

export default CSButton;
