import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import '../assets/css/imageTopCard.css'

export default function ImageTopCard(props) {

  return (
    <Card variant='outlined' className='img-top-card'>

        <Box>
            
        </Box>

        <Box className='img-with-text'>
            <CardMedia
                component="img"
                height="240"
                image={props.topImage}
                alt="green iguana"
            />
            <Box className='card-text-overlay'>
                <Typography gutterBottom variant="h4" component="div">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1">
                    {props.desc}
                </Typography>
            </Box>
        </Box>

      

      
    </Card>
  );
}
