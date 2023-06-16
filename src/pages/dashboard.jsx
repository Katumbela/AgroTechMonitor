import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo1.png';
import Header from '../components/header';
import Footer from '../components/footer';

function Dash() {
  document.title ='Dashboard Afrika Pay | Afrika Pay'
  return (
    <div className="">
      <Header />
      
      <center><h2>Bem vindo ao seu dashboard $Usuario</h2></center>
  <br />
  
  <Footer />


    </div>
  );
}

export default Dash;
