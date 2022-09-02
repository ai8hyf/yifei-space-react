import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box, Typography } from '@mui/material';

export default function Breadcrumb() {

	const levels = window.location.pathname.substring(1).split('/')

	const levelName = {
		'research': 'Research',
		'portfolio': 'Portfolio',
		'music': 'Original Music',
		'influence': 'Social Influencing',
		'ui-ux': 'UI/UX/Full-Stack',
		'about': 'About Me'
	}

	const levelLink = [['/', 'Home']]
	let currentLevel = '/'

	for (let i=0; i<levels.length-1;i++){
		currentLevel += levels[i] + '/'
		levelLink.push([currentLevel, levelName[levels[i]]])
	}

	return (
		<Box sx={{ml:1, mb:1}}>
			<Breadcrumbs aria-label="breadcrumb">
				{levelLink.map((l) =>(
					<Link underline="hover" color="inherit" href={l[0]}>
						{l[1]}
					</Link>
				))}

				<Typography color="text.primary">{levelName[levels[levels.length-1]]}</Typography>
			</Breadcrumbs>
		</Box>

	);
}
