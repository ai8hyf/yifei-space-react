import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, Typography, Link } from '@mui/material';


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

import "../assets/css/footer.css"

export default function Footer() {

    const directoryLinks = [['Home', '/'], ['Full-Stack Portfolio', '/portfolio'], ['Research Highlights', '/research'], ['Original Music', '/music'], ['Social Influence', '/influence'], ['About Me', '/about']]


    return (
        <Box sx={{ width: '100%', py: 2 }} id='footer'>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item md={4} xs={6} sx={{ display: 'flex' }}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">
                                    Directory
                                </Typography>
                            </ListItem>

                            {directoryLinks.map((dl, index) => (
                                <ListItem key={index}>
                                    <Link
                                        color="inherit"
                                        underline="hover"
                                        variant="body2"
                                        href={dl[1]}
                                    >
                                        {dl[0]}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item md={4} xs={6} sx={{ display: 'flex' }}>
                        <List >

                            <ListItem>
                                <Typography variant="h5">
                                    Connect
                                </Typography>
                            </ListItem>

                            <ListItem disablePadding>
                                <Link sx={{ width: '100%' }} color="text.primary" underline='hover' href='https://www.instagram.com/hyfe1/' target={'_blank'}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InstagramIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Instagram" />
                                    </ListItemButton>
                                </Link>

                            </ListItem>
                            <ListItem disablePadding>
                                <Link sx={{ width: '100%' }} color="text.primary" underline='hover' href='https://space.bilibili.com/7725983' target={'_blank'}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LaunchIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Bilibili.com" />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <EmailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Email" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <Link sx={{ width: '100%' }} color="text.primary" underline='hover' href='https://www.linkedin.com/in/yifei-hu-683499113/' target={'_blank'}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LinkedInIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Linkedin" />
                                    </ListItemButton>
                                </Link>

                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item md={4} xs={12} sx={{ display: 'flex' }}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">
                                    YIFEI'S SPACE
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="overline">
                                    All Rights Reserved
                                </Typography>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
