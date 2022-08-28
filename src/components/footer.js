import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, List, ListItem, Typography, Link } from '@mui/material';
import "../assets/css/footer.css"

export default function Footer() {

    const directoryLinks = [['Home', '/'], ['Portfolio', '/portfolio'], ['About Me', '/about'], ['Contact', '/contact']]

    return (
        <Box sx={{width:'100%', pb:2 }} id='footer'>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item md={4} xs={6} sx={{display:'flex', justifyContent:'center'}}>
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
                                        variant="overline"
                                        href={dl[1]}
                                    >
                                        {dl[0]}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item md={4} xs={6} sx={{display:'flex', justifyContent:'center'}}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">
                                    Portfolio
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link href='/'>UI / UX</Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/'>Research</Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/'>Original Music</Link>
                            </ListItem>
                            <ListItem>
                                <Link href='/'>Social Influencing</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={4} xs={12} sx={{display:'flex', justifyContent:'center'}}>
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
