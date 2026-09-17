import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SerieForm = ({ onSubmit, initialData, isEdit }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    seasons: '',
    releaseDate: '',
    director: '',
    production: '',
    category: '',
    watchedAt: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: 500, borderRadius: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom align="center" color="primary" fontWeight="bold">
        {isEdit ? 'Editar série' : 'Cadastrar série'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Título *</Typography>
          <TextField name="title" value={formData.title} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Temporadas *</Typography>
          <TextField name="seasons" type="number" value={formData.seasons} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Data de Lançamento *</Typography>
          <TextField name="releaseDate" type="date" value={formData.releaseDate} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Diretor *</Typography>
          <TextField name="director" value={formData.director} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Produtora *</Typography>
          <TextField name="production" value={formData.production} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Categoria *</Typography>
          <TextField name="category" value={formData.category} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 1, fontWeight: 'bold' }}>Data em que assistiu *</Typography>
          <TextField name="watchedAt" type="date" value={formData.watchedAt} onChange={handleChange} required fullWidth size="small" />
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
          <Button variant="text" color="inherit" onClick={() => navigate('/listar')} sx={{ fontWeight: 'bold' }}>
            CANCELAR
          </Button>
          <Button type="submit" variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
            SALVAR
          </Button>
        </Box>
        
      </Box>
    </Paper>
  );
};

export default SerieForm;