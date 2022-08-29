import * as React from "react";

import { Container, Grid, Divider, List, ListItem, Typography, Link } from '@mui/material';

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import ImageBgCard from "../components/imageBgCard";
import HomeHeighlightList from "../components/homeHeighlightList";

export default function Home() {
  return (
    <div>
      {/* <NavBar/> */}
      <Container maxWidth='lg' sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}

          >
            <ImageBgCard
              hasText={true}
              title={'First Last'}
              desc={'some description text'}
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
              hasText={true}
              desc={'Resume - I am expensive but available :)'}
              isVertical={true}
            />
          </Grid>


        </Grid>

        <Grid container>
          <Grid item lg={3} >

          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}