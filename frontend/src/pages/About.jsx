import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 10 }}>
      <Paper elevation={3} sx={{ p: 5, maxWidth: 600, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" color="primary" gutterBottom fontWeight="bold">
          Sobre o Projeto
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Este é um projeto de gerenciamento de séries assistidas desenvolvido com React para a disciplina Desenvolvimento de Sistemas Frontend. Aqui você pode cadastrar, visualizar, editar e excluir séries assistidas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default About;