import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Typography } from '@mui/material';
import StepContent from '@mui/material/StepContent';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListIcon from '@mui/icons-material/List';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { color } from '@mui/system';



export default function StepperWithLabel() {

	const steps = [
		{
			'label': '2019',
			'items': [
				'Uploaded 1st video',
				'Reached 10,000 followers'
			]
		},
		{
			'label': '2020',
			'items': [
				'Founded Godojo.cn',
				'Reached 70,000 followers'
			]
		},
		{
			'label': '2021',
			'items': [
				'Uploaded the last video',
				'Reached 120,000 followers'
			]
		},
		{
			'label': 'Now',
			'items': [
				'Pausing',
				'Reached 150,000 followers'
			]
		},
	];

	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	let isVertical = 'horizontal';
	let itemAlign = 'center';
	let itemMarginPadding = 0;
	let itemBoxBorder = 'none';

	if(!isDesktop){
		isVertical = 'vertical'
		itemAlign = 'left'
		itemMarginPadding = 2
		itemBoxBorder = '1px solid #bdbdbd';
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Stepper activeStep={steps.length - 1} orientation={isVertical} alternativeLabel={isDesktop}>
				{steps.map((s, idx) => (
					<Step expanded={true} key={s.label}>

						{idx != steps.length - 1 ? 
						<StepLabel >{s.label}</StepLabel> 
						: 
						<StepLabel error sx={{ color: 'red' }}>{s.label}</StepLabel>}

						<StepContent sx={{pl: itemMarginPadding, borderLeft:itemBoxBorder}}>
							{s.items.map((item, index) => (
								<Typography variant='body2' key={'step-item' + index} sx={{ textAlign: itemAlign, mt: 1}}>{item}</Typography>
							))}
						</StepContent>



					</Step>
				))}
			</Stepper>
		</Box>
	);
}
