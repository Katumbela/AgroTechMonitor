import React, { useState } from 'react';
import logo from '../img/logo2.png'

const Header = () => {

  return (

    <>

      <nav className="navbar navbar-expand-sm navbar-success ">
        <div className="container">
          <a className="navbar-brand"  href="#">
            <img src={logo} style={{height: '3em'}} alt="AfrikaPay Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#features">Recursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">Como Funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Adicional</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" href="#">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;
