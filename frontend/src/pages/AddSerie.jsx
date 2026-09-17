import React from 'react';
import SerieForm from '../components/SerieForm/SerieForm';
import api from '../services/api';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddSerie = () => {
  const navigate = useNavigate();

  const handleAdd = async (data) => {
    try {
      await api.post('/series', data);
      navigate('/listar');
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      alert('Erro ao conectar com a API. Verifique se o backend está rodando.');
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
      <SerieForm onSubmit={handleAdd} isEdit={false} />
    </Box>
  );
};

export default AddSerie;