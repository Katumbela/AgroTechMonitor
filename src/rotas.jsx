// Importe os pacotes necessários
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importe os componentes das páginas
import Home from './pages/inicial';
// Importe outros componentes das páginas, se houver

// Defina as rotas do aplicativo
const RotasPT = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
};

export default RotasPT;
