import * as React from "react";

import { Container, Grid, Divider, Chip, Link } from '@mui/material';


import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ImageBgCard from "../components/imageBgCard";
import ImageTopCard from "../components/imageTopCard";

import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import SamplePerson from '../assets/img/sample-person-img-square.jpg'
import CoverPhoto from '../assets/img/cover-square.png'
import CatEditorCover from '../assets/img/cat-editor.png'
import Resume from '../assets/img/resume.jpg'
import Connect from '../assets/img/connect.jpg'
import Music from '../assets/img/music.jpg'
import Uiux from '../assets/img/uiux.jpg'
import Research from '../assets/img/research.jpg'
import Influencer from '../assets/img/influencer.jpg'

export default function Home() {
  return (
    <div>
      <NavBar showBreadcrumb={false} />
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}

          >
            <ImageBgCard
              coverPhoto={CoverPhoto}
              hasText={false}
              title={'Yifei Hu'}
              desc={'Your IP address has been recorded. <-- I am kidding. Am I kidding?'}
            />
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            sm={3}
            xs={6}
          >
            <ImageBgCard
              coverPhoto={CatEditorCover}
              hasText={true}
              desc={'Cat Generator - Create You Own Cat Now!'}
              isVertical={true}
            />
          </Grid>

          <Grid
            item
            lg={3}
            md={3}
            sm={3}
            xs={6}
          >
            <ImageBgCard
              coverPhoto={Resume}
              hasText={true}
              desc={'Resume - I am expensive but available :)'}
              isVertical={true}
            />
          </Grid>


        </Grid>

        <Divider sx={{ my: 4 }}>
          <Chip icon={<TipsAndUpdatesIcon />} label="My Last Name Sounds like [ Who ]" />
        </Divider>

        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={6} xs={12} >
            <ImageTopCard
              topImage={Uiux}
              title={"UI/UX"}
              desc={'Projects designed and implemented by Yifei. From websites to desktop apps.'}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12} >
            <Link href="/research">
              <ImageTopCard
                topImage={Research}
                title={"Research"}
                desc={'Papers published by Yifei and research projects that involved Yifei'}
              />
            </Link>

          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} >
            <ImageTopCard
              topImage={Influencer}
              title={"Social Influencing"}
              desc={'Fun Fact: Yifei has more than 150,000 subscribers online. He was once the most famous content creator in the Go Game community.'}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <ImageTopCard
              topImage={Music}
              title={"Original Music"}
              desc={'Most of them were from my music composition class. I have a minor in Music Theory & History'}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Link href="/about">
              <ImageTopCard
                topImage={Connect}
                title={"Contact Me"}
                desc={'We can talk.'}
              />
            </Link>

          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }}>
          <Chip label="That's it, my friend." />
        </Divider>

      </Container>
      <Footer />
    </div>
  );
}