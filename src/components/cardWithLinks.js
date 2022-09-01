import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Divider, Link } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';

import SlimCover from '../assets/img/slim-cover.png'

export default function CardWithLinks() {

    return (
        <Card sx={{ borderRadius: '16px !important' }}>
            <CardMedia
                component="img"
                image={SlimCover}
                alt="green iguana"
            />
            <List >
                    <ListItem disablePadding>
                        <Link sx={{width:'100%'}} color="text.primary" underline='hover' href='https://www.instagram.com/hyfe1/' target={'_blank'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InstagramIcon />
                                </ListItemIcon>
                                <ListItemText primary="Instagram" />
                            </ListItemButton>
                        </Link>

                    </ListItem>
                    <ListItem disablePadding>
                        <Link sx={{width:'100%'}} color="text.primary" underline='hover' href='https://space.bilibili.com/7725983' target={'_blank'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LaunchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Bilibili.com" />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                </List>
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Email" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link sx={{width:'100%'}} color="text.primary" underline='hover' href='https://www.linkedin.com/in/yifei-hu-683499113/' target={'_blank'}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText primary="Linkedin" />
                            </ListItemButton>
                        </Link>

                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Resume" />
                        </ListItemButton>
                    </ListItem>
                </List>
        </Card>
    );
}
