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
				:4, mb:4}}>
						<Typography variant="h4" sx={{mb:1, textAlign:'center'}}>
							How should I start...
						</Typography>
						
						<Typography variant="subtitle2" sx={{mt:3}}>
							{'I used to have a very significant influence on a certain domain. Others published '}<a href="https://new.qq.com/rain/a/20201230a05l8g00">news articles</a>{' or '}<a href="https://k.sina.com.cn/article_6618707265_18a817541019014o8x.html#/">blog posts</a>{' simply to discuss what I said. One day, I decided to disappear, so I disappeared for good.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Once upon a time, I was the most popular influencer in the '}<a href="https://en.wikipedia.org/wiki/Go_(game)">Go Game</a>{' community in China. Go is a traditional Chinese board game. As you might recall, the Chess A.I. "Deep Blue" defeated the human Champion Kasparov in 1997. However, Go is more complex than Chess. Only until 2016, Deepmind\' A.I. '}<a href="https://www.deepmind.com/research/highlighted-research/alphago">"AlphaGo"</a>{' finally achieved what was expected.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'I know exactly why I became successful in this field. I was only the top 1% Go player (Thousands are better than me), but in the meantime I was also the top 1% content creator, top 5% video editor, and with top 1% taste of humor and sensitivity. All things combined, I simply became the best overall.'}
						</Typography>

						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Unfortunately, social influence often comes with a cost. People talk, and words hurt. One sunny day in the spring of 2021, right after I received my Master degree and started my Phd journey, I felt extremely exhausted. I did not want to think about Go or open the video editing software. Direct messages came from all platforms. People tried to connect with me for various good or bad reasons. I don\'t think most of you could or would ever sympathize with me, which after all might be a good thing for you.'}
						</Typography>
					</Box>
					</Grid>

					<Grid item lg={6} md={6} sm={12} xs={12}>
						<Box sx={{height:'100%', display:'flex', justifyContent:'space-evenly', flexDirection:'column', }}>
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
						</Box>
					</Grid>
				</Grid>



			</Container>
			<Footer />
		</div>
	);
}