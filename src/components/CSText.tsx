'use client';

import React, { ReactNode, useState } from 'react';

const HoverText = ({ children, className }: { children: ReactNode; className: string }) => {
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
		<p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ cursor: 'pointer', fontSize: '18px' }} className={className}>
			{text}
		</p>
	);
};

export default HoverText;
