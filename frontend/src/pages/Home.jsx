import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 10 }}>
      <Paper elevation={3} sx={{ p: 5, maxWidth: 500, borderRadius: 2, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" color="primary" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold' }}>
          Página Inicial
        </Typography>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          Bem-vindo ao projeto CRUD de séries!
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gerencie séries assistidas de uma forma fácil e intuitiva.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;