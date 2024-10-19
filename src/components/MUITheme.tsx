'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#54f0bc',
		},
		info: {
			main: '#fff',
		},
		secondary: {
			main: '#E33E7F',
		},
	},
});

const MUITheme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUITheme;
