import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, List, ListItem, Typography, Link } from '@mui/material';
import "../assets/css/footer.css"

export default function Footer() {

    const directoryLinks = [['Home', '/'], ['Portfolio', '/portfolio'], ['About Me', '/about'], ['Contact', '/contact']]
    const portfolioLinks = [['UI/UX', '/'], ['Research', '/portfolio'], ['Original Music', '/about'], ['Social Influencing', '/contact']]


    return (
        <Box sx={{width:'100%', pb:2 }} id='footer'>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item md={4} xs={6} sx={{display:'flex'}}>
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
                    <Grid item md={4} xs={6} sx={{display:'flex'}}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">
                                    Portfolio
                                </Typography>
                            </ListItem>
                            {portfolioLinks.map((pl, index) => (
                                <ListItem key={index}>
                                    <Link 
                                        color="inherit" 
                                        underline="hover"
                                        variant="body2"
                                        href={pl[1]}
                                    >
                                        {pl[0]}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item md={4} xs={12} sx={{display:'flex'}}>
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
