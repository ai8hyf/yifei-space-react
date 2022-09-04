import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link, Box, Typography, Icon } from '@mui/material';

import ReadMoreIcon from '@mui/icons-material/ReadMore';

import '../assets/css/homeGrid.css'

export default function HomeGrid(props) {

    const theme = useTheme();
    const isMid = useMediaQuery(theme.breakpoints.down('xl'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    let titleVariant = 'h2'

    const lines = props.title.split(' ')

    if(isMid){
        titleVariant = 'h3'
    }

    if(isMobile){
        titleVariant = 'h4'
    }

    return (
        <Box sx={{height:'100%', p:0, m:0, position:'relative'}}>
            <img className='home-grid-img' src={props.bg} alt={props.title} />
            <Link href={props.link} className='text-over-lay'>
                {lines.map((line, idx)=>(
                    <Typography key={idx} variant={titleVariant}>
                        {line}
                    </Typography>
                )) }
            </Link>
        </Box>
    );
}
