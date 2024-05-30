'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Profile from './Profile';
import AddIcon from '@mui/icons-material/Add';

const pages = ['Dashboard', 'Class', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar({ toggleDrawer }: any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
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
      <Container maxWidth="xl" className='bg-white'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon className='text-black' />
            </IconButton>
          </Box>
          <Box
            sx={{
              backgroundColor: 'white',
              p: 2,
              borderRadius: 1,
              display: 'flex',
              width: { xs: '100%', md: '100%' },
            }}>
            <Box
              sx={{
                display: 'flex',
                mx: { xs: 'auto', md: 1 },
              }}>
              <img className='h-10' src="../logo/ClassSync-logo-transparent-cropped-without-slogan.png" alt="IMAGE" />
            </Box>
          </Box>
          <AddIcon className='text-black mr-4 rounded-full border-rose-400 border-2' />
          <Profile settings={settings} handleOpenUserMenu={handleOpenUserMenu} handleCloseUserMenu={handleCloseUserMenu} anchorElUser={anchorElUser} />

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;