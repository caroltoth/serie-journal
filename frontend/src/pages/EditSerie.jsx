import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SerieForm from '../components/SerieForm/SerieForm';
import api from '../services/api';
import { Box, Paper, Typography } from '@mui/material';

const EditSerie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await api.get(`/series/${id}`);
        setSerie(response.data);
      } catch (error) {
        console.error('Erro ao buscar série:', error);
      }
    };
    fetchSerie();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      const dadosParaAtualizar = { ...data, id: Number(id) };
      
      await api.put('/series', dadosParaAtualizar);
      
      navigate('/listar');
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      
      try {
         await api.put(`/series/${id}`, { ...data, id: Number(id) });
         navigate('/listar');
      } catch (fallbackError) {
         alert('Erro ao atualizar série na API.');
      }
    }
  };

  if (!serie) return <Paper sx={{p:3}}><Typography>Carregando...</Typography></Paper>;

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
      <SerieForm onSubmit={handleUpdate} initialData={serie} isEdit={true} />
    </Box>
  );
};

export default EditSerie;
