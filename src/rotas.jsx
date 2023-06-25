// Importe os pacotes necessários
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importe os componentes das páginas
import Home from './pages/inicial';
import Feiras from './pages/feiras';
import Leilao from './pages/leilao';
import Login from './pages/login';
import Solicitar from './pages/solicitar';
import Dash from './pages/dashboard';
// Importe outros componentes das páginas, se houver

// Defina as rotas do aplicativo
const RotasPT = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/feiras" element={<Feiras />} exact/>
        <Route path="/consulta" element={<Login />} exact/>
        <Route path="/solicitar" element={<Solicitar />} exact/>
        <Route path="/leilao" element={<Leilao />} exact/>
        <Route path="/painel" element={<Dash />} exact/>
        {/* Adicione outras rotas aqui */}
      </Routes>
    </BrowserRouter>
  );
};

export default RotasPT;
