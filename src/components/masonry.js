import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Music from '../assets/img/music-font.png'
import Uiux from '../assets/img/uiux-font.png'
import Research from '../assets/img/research-font.png'
import Influencer from '../assets/img/social-influence-font.png'

export default function MasonryImageList(props) {

  const itemData = [
    {
      img: Uiux,
      title: 'UI/UX/Dev Portfolio',
    },
    {
      img: Research,
      title: 'Academic Research',
    },
    {
      img: Influencer,
      title: 'Social Influencing',
    },
    {
      img: Music,
      title: 'Original Music',
    },
  ]

  return (
    <Box>
      <ImageList variant="masonry" cols={1} gap={30}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}