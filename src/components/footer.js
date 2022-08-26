import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Divider, List, ListItem, Typography } from '@mui/material';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Box sx={{position: 'absolute', bottom: 0, width:'100%' }}>
            <Container maxWidth='xl'>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <List>
                            <ListItem>
                                <Typography variant="h5">
                                    Portfolio
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Link to='/'>UI / UX</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/'>Research</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/'>Original Music</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/'>Social Influencing</Link>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4}>
                        {123}
                    </Grid>
                    <Grid item xs={4}>
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
