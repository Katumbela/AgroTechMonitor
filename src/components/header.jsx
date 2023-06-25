import React, { useState } from 'react';
import logo from '../img/logo2.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-success">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ height: '3em' }} alt="AgroTechMonitor Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
        >
          <span className={isOpen ? 'navbar-toggler-icon x-icon' : 'navbar-toggler-icon'}></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#features">Recursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#how-it-works">Como Funciona</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#team">Adicional</a>
            </li>
            <li className="nav-item">
              <NavLink to={'/consulta'} className=" rounded-0 btn btn-outline-primary my-1 w-100 my-md-0">Consultar</NavLink>
            </li>
            <li className="nav-item">
              <a href='#contact' className=" rounded-0 btn btn-primary text-white mx-md-1 w-100 my-1 my-md-0">Solicitar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
