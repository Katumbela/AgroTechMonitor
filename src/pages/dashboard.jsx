import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo1.png';
import Header from '../components/header';
import Footer from '../components/footer';

function Dash() {
  document.title = 'Dashboard AgroTechMonitor | AgroTechMonitor'
  return (
    <div className="">
      <Header />
      <br />
      <center>
        <h2 className='text-agri'>Bem vindo ao seu dashboard $Usuario</h2>
      </center>
      <br />
     <main className="container">
     <div className=" ">
          <h4 className="text-">Insira os dados coletados</h4>
          <span className="text-secondary f-10">Adicione os dados coletados pelo dispositivo para obter os dados do seu campo</span>
          <hr />
          <label htmlFor="" className='w-100'>
            <span className="f-12 text-secondary">Humidade</span>
            <input type="text" className="form-control w-100" />
          </label>
          <label htmlFor="" className='w-100'>
            <span className="f-12 text-secondary">Temperatura</span>
            <input type="text" className="form-control w-100" />
          </label>
          <label htmlFor="" className='w-100'>
            <span className="f-12 text-secondary">intensidade</span>
            <input type="text" className="form-control w-100" />
          </label>
          <br />
         <center> <button className="btn btn-primary rounded-0">Analizar</button></center>
        </div>
     </main>

<br />
<br />
<br />
<br />
      <Footer />


    </div>
  );
}

export default Dash;
