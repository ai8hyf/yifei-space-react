import * as React from "react";

import { Container, Grid, Box, Typography, Link } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import "../assets/css/portfolio.css"

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import fullstack from "../assets/img/full-stack.png"


export default function Portfolio() {
	return (
		<div>
			<NavBar showBreadcrumb={true} />



			<Container maxWidth='lg' sx={{ mb: 4, mt: 4 }}>
				<Grid container spacing={3}>
					<Grid item lg={7} sm={12}>
						<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<img src={fullstack} alt="" style={{ maxWidth: 'calc(100% - 32px)', maxHeight: '400px' }} />
						</Box>
					</Grid>
					<Grid item lg={5} sm={12}>
						<Box className="chip-box">
							<Chip label="Planning" />
							<Chip label="Analysis" />
							<Chip label="Graphical User Interface Design" color="secondary" />
							<Chip label="User Experience Design" color="secondary" />
							<Chip label="System Design" />
							<Chip label="Fast Prototyping" />
							<Chip label="Software Development" />
							<Chip label="Testing" />
							<Chip label="Deployment" />
							<Chip label="Continuous Improvement" color="warning" />
							<Chip label="Six-Sigma Black Belt" color="warning" />
							<Chip label="Python" color="primary" />
							<Chip label="C# (ASP.NET)" color="primary" />
							<Chip label="Java" color="primary" />
							<Chip label="Javascript" color="primary" />
							<Chip label="HTML" color="primary" />
							<Chip label="CSS" color="primary" />
							<Chip label="SQL" color="primary" />
							<Chip label="Being Nice" color="success" icon={<SentimentVerySatisfiedIcon />} />
							<Chip label="..." variant="outlined" />
						</Box>
					</Grid>
				</Grid>





			</Container>
			<Footer />
		</div>
	);
}