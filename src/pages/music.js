import * as React from "react";

import { Container, Grid, Box, Typography, Link } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import ReactSoundCloud from 'react-soundcloud-embedded'

import MusicCover from '../assets/img/music-cover.png'

import "../assets/css/soundcloud.css"

import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import fullstack from "../assets/img/full-stack.png"


export default function Music() {
    return (
        <div>
            <NavBar showBreadcrumb={true} />



            <Container maxWidth='lg' sx={{ mb: 4, mt: 4 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb:6 }}>
                    <img src={MusicCover} alt="" style={{ maxWidth: 'calc(100% - 32px)', maxHeight: '400px' }} />
                </Box>

                <Grid container spacing={3}>
                    <Grid item lg={5} md={6} sm={12} xs={12}>
                    <Box sx={{display:'flex', width:'100%', margin:'0 auto'}}>
                        <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1492766272&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    </Box>
                    </Grid>

                    <Grid item lg={7} md={6} sm={12}>
                    <Box sx={{background:'#f5f5f5', p
				:4, mb:4}}>
						<Typography variant="h4" sx={{mb:1, textAlign:'center'}}>
							This is embarrassing
						</Typography>
						
						<Typography variant="subtitle2" sx={{mt:3}}>
							{'When I was an undergraduate student, I took several music courses for my music minor (yes, I have a minor in music). In my music composition class, I composed a hanful of terrible pieces which I shared on this page.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Sad Piano - My favorite piece so far. Piano and strings are always my top pick instrument combination. This version was played by some software because I could not find real people to perform and record.'}
						</Typography>
						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Dance with Me - It has a overall happy melody which sometimes also seems a bit sad due to the transition between major and minor.'}
						</Typography>

						<Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'All about Motif - Motif in music is defined as a brief melodic or rhythmic formula out of which longer passages are developed. And this piece is all about motif. Do you agree?'}
						</Typography>

                        <Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Wake Up - I tried to echo people\'s morning starting from the clock ringing. Then we might decide to sleep for another 5 minutes and started another sweet dream... until the next clock rang again.'}
						</Typography>

                        <Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Wake Up Version 2.0 - Based on the original Wake Up, I extended the main melody and made it more epic (???)'}
						</Typography>

                        <Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Tipsy - My final project in music composition class! My classmates and professor helped performed and recorded this piece. I really appreciated that!'}
						</Typography>

                        <Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'String Quatet - An experimental work to explore the world of polyphony.'}
						</Typography>

                        <Typography variant="body2" sx={{mt:3, fontSize:'1rem'}}>
							{'Handtonic - Total failure. Disaster. EWW!'}
						</Typography>
					</Box>
                    </Grid>
                </Grid>
                
                




            </Container>
            <Footer />
        </div>
    );
}
