import React, { useState } from 'react';

const Footer = () => {

  return (

    <>

     
  {/* <!-- Footer Section --> */}
  <footer className="footer-section bg-agri">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-6">
          <h3 className="footer-title">Sobre Nós</h3>
          <p className="foo footer-description">Somos uma equipe apaixonada por agricultura e tecnologia. Nossa missão é transformar a agricultura por meio de soluções digitais inovadoras. Fornecemos dados precisos, análises avançadas e recursos intuitivos para ajudar os agricultores a tomar decisões informadas e maximizar seus resultados. Junte-se a nós e seja parte dessa revolução agrícola!</p>
        </div>
        <div className="col-md-4 col-lg-3">
          <h3 className="footer-title">Links Úteis</h3>
          <ul className="foo footer-links">
            <li><a href="#features">Recursos</a></li>
            <li><a href="#how-it-works">Como Funciona</a></li>
            <li><a href="#team">R. Adicionais</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3">
          <h3 className="footer-title">Contatos</h3>
          <ul className="foo footer-contact">
            <li><i className="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
            <li><i className="bi bi-telephone"></i> <a className='text-white' style={{textDecoration:'none'}} href="tel:+244928134249">+244 928 134 249</a></li>
            <li><i className="bi bi-envelope"></i> <a className='text-white' style={{textDecoration:'none'}} href="mailto:ja3328173@gmail.com">ja3328173@gmail.com</a></li>
          </ul>
        </div>
        <div className="col-12 text-center">
            <div className="text-seocondary mt-5 foo">&copy; 2023 - AgroTechMonitor Inc.</div>
        </div>
      </div>
    </div>
  </footer>


    </>
  );
};

export default Footer;
