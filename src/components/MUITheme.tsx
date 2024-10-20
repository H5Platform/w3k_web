'use client';
import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

const theme = createTheme({
	palette: {
		primary: {
			main: '#f2da74',
		},
		info: {
			main: '#fff',
		},
		secondary: {
			main: '#E33E7F',
		},
	},

	components: {
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: '#fff',
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'--TextField-brandBorderColor': '#fff',
					'--TextField-brandBorderHoverColor': '#fff',
					'--TextField-brandBorderFocusedColor': '#fff',
					'& label.Mui-focused': {
						color: 'var(--primary-color)',
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: '#fff',
					color: '#fff',
				},
				root: {
					color: '#fff',
					[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--primary-color)',
					},
					[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: 'var(--primary-color)',
					},
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					'&::before, &::after': {
						borderBottom: '2px solid var(--TextField-brandBorderColor)',
					},
					'&:hover:not(.Mui-disabled, .Mui-error):before': {
						borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
					},
					'&.Mui-focused:after': {
						borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
					},
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				root: {
					'&::before': {
						borderBottom: '2px solid var(--TextField-brandBorderColor)',
					},
					'&:hover:not(.Mui-disabled, .Mui-error):before': {
						borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
					},
					'&.Mui-focused:after': {
						borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
					},
				},
			},
		},
	},
});

const MUITheme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUITheme;
