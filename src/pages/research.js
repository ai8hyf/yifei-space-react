import * as React from "react";

import { Container, Grid, Divider, Box, Typography } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ImageTopCard from "../components/imageTopCard";
import ResearchItem from "../components/researchItem";

import ResearchCover from '../assets/img/research-font.png'

export default function Research() {
	return (
		<div>
			<NavBar showBreadcrumb={true}/>

			<Container maxWidth='lg'>

				<Grid container spacing={3}>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Box sx={{display:'flex', justifyContent:'center'}}>
							<img style={{maxWidth:'100%'}} src={ResearchCover}/>
						</Box>
						<Box sx={{display:'flex', justifyContent:'center', opacity:'.5'}}>
							<img style={{maxWidth:'100%'}} src={ResearchCover}/>
						</Box>
						<Box sx={{display:'flex', justifyContent:'center', opacity:'.15'}}>
							<img style={{maxWidth:'100%'}} src={ResearchCover}/>
						</Box>
						<Typography variant='subtitle1' sx={{p:1, textAlign:'center'}}>
							 {'Most of the research projects focused on Natural Language Processing (NLP)'}
						</Typography>
					</Grid>

					<Grid item lg={8} md={8} sm={12} xs={12} sx={{ mb: 4 }}>
						{researchItems.map((ri, index) => (
							<ResearchItem
								isExpanded={index < 4}
								title={ri.title}
								link={ri.link}
								year={ri.year}
								desc={ri.desc}
								details={ri.details}
							/>
						))}
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

const researchItems = [
	{
		'title': 'Computational Humor',
		'year': '2018',
		'link': '',
		'desc': 'The goal of the project is to be able to detect (and be able to explain) when a component of a text contains humor, when an utterance contains humor potential that can be highlighted with a computer-generated punchline, and to understand humor preferences of a particular individual based on his/her interaction with a computational system, and respond appropriately to a user.',
		'details': [
			{
				'title': 'Output: Joke Engine',
				'desc': 'An internal research tool used for data collection and labeling.',
				'link': '',
			},
			{
				'title': 'Role: Full-Stack Engineer',
				'desc': 'The tool was built in a frontend-backend structure. The backend APIs were created with PHP and Oracle SQL. The GUI was designed by Yifei and implemented using HTML, CSS and Javascript.',
				'link': '',
			},
		]

	},

	{
		'title': 'Chat Analysis Triage Tool',
		'year': '2019',
		'link': 'https://ojjdp.ojp.gov/funding/awards/15pjdp-21-gk-03269-mecp',
		'desc': 'The overall goal of this proposal is to assist law enforcement investigating online enticement and live-stream child sexual abuse cases. This will be achieved by augmenting and enhancing the language-based and biometric capabilities of the Chat Analysis Triage Tool (CATT) for real-time data.',
		'details': [
			{
				'title': 'Output: The CATT Application',
				'desc': 'An application using cutting-edge Natural Language Processing technology to identify and classify risky online conversations between minors and online sexual predators.',
				'link': '',
			},
			{
				'title': 'Role: Researcher, Full-Stack Engineer',
				'desc': 'The application was built in a frontend-backend structure. The GUI was designed by Yifei and implemented using HTML, CSS and Javascript, and packaged using Electron. The backend APIs and Deep Learning models were developed, trained and implemented by Yifei using Python.',
				'link': '',
			},
		]
	},

	{
		'title': 'Misspelling Correction with Pre-trained Contextual Language Model',
		'year': '2020',
		'link': 'https://ieeexplore.ieee.org/abstract/document/9450253',
		'desc': 'Fixing spelling errors with BERT and Edit Distance algorithm.',
		'details': [
			{
				'title': 'Output: Academic Publication',
				'desc': 'Hu, Y., Jing, X., Ko, Y., & Rayz, J. T. (2020, September). Misspelling correction with pre-trained contextual language model. In 2020 IEEE 19th International Conference on Cognitive Informatics & Cognitive Computing (ICCI* CC) (pp. 144-149). IEEE.'
			},
			{
				'title': 'Role: First Author',
				'desc': 'Collaborated with  Xiaonan Jing, Youlim Ko, and Julia Rayz'
			}
		]
	},

	{
		'title': 'A study of Media Polarization with Stylometry Methods',
		'year': '2021',
		'link': 'https://journals.flvc.org/FLAIRS/article/view/128477',
		'desc': 'This research investigated the US media polarization with stylometry approaches, creating classification models to identify the political leanings of news articles based on their writing style.',
		'details': [
			{
				'title': 'Output: Academic Publication',
				'desc': 'Hu, Y., & Rayz, J. (2021, April). A Study of Media Polarization with Stylometry Methods. In The International FLAIRS Conference Proceedings (Vol. 34).'
			},
			{
				'title': 'Role: First Author',
				'desc': 'Collaborated with Julia Rayz'
			}
		]
	},
]