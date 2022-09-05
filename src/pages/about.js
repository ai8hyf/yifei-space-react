import * as React from "react";

import { Container, Grid, Box, Typography } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import CardWithLinks from "../components/cardWithLinks";


export default function About() {
	return (
		<div>
			<NavBar showBreadcrumb={true}/>

			<Container maxWidth='lg' sx={{mb:4}}>
				<Grid container spacing={4}>
					<Grid item md={4} sm={12}>
						<CardWithLinks />
					</Grid>

					<Grid item md={8} sm={12}>
					<Box sx={{background:'#f5f5f5', pt:2, pb:4, px:4}}>
						<Typography variant="h2" sx={{mb:1, textAlign:'center'}}>
							About Me
						</Typography>
						<Typography variant="subtitle1" sx={{mb:1, textAlign:'center'}}>Last Updated: 2022</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'I must admit that I am such an awful writer when writing in English, and I realized I didn\'t even have a proper "About Me" piece in any languages. So, I decided to write some paragraphs while I was coding (is "code" even a proper verb?) this website.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'A few years before this century began, I was born in a small city in northern China. Due to the “'}<a href='https://en.wikipedia.org/wiki/One-child_policy'>One-child policy</a>{'” in my populous motherland, I have no siblings. Of course, the positive part is that I do not need to share my parents’ love with others. Growing up alone in a family of engineers helped me appreciate the beauty of solitary moments.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Nonetheless, I\'ve never been any close to the characteristics of a “nerd”, “geek” or “freak”. People usually find me being talkative and good with humor. I know how many ex-boyfriends Taylor Swift had. Talk like Master Yoda I can. I am fully capable of being social yet many times I choose not to mingle with people lacking the sense of decency. That is probably why I am still often alone and tend to keep the status quo.'}
						</Typography>

						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Before I entered high school, my parents promised to buy me a new smartphone and allowed me to choose whichever one I liked. My journey of being a researcher probably started from there. I spent tons of time doing my own thorough and practical research of how a smartphone worked and what the purpose of each component inside a smartphone was. The research I did and have been doing till now all have some very specific and tangible objectives. I do research for problem-solving and nothing else, which partially explains why I have so few '}<a href='/research'>academic publications</a>{' as a Phd student. (Other reasons being that I am lazy and bad at writing)'}
						</Typography>

						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Working on theoretical issues and being away from real-world scenarios made me feel unsafe. The feeling started to haunt me shortly after I became a graduate student and tried to dig into some “real” research topics. I have nothing but highest respect for those who devoted themselves to the cutting-edge theoretical research domains and left a priceless legacy to the whole world. We are simply different types of people (and there is no right or wrong).  When the feeling becomes overwhelming, I simply flee to my own '}<a href='/'>Eden</a>{' and start to create. And here we are.'}
						</Typography>

						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'I must admit that I am in such an awful situation when writing the “about me” section, because I realize I don\'t even know who I am. So, I decide (past tense is better?) to end the post with this paragraph while I was finishing up this page.'}
						</Typography>
					</Box>
						
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}