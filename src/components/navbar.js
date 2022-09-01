import * as React from 'react';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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

import Breadcrumb from './breadcrumb';


function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 2
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


const NavBar = (props) => {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  let navHeight = 80

  if (!isDesktop) {
    navHeight = 50
  }

  const pages = [
    ['UI/UX/DEV', '/portfolio'],
    ['Research', '/research'],
    ['Music', '/music'],
    ['Influence', '/influencer'],
    ['About', '/about']
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>

      
      <AppBar position="sticky" color='inherit' elevation={0} sx={{ my: 3 }}>
        <Container maxWidth="lg" >
          <Toolbar disableGutters sx={{ height: navHeight }}>
            <Link to='/'>
              <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{ display: { xs: 'none', md: 'flex' }, mx: 1, height: 40 }}
              />
            </Link>
            
            <Link to='/'>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{ display: { xs: 'flex', md: 'none' }, mx: 1, height: 30 }}
            >
            </Box>
            </Link>

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
                      <Link to={page[1]} style={{ textDecoration: 'none' }}>
                        <Button
                          sx={{ my: 1, mx: 2, color: 'black', fontSize: 16 }}
                        >
                          {page[0]}
                        </Button>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {pages.map((page) => (
                <Link to={page[1]} style={{ textDecoration: 'none' }}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 1, display: 'block', color: 'black', fontSize: 16 }}
                  >
                    {page[0]}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>

          {props.showBreadcrumb &&
            <Breadcrumb />
          }

        </Container>
      </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
};
export default NavBar;
