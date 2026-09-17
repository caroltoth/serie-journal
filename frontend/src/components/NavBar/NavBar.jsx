import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';

const NavBar = () => {
  const location = useLocation();

  const getButtonProps = (path) => ({
    component: Link,
    to: path,
    sx: { 
      ml: 1, 
      borderRadius: '20px', 
      textTransform: 'none',
      backgroundColor: location.pathname === path ? 'primary.main' : 'transparent',
      color: location.pathname === path ? 'white' : 'text.primary',
      '&:hover': {
        backgroundColor: location.pathname === path ? 'primary.dark' : 'rgba(0, 0, 0, 0.04)'
      }
    }
  });

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Toolbar>
        <MovieIcon sx={{ color: 'text.primary', mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary', fontWeight: 'bold' }}>
          Series Journal
        </Typography>
        <Box>
          <Button {...getButtonProps('/')}>Home</Button>
          <Button {...getButtonProps('/sobre')}>Sobre</Button>
          <Button {...getButtonProps('/cadastrar')}>Cadastrar</Button>
          <Button {...getButtonProps('/listar')}>Lista de séries</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;