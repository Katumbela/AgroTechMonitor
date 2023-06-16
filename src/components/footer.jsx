import React, { useState } from 'react';

const Footer = () => {

  return (

    <>

     
  {/* <!-- Footer Section --> */}
  <footer class="footer-section bg-agri">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-6">
          <h3 class="footer-title">Sobre Nós</h3>
          <p class="foo footer-description">Somos uma equipe apaixonada por agricultura e tecnologia. Nossa missão é transformar a agricultura por meio de soluções digitais inovadoras. Fornecemos dados precisos, análises avançadas e recursos intuitivos para ajudar os agricultores a tomar decisões informadas e maximizar seus resultados. Junte-se a nós e seja parte dessa revolução agrícola!</p>
        </div>
        <div class="col-md-4 col-lg-3">
          <h3 class="footer-title">Links Úteis</h3>
          <ul class="foo footer-links">
            <li><a href="#features">Recursos</a></li>
            <li><a href="#how-it-works">Como Funciona</a></li>
            <li><a href="#team">R. Adicionais</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
        <div class="col-md-4 col-lg-3">
          <h3 class="footer-title">Contatos</h3>
          <ul class="foo footer-contact">
            <li><i class="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
            <li><i class="bi bi-telephone"></i> <a className='text-white' style={{textDecoration:'none'}} href="tel:+244928134249">+244 928 134 249</a></li>
            <li><i class="bi bi-envelope"></i> <a className='text-white' style={{textDecoration:'none'}} href="mailto:ja3328173@gmail.com">ja3328173@gmail.com</a></li>
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
