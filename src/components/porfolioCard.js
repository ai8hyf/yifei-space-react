import * as React from 'react';


import Chip from '@mui/material/Chip';

import '../assets/css/porfolioCard.css'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function PortfolioCard(props) {

  let visibility = <Chip size='small' color='success' icon={<VisibilityIcon />} label="Public" />

  if(!props.isPublic){
    visibility = <Chip size='small' color='error' icon={<VisibilityOffIcon />} label="Internal" />
  }
  
  return (
    <div className='porfolio-bg-card'>
        <div className='portfolio-cover-container'>
            <img className='porfolio-cover-img' src={props.coverPhoto} alt="Cover Image"/>
        </div>

        <span className='year-label'>{props.year}</span>

        <div className='portolio-label-area'>
            <div>{props.title}</div>
            <div className='badge'>
                {visibility}
            </div>
        </div>
    </div>
  );
}
