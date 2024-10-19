import React, { ReactNode } from 'react';
import { Grid, Divider as MuiDivider } from '@mui/material';
import { Grid2Props } from '@mui/material';

interface DividerProps extends Grid2Props {
	children?: ReactNode; // Optional children, can be any valid React node
}

const DividerWithText: React.FC<DividerProps> = ({ children, ...props }) => (
	<Grid container alignItems="center" spacing={3} {...props}>
		<Grid item xs>
			<MuiDivider color="white" />
		</Grid>
		<Grid item>{children}</Grid>
		<Grid item xs>
			<MuiDivider color="white" />
		</Grid>
	</Grid>
);

export default DividerWithText;
