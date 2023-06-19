import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo1.png';
import img1 from '../img/im1.jpeg';
import Header from '../components/header';
import Footer from '../components/footer';

function Feiras() {
    document.title = 'Feiras | AgroTechMonitor'
    return (
        <div className="">
            <Header />
            <div style={{ background: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center center', }} className='h-55 position-relative'>

                <div style={{ bottom: '0', background: '#09AE0098', color: 'white', left: '0', right: '0' }} className="position-absolute text-center py-3">
                    <h1>Feira AgroTechMonitor</h1>
                </div>
            </div>

            <br />
            <br />
            <main className='container'>
                <h2>Explore variados produtos aqui</h2>
                <br />
                <div class="row ">
                    <div class="col-6 col-sm-4 my-3 col-md-3 col-lg-2 col-xxl-1">
                        <div className="prod text-center">
                            <div style={{ height: '4em', width: '4em' }} className="bg-agri mx-auto rounded-3">
                            </div>
                            <b className="text-agri">
                                Nome do Produto
                            </b>
                            <p className="text-secondary f-12">1Kg - 5000 Kz <br />
                                Fazenda YPP - Luanda
                                <br />
                                <a href="#">Entrar em contato</a>
                            </p>

                        </div>
                    </div>
                    <div class="col-6 col-sm-4 my-3 col-md-3 col-lg-2 col-xxl-1">
                        <div className="prod text-center">
                            <div style={{ height: '4em', width: '4em' }} className="bg-agri mx-auto rounded-3">
                            </div>
                            <b className="text-agri">
                                Nome do Produto
                            </b>
                            <p className="text-secondary f-12">1Kg - 5000 Kz <br />
                                Fazenda YPP - Luanda
                                <br />
                                <a href="#">Entrar em contato</a>
                            </p>

                        </div>
                    </div>
                    <div class="col-6 col-sm-4 my-3 col-md-3 col-lg-2 col-xxl-1">
                        <div className="prod text-center">
                            <div style={{ height: '4em', width: '4em' }} className="bg-agri mx-auto rounded-3">
                            </div>
                            <b className="text-agri">
                                Nome do Produto
                            </b>
                            <p className="text-secondary f-12">1Kg - 5000 Kz <br />
                                Fazenda YPP - Luanda
                                <br />
                                <a href="#">Entrar em contato</a>
                            </p>

                        </div>
                    </div>
                    <div class="col-6 col-sm-4 my-3 col-md-3 col-lg-2 col-xxl-1">
                        <div className="prod text-center">
                            <div style={{ height: '4em', width: '4em' }} className="bg-agri mx-auto rounded-3">
                            </div>
                            <b className="text-agri">
                                Nome do Produto
                            </b>
                            <p className="text-secondary f-12">1Kg - 5000 Kz <br />
                                Fazenda YPP - Luanda
                                <br />
                                <a href="#">Entrar em contato</a>
                            </p>

                        </div>
                    </div>
                </div>
                <br />
            </main>
            <br />

            <Footer />


        </div>
    );
}

export default Feiras;