import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo2.png';
import Header from '../components/header';
import Footer from '../components/footer';
import { NavLink } from 'react-router-dom';

function Login() {
  document.title ='Dashboard Afrika Pay | Afrika Pay'
  return (
    <div className="" style={{height:'100vh', width: '100vw', display:'grid', placeContent:'center'}}>
    
     <div className="bg-light position-relative p-3 p-md-5 shadow-lg border-1 border-success">
     <NavLink to={'/'}>
     <i style={{position:'absolute', top:'.3rem', left:'.5rem'}} className="bi bi-arrow-left-short f-30 text-agri"></i>
     </NavLink>
    
            <center>
                <img src={b} style={{height:'3em'}} alt="" />
           
            <h3 className="text-agri">ACESSAR</h3>
             </center>
            
            <hr />
         <div className="" style={{width:'85%'}}>  <span className="f-12 text-secondary ">Insira o ID do seu dispositivo para efectuar uma consulta</span></div>
            <input type="num" name="" placeholder='Ex. 723-2432-22' id="" className="form-control rounded-0" />
            <button className="btn rounded-0 w-100 btn-primary">Entrar</button>
            <center>
                <span className="text-secondary f-10">&copy; 2023 &middot; AgroTechMonitor</span>
            </center>
     </div>
  
    </div>
  );
}

export default Login;
