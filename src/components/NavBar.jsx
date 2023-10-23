import { AppBar, Avatar, Badge, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const {favorite, setFavorite} = useContext(MyContext)
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                    <img src='/images/Hamburger-amico.png' alt="Icon" style={{width: '50px', height: '50px', display: { xs: 'none', md: 'flex' }, mr: 1}} />
                    </Box>
                <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} > Humber </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit" ><MenuIcon /></IconButton>
                    <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }} >
                
                        <MenuItem  onClick={handleCloseNavMenu}>
                            <Link to="/" style={{ textDecoration: 'none'}} ><Typography textAlign="center">Home</Typography></Link>
                        </MenuItem>
                    </Menu>
                </Box>
                {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                    <img src='/images/Hamburger-amico.png' alt="Icon" style={{width: '50px', height: '50px', display: { xs: 'none', md: 'flex' }, mr: 1}} />

                </Box>
                <Typography variant="h5" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700,
                    letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', }} > 
                    Humber
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    
                    <Link to="/" sx={{ textDecoration: 'none'}} ><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }} >Home </Button></Link>
                </Box>
                <Box sx={{flexGrow: 1}} />

                <Link to="/cart" style={{ textDecoration: 'none'}} ><Tooltip title="Favorite"><IconButton>  <Badge badgeContent={favorite.length !== null ? favorite.length : 0} color="success"> <FavoriteIcon color="action" sx={{ color: 'white'}} /> </Badge> </IconButton></Tooltip> </Link>
                
            </Toolbar>
        </Container>
        </AppBar>
    )
    }

export default NavBar