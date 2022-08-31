import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Icon, List, ListItem } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/img/name-logo.png';




const NavBar = () => {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  let navHeight = 80

  if(!isDesktop){
    navHeight = 50
  }

  const pages = ['Home', 'Portfolio', 'About Me', 'Contact'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color='inherit' elevation={0} sx={{my:3}}>
      <Container maxWidth="lg" >
        <Toolbar disableGutters sx={{ height: navHeight }}>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, mx: 1, height: 40 }}
          >
          </Box>

          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ display: { xs: 'flex', md: 'none' }, mx: 1, height: 30 }}
          >
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              id="menu-appbar"
              anchor='right'
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <List>
                {pages.map((page) => (
                  <ListItem key={page} onClick={handleCloseNavMenu}>
                    <Link to="/" style={{textDecoration:'none'}}>
                      <Button
                        sx={{ my: 1, mx:2, color: 'black', fontSize: 16 }}
                      >
                        {page}
                      </Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Link to="/" style={{textDecoration:'none'}}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, display: 'block', color: 'black', fontSize: 16 }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
