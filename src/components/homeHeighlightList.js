import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import '../assets/css/homeHeighlightList.css'

export default function HomeHeighlightList() {

	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
	let areaHeight = '400px'
  
	if(!isDesktop){
		areaHeight = 'auto'
	}

	return (
		<Box sx={{ width: '100%'}}>
		<Stack
			className='big-items' 
			direction="column"
			justifyContent={isDesktop? 'space-evenly': 'flex-start'}
			alignItems={isDesktop? 'center': 'center'}
			sx={{height:areaHeight}}
		>
			<div className='one-title'>
				Title One Four Words
			</div>

			<div className='one-title'>
				Position Something Shorter
			</div>

			<div className='one-title'>
				Position Something Shorter
			</div>

		</Stack>
		</Box>
	);
}
