'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo2.png';

type NavOption = ({ label: string; href: string; comingSoon?: undefined } | { label: string; href: string; comingSoon: boolean })[];

function ResponsiveAppBar({ navOptions }: { navOptions: NavOption }) {
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" color="transparent">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<Link href="/">
							<Image height={100} width={100} src={logo} alt="logo" />
						</Link>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<MenuIcon htmlColor="white" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}>
							{navOptions.map(
								(setting) =>
									!setting.comingSoon && (
										<MenuItem key={setting.label} onClick={handleCloseUserMenu}>
											<Link href={setting.href}>
												<Typography sx={{ textAlign: 'center' }}>{setting.label}</Typography>
											</Link>
										</MenuItem>
									)
							)}
							<MenuItem onClick={handleCloseUserMenu}>
								<a href="https://drive.google.com/drive/folders/1-KWd2Ivjdrx41wnZvkI6bAI1C_x-qgus" target="_blank">
									<Typography sx={{ textAlign: 'center' }}>Whitepaper</Typography>
								</a>
							</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
export default ResponsiveAppBar;
