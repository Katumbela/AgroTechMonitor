import React from 'react';
import '../components/cabeca.css'
import b from '../img/logo1.png';
import batatas from '../img/batata.jpeg';
import Header from '../components/header';
import Footer from '../components/footer';
import Contador from '../components/contador';
import { useState } from 'react';
import DatePicker from 'react-datepicker'

function Leilao() {
    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    document.title = 'Leilão | AgroTechMonitor'
    return (
        <div className="">
            <Header />
            <div style={{ background: `url(${batatas})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: 'cover', objectFit: 'cover', backgroundPosition: 'center center', }} className='h-55 position-relative'>

                <div style={{ bottom: '0', background: '#09AE0098', color: 'white', left: '0', right: '0' }} className="position-absolute text-center py-3">
                    <h1>Lelão de Batatas</h1>
                </div>
            </div>

            <br />
            <br />
            <main className='container'>
                <center>
                {/* <DatePicker selected={selectedDate} onChange={handleDateChange} /> */}
   
                    <h3>Termina em: <Contador dataTermino={'2023-06-23'}  /></h3>
                    <hr />
                </center>
                <h2>1Kg - 600 Kz</h2>
                <p>Fazenda - XX, Benguela

                    <br />
                    <i className="bi text-a bi-eye"> 243 Visitantes</i>
                </p>
                <hr />

                <center>
                    <span className="text-secondary">
                        Para mercados e empresas, por favor entrar em contacto com o fornecedor <br />
                        <a className='text-agri' href="tel:+244928134249"><i className="bi bi-telephone"></i> Clique aqui <i title='Enviar sua mensagem' className="bi bi-telephone"></i></a>
                    </span>
                </center>



                <div className="place-feed bg-white">
                    <div className="d-flex w-75 mx-auto ">
                        <input type="text" className="form-control rounded-0" placeholder='Escreva alguma coisa '/> <i className="bi text-agri f-20 ms-3 py-1 bi-send"></i> 
                    </div>
                </div>

                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
            </main>
            <br />

            <Footer />


        </div>
    );
}

export default Leilao;
