import React, { useState } from 'react';
import logo from '../img/logo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-success">
      <div className="container">
        <a className="navbar-brand" href="#">
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
  );
};

export default Navbar;
