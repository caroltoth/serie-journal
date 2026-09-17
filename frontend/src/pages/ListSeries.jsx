import React, { useState, useEffect } from 'react';
import SerieList from '../components/SerieList/SerieList';
import api from '../services/api';
import { Box, Typography, Paper } from '@mui/material';

const ListSeries = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      const response = await api.get('/series');
      setSeries(response.data);
    } catch (error) {
      console.error('Erro ao listar séries:', error);
      alert('Erro ao conectar com a API. Verifique se o backend está rodando.');
    }
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm('Tem certeza que deseja excluir esta série?')) {
      try {
        await api.delete(`/series/${id}`);
        fetchSeries(); // Recarrega a lista
      } catch (error) {
        console.error('Erro ao excluir:', error);
      }
    }
  };

  return (
    <Paper sx={{ width: '100%', p: 4, bgcolor: 'rgba(255,255,255,0.9)', minHeight: '60vh' }}>
      <Typography variant="h5" component="h2" color="primary" gutterBottom align="center" fontWeight="bold" sx={{mb: 4}}>
        Lista de séries
      </Typography>
      <SerieList series={series} onDelete={handleDelete} />
    </Paper>
  );
};

export default ListSeries;