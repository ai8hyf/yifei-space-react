import * as React from "react";

import { Container, Grid, Box, Typography, Link } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ImageTopCard from "../components/imageTopCard";
import StepperWithLabel from "../components/stepper";


import "../assets/css/influencer.css"

import AsAn from "../assets/img/as-an.png"
import Fname from "../assets/img/fname-1.png"
import InfluencerColor from "../assets/img/influencer-font-1.png"

import bili from "../assets/img/bilibili_logo.png"
import yt from "../assets/img/youtube_logo.png"
import tt from "../assets/img/toutiao_logo.png"
import tc from "../assets/img/tencent_logo.png"

export default function Influence() {
	return (
		<div>
			<NavBar showBreadcrumb={true} />

			<Box className="font-box">
				<img src={Fname} alt="" />
				<img src={AsAn} alt="" />
				<img src={InfluencerColor} alt="" />
			</Box>

			<Container maxWidth='lg' sx={{ mb: 4, mt: 4 }}>

				<Box sx={{ mb: 6 }}>
					<StepperWithLabel />
				</Box>

				<Grid container>
					<Grid item lg={6} md={6} sm={12} xs={12}>
					<Box sx={{background:'#f5f5f5', p
				:4}}>
						<Typography variant="h4" sx={{mb:1, textAlign:'center'}}>
							How should I start...
						</Typography>
						<Typography variant="subtitle1" sx={{mb:1, textAlign:'center'}}>This part of me is dead</Typography>
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
					</Box>
					</Grid>

					<Grid item lg={6} md={6} sm={12} xs={12}>
						<Link href="/research">
							<Box className="big-banner">
								<img src={bili} alt="" />
							</Box>
						</Link>

						<Link href="/research">
							<Box className="big-banner">
								<img src={yt} alt="" />
							</Box>
						</Link>

						<Link href="/research">
							<Box className="big-banner">
								<img src={tt} alt="" />
							</Box>
						</Link>
						<Link href="/research">
							<Box className="big-banner">
								<img src={tc} alt="" />
							</Box>
						</Link>
					</Grid>
				</Grid>



			</Container>
			<Footer />
		</div>
	);
}