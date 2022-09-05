import * as React from "react";

import { Container, Grid, Box } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import PortfolioCard from "../components/porfolioCard";

import "../assets/css/portfolio.css"

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import fullstack from "../assets/img/full-stack2.png"
import ccoHomeAfter from "../assets/img/portfolio/cco-home-after.jpg"
import catFridge1 from "../assets/img/portfolio/cat-fridge-1.png"
import ccoCalendar1 from "../assets/img/portfolio/cco-calendar-1.png"
import ccoAbout1 from "../assets/img/portfolio/cco-about-1.png"
import catEditor from "../assets/img/cat-editor.png"
import internal from "../assets/img/portfolio/internal.png"
import godojo1 from "../assets/img/portfolio/godojo1.png"
import cmsEditor from "../assets/img/portfolio/cms-editor.png"
import kxtx from "../assets/img/portfolio/kxtx.png"


export default function Portfolio() {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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

				<Grid onClick={handleClickOpen} container spacing={3} sx={{ mt: 3 }}>

					{projects.map((p, idx) => (
						<Grid key={idx} item lg={4} md={6} sm={12} xs={12}>
							<PortfolioCard
								coverPhoto={p.coverPhoto}
								isPublic={p.isPublic}
								year={p.year}
								title={p.title}
								showDetail={false}
							/>
						</Grid>
					))}

				</Grid>

			</Container>
			<Footer />

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					{"Want to know more about this project?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Yifei is working hard on creating the detialed description pages for these projects. These pages will be ready shortly.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Gotcha!</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

const projects = [
	{
		"coverPhoto": ccoAbout1,
		"isPublic": true,
		"year": "2022",
		"title": "Purdue CCO About Page Redesign",
	},
	{
		"coverPhoto": ccoCalendar1,
		"isPublic": true,
		"year": "2022",
		"title": "Purdue CCO Calendar Redesign",
	},
	{
		"coverPhoto": catFridge1,
		"isPublic": true,
		"year": "2022",
		"title": "Cat Fridge - Cat-themed Social Media",
	},
	{
		"coverPhoto": ccoHomeAfter,
		"isPublic": true,
		"year": "2022",
		"title": "Purdue CCO Homepage Redesign",
	},
	{
		"coverPhoto": cmsEditor,
		"isPublic": true,
		"year": "2022",
		"title": "CMS Editor with Live Preview",
	},
	{
		"coverPhoto": catEditor,
		"isPublic": true,
		"year": "2022",
		"title": "Canvas-based Cat Generator",
	},
	{
		"coverPhoto": godojo1,
		"isPublic": true,
		"year": "2020",
		"title": "Godojo.cn - Online Go Game Platform",
	},
	{
		"coverPhoto": kxtx,
		"isPublic": true,
		"year": "2018",
		"title": "KXTX Logistics Company Website",
	},
	{
		"coverPhoto": internal,
		"isPublic": false,
		"year": "2021",
		"title": "Chat Analysis Triage Tool (CATT)",
	},
	{
		"coverPhoto": internal,
		"isPublic": false,
		"year": "2021",
		"title": "ACHRE - Image Data Labeling System",
	},
	{
		"coverPhoto": internal,
		"isPublic": false,
		"year": "2018",
		"title": "Joke Engine - Joke Data Labeling System",
	},
]