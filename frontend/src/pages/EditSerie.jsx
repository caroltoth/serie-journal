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
      // 1. Pegamos os dados do form e injetamos o ID convertido para número
      const dadosParaAtualizar = { ...data, id: Number(id) };
      
      // 2. Enviamos para a rota exata que o professor pediu (sem o /id no final)
      await api.put('/series', dadosParaAtualizar);
      
      navigate('/listar');
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      
      // Um pequeno truque: se a API do professor na verdade exigir o /id (caso ele tenha digitado errado no PDF),
      // o código tenta a rota alternativa automaticamente para você não ficar travada.
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