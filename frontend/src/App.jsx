import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import AddSerie from './pages/AddSerie';
import EditSerie from './pages/EditSerie';
import ListSeries from './pages/ListSeries';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/cadastrar" element={<AddSerie />} />
            <Route path="/editar/:id" element={<EditSerie />} />
            <Route path="/listar" element={<ListSeries />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;