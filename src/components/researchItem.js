import * as React from 'react';

import { Divider, Typography, Box, Link, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ResearchItem(props) {
	return (
		<Accordion defaultExpanded={props.isExpanded} elevation={0} sx={{background:'#f5f5f5'}}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography>
					<Typography variant="h6" component="span">
						{props.title} {'(' + props.year + ')'}
					</Typography>
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography variant='body2' color='text.secondary'>
					{props.desc}
				</Typography>

				{props.link.length > 2 &&
					<Box sx={{ mt: 1 }}>
						<Link variant="body2" href={props.link} underline='hover' target={'_blank'}>
							Learn more...
						</Link>
					</Box>
				}

				{props.details.map((detail) => (
					<Box>
						<Divider sx={{ my: 2 }}></Divider>
						<Typography variant='body2'>
							{detail.title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{detail.desc}
						</Typography>
					</Box>
				))}
			</AccordionDetails>
		</Accordion>

	);
}
