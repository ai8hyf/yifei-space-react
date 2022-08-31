import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import '../assets/css/imageBgCard.css'

import SamplePerson from '../assets/img/sample-person-img-square.jpg'
import CoverPhoto from '../assets/img/cover-square.png'


export default function ImageBgCard(props) {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  let cardMaxHeight = '400px'
  let cardHeight = '400px'
  let cardPadding = '24px';
  let coverPosition = '50% 40%';

  if (!isDesktop) {
    cardMaxHeight = '250px'
    cardPadding = '16px'
    coverPosition = '50% 30%'
  }

  if (props.isVertical) {
    cardHeight = cardMaxHeight
  }

  return (
    <Card variant='elevation' className='img-bg-card' sx={{ maxHeight: cardMaxHeight }}>
      <Box>
        <img className='cover-img' src={props.coverPhoto} alt="Cover Image" style={{ maxHeight: cardMaxHeight, objectPosition: coverPosition, height: cardHeight }} />
      </Box>

      {props.hasText &&
        <Box className='card-text-overlay' sx={{ padding: cardPadding }}>

          {props.title != 'null' &&
            <Typography variant={isDesktop ? 'h2' : 'h4'} sx={{ textTransform: 'uppercase', fontFamily: 'serif', letterSpacing: '0.2rem' }}>
              {props.title}
            </Typography>
          }

          {props.title != 'null' &&
            <Typography variant='subtitle2'>
              {props.desc}
            </Typography>
          }
        </Box>
      }
    </Card>
  );
}
