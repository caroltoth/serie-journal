import React from 'react';
import { Card, CardContent, Typography, Grid, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const SerieList = ({ series, onDelete }) => {
  const navigate = useNavigate();

  if (series.length === 0) {
    return <Typography variant="body1" sx={{bgcolor: 'white', p:2, borderRadius: 2}}>Nenhuma série cadastrada ainda.</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {series.map((serie) => (
        <Grid item xs={12} sm={6} md={4} key={serie.id}>
          <Card elevation={2} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                {serie.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Temporadas:</strong> {serie.seasons}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Lançamento:</strong> {serie.releaseDate}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Diretor:</strong> {serie.director}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Produtora:</strong> {serie.production}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Categoria:</strong> {serie.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Data Assistido:</strong> {serie.watchedAt}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
              <IconButton color="primary" onClick={() => navigate(`/editar/${serie.id}`)} size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton color="error" onClick={() => onDelete(serie.id)} size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SerieList;