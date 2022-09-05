import * as React from "react";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Grid } from '@mui/material';


import NavBar from "../components/navbar";
import Footer from "../components/footer";
import HomeGrid from "../components/homeGrid";

import CoverPhoto from '../assets/img/cover-square.png'
import pianoImg from '../assets/img/piano.jpg'
import whiteboard from '../assets/img/script.jpg'
import socialMedia from '../assets/img/social-media.jpg'
import blackboard from '../assets/img/blackboard.jpg'



export default function Home() {

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isMid = useMediaQuery(theme.breakpoints.down('lg'));

    let containerHeight = 'calc(100vh - 128px)'
    let gridHeight = 'auto'

    if(isMid){
      containerHeight = 'calc(100vh - 128px)'
      gridHeight = '50%'
    }

    if(isMobile){
      containerHeight = 'calc(100vh - 98px)'
      gridHeight = '33.33%'
    }

    const grids = [
      {'bg': whiteboard, 'title':'Full-Stack Portfolio', 'link': '/portfolio'},
      {'bg': blackboard, 'title':'Research Highlights', 'link': '/research'},
      {'bg': socialMedia, 'title':'Social Influence', 'link': '/influence'},
      {'bg': pianoImg, 'title':'Original Music', 'link': '/music'},
    ]

  return (
    <div>
      <NavBar showBreadcrumb={false} />

      <Grid container columns={{ xs: 2, sm: 2, md: 4, lg: 5 }} sx={{height:containerHeight}}>
          <Grid item xs={2} sm={2} md={4} lg={1} sx={{height:gridHeight}}>
            <HomeGrid bg={CoverPhoto} title={'About Me'} link={'/about'}/>
          </Grid>

          {grids.map((g)=>(
            <Grid item xs={1} sm={1} md={1} lg={1} sx={{height:gridHeight}} key={g.link}>
              <HomeGrid bg={g.bg} title={g.title} link={g.link}/>
            </Grid>
          ))}
        </Grid>

      <Footer />
    </div>
  );
}