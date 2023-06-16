import React, { useRef, useState } from 'react';
import '../components/cabeca.css'
import logo from '../img/logo2.png';
import katumbela from '../img/im1.jpeg';
import im1 from '../img/im1.jpeg';
import im2 from '../img/im2.jpeg';
import im3 from '../img/im3.jpeg';
import im6 from '../img/im6.jpeg';
import im9 from '../img/im9.jpeg';
import im10 from '../img/im10.jpeg';
import im5 from '../img/im5.jpeg';
import ic1 from '../img/ic1.png';
import ic2 from '../img/ic2.png';
import ic3 from '../img/ic3.png';
import ic4 from '../img/ic4.png';
import ic5 from '../img/ic6.png';
import ic7 from '../img/ic7.png';
import ic12 from '../img/ic12.png';
import ic13 from '../img/ic13.png';
import ic14 from '../img/ic14.png';
import ic15 from '../img/ic15.png';
import ic8 from '../img/ic8.png';
import logoo from '../img/logo1.png';
import Header from '../components/header';
import Footer from '../components/footer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgxc9jDvjM9NzpDinJ2WdUckSVnf1vAH8",
  authDomain: "freelangola.firebaseapp.com",
  databaseURL: "https://freelangola-default-rtdb.firebaseio.com",
  projectId: "freelangola",
  storageBucket: "freelangola.appspot.com",
  messagingSenderId: "856024122438",
  appId: "1:856024122438:web:569bbc53e180987773f647",
  measurementId: "G-RHF07QEXZK"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Referência para a coleção 'msgs' no Firestore
const messagesRef = firebase.firestore().collection('msgs');


function Home() {

  const [count, setCount] = useState(0);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const { name, email, message } = event.target.elements;
  
    const formData = {
      name: name.value,
      email: email.value,
      message: message.value
    };
  
    // Aqui você pode usar a variável `db` para adicionar os dados ao Firestore
    messagesRef.add(formData)
      .then(() => {
        // Limpar o formulário ou exibir uma mensagem de sucesso, se necessário
        console.log('Dados adicionados com sucesso'); 
        setTimeout(() => {
          Swal.fire('Sucesso!', 'Mensagem enviada com sucesso!', 'success');
          event.target.reset();
          setIsButtonDisabled(true);
        }, 1000);
      })
      .catch((error) => {
        // Lidar com erros, se necessário
        console.error('Erro ao adicionar dados'); 
        setTimeout(() => {
          Swal.fire('Erro!', 'Ocorreu um erro ao tentar enviar sua mensagem!', 'error');
          event.target.reset();
          setIsButtonDisabled(true);
        }, 1000);
      });
  };




  const handleInputChange = (event) => {
    // Verificar se os campos estão vazios
    const isFormValid = event.target.name.value && event.target.email.value && event.target.message.value;
    // Atualizar o estado do botão
    setIsButtonDisabled(!isFormValid);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 92) {
        setCount(count + 3);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count, 92]);

  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count2 < 36) {
        setCount2(count2 + 2);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [count2, 36]);


  const revealRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(revealRef.current, {
      // Opções de animação
    });
  }, []);

  document.title = 'Pagina Inicial | AgroTechMonitor'
  return (
    <div className="">
      <Header />

      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero-section w-100 text-center">
        <div ref={revealRef} className="container mx-auto">

          <h1 >AgroTechMonitor</h1>
          <p ref={revealRef}>Plataforma para Agricultura Digital em Angola</p>
        </div>
      </section>
      <div className='bg-agri py-2 shadow'>
        <div className="container d-flex j-around justify-content-between">
          <button className="btn border-0 rounded-0 shadow-md btn-warning">Comunidade <i className="bi bi-people"></i></button>
          <button className="btn border-0 rounded-0 shadow-md btn-warning">Produtos <i className="bi bi-cart"></i></button>
        </div>
      </div>

      <div className="py-4">
        <div className="row text-center">
          <div className="col-6 col-sm-4 col-lg-3">
            <img src={ic12} alt="" style={{ height: '5em' }} /> <br />

            <span className="text-secondary">Recomendações</span>
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <img src={ic13} alt="" style={{ height: '5em' }} /> <br />
            <span className="text-secondary">Materiais Agrícolas</span>
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <img src={ic14} alt="" style={{ height: '5em' }} /> <br />

            <span className="text-secondary">Produtos Agrícolas</span>
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <img src={ic15} alt="" style={{ height: '5em' }} /> <br />

            <span className="text-secondary">Comunidade</span>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr />
        <div className="py-3 text-center ">
          <div className="row">
            <div className="col-12 col-sm-6">
              <i className="bi bi-people text-agri h1 "></i>
              <h1 className='text-agri'>{count}</h1>
              <span className='text-agri'>Agricultores</span>
            </div>
            <div className="col-12 col-sm-6">
              <i className="bi bi-list-check text-agri h1 "></i>
              <h1 className='text-agri'>{count2}</h1>
              <span className='text-agri'>Consultas feitas</span>
            </div>
          </div>
        </div>

        <br />
        <div className="bg-agri mx-auto rounded-circle" style={{ height: '10em', width: '10em' }}></div>
        <br />
        <b className="text-agri">Dispositivo em Desenvolvimento</b>
        <br />
      </div>
      {/* <!-- Features Section --> */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title text-center text-agri">Benefícios da AgroTechMonitor</h2>
          <div className="row">
            <div ref={revealRef} className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic1} alt="Transferências Rápidas" className="feature-icon" />
                <h3 className="feature-title">Aumente sua produtividade</h3>
                <p className="feature-description">Utilize os recursos avançados da plataforma para otimizar seus processos agrícolas e alcançar maiores rendimentos.</p>
              </div>
            </div>
            <div ref={revealRef} className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic8} alt="Pagamentos Digitais" className="feature-icon" />
                <h3 className="feature-title"> Tomada de decisões informadas</h3>
                <p className="feature-description">Obtenha insights valiosos sobre o solo, clima e saúde das plantas para tomar decisões fundamentadas e maximizar os resultados.</p>
              </div>
            </div>
            <div ref={revealRef} className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic7} alt="Cartões Virtuais" className="feature-icon" />
                <h3 className="feature-title">Comunidade de Agricultores</h3>
                <p className="feature-description">Encontre uma comunidade vasta de profissionais e agricultores como você e serviços personalizados </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic4} alt="Negociações P2P" className="feature-icon" />
                <h3 className="feature-title">Reduza custos e desperdícios</h3>
                <p className="feature-description">Identifique oportunidades de otimização e reduza o desperdício de recursos, como água e fertilizantes, resultando em economia financeira.</p>
              </div>
            </div>
            <div ref={revealRef} className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic5} alt="Caixa da Plataforma" className="feature-icon" />
                <h3 className="feature-title">Market Store</h3>
                <p className="feature-description">Encontre todos os produtos necessarios para alavancar e dar suporte no seu negocio, nas suas plantações, literalmente todos os produtos que precisa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- How It Works Section --> */}
      <section ref={revealRef} id="how-it-works" className="how-it-works-section">

        <h2 className="section-title text-center text-agri">Recursos da AgroTechMonitor</h2>

        <div className="row bg-agri">
          <div ref={revealRef} className="col-12  p1 h-40 col-md-6  col-lg-5">
            {/* <img src={im10} className='img-fluid w-100' alt="" /> */}
          </div>
          <div ref={revealRef} style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12 py-5 text-center px-3 px-sm-5 bg-i h-40 col-md-6 col-lg-7">
            <div className="">
              <img src={logo} alt="" />
              <h1 className='h1'>Monitoramento do solo em tempo real</h1>
            </div>
          </div>
        </div>
        <div className="row flex-row-reverse bg-agri">
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12  p2 col-md-6  col-lg-5">
            <img src={im6} className='img-fluid w-100 my-auto' alt="" />
          </div>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12 py-5 text-center px-3 px-sm-5 bg-i h-40 col-md-6 col-lg-7">
            <div className="">
              <img src={logo} alt="" />
              <h1 className='h1'>Previsão do clima e alertas personalizados</h1>
            </div>
          </div>
        </div>
        <div className="row bg-agri">
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12  p3 col-md-6  col-lg-5">
            <img src={katumbela} className=' w-100' alt="" />
          </div>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12 py-5 text-center px-3 px-sm-5 bg-i h-40 col-md-6 col-lg-7">
            <div className="">
              <img src={logo} alt="" />
              <h1 className='h1'>Análise da saúde das plantas</h1>
            </div>
          </div>
        </div>
        {/* <div className="container">
      <h2 className="section-title text-center">Como Funciona</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6 text-center my-3">
          <div className="step">
            <img src="images/step1.png" alt="Passo 1" className="step-icon"/>
            <h3 className="step-title">Crie uma conta</h3>
            <p className="step-description">Cadastre-se no Afrika Pay e crie sua conta gratuitamente.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 text-center my-3">
          <div className="step">
            <img src="images/step2.png" alt="Passo 2" className="step-icon"/>
            <h3 className="step-title">Adicione fundos</h3>
            <p className="step-description">Adicione fundos à sua conta usando diferentes métodos de pagamento.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 text-center my-3">
          <div className="step">
            <img src="images/step3.png" alt="Passo 3" className="step-icon"/>
            <h3 className="step-title">Envie dinheiro</h3>
            <p className="step-description">Envie dinheiro para qualquer pessoa, em qualquer lugar do mundo.</p>
          </div>
        </div>
      </div>
    </div> */}
      </section>
      <section id="team" ref={revealRef} className="team-section">
        <div className="container">
          <h2 className="section-title text-center text-agri">Recursos Adicionais</h2>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul>
                <li className='my-3 d-flex gap-2'>
                  <i className="bi bi-check2-circle text-success h1"></i>
                  Recomendações personalizadas para irrigação e aplicação de fertilizantes
                </li>
                <li className='my-3 d-flex gap-2'>
                  <i className="bi bi-check2-circle text-success h1"></i>
                  Registro e acompanhamento histórico dos dados
                </li>
                <li className='my-3 d-flex gap-2'>
                  <i className="bi bi-check2-circle text-success h1"></i>
                  Visualização de gráficos e relatórios detalhados
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-6">
              <ul>
                <li className='my-3 d-flex gap-2'>
                  <i className="bi bi-check2-circle text-success h1"></i>
                  Compartilhamento de dados com consultores agrícolas
                </li>
                <li className='my-3 d-flex gap-2'>
                  <i className="bi bi-check2-circle text-success h1"></i>
                  Integração com dispositivos de coleta de dados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Team Section --> */}
      {/* <section id="teamm" className="team-section">
        <div className="container">
          <h2 className="section-title text-center">Nosso Time</h2>
          <div className="row">
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={katumbela} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">João A. Katombela</h3>
                <p className="team-member-position">CEO & Dev.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={katumbela} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Josefino Miguel</h3>
                <p className="team-member-position">CFO & Dir. Operacional</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={katumbela} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Gonçalo Gonçalves</h3>
                <p className="team-member-position">COO & Design</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="team-member">
                <img src={katumbela} alt="Membro da Equipe" className="team-member-photo" />
                <h3 className="team-member-name">Tavares Evaristo</h3>
                <p className="team-member-position">CTO & Dev.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      <section ref={revealRef} className="action-section">
        <div className="row">
          <div className="col-12 c col-lg-6 col-xl-5">

          </div>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="bg-agri col-12 col-lg-6 text-center px-3 px-sm-5 col-xl-7 py-5">
            <blockquote className="destaque">

              <h1 style={{ fontWeight: 'bolder' }} className='cc'>
                Experimente agora o AgroTechMonitor e eleve sua agricultura a um novo nível. Acesse nossa plataforma e comece a colher os benefícios da agricultura digital. Seja parte da revolução agrícola!
              </h1>
            </blockquote>
          </div>
        </div>
      </section>
      <center className='mt-5'>
        <button className="btn btn-primary rounded-0">Cadastre - se <i className="bi bi-arrow-right-short"></i></button>
      </center>
      {/* <!-- Contact Section --> */}
      <section id="contact" className="contact-section py-4">
        <div className="container">
          <h2 className="section-title text-center mt-5 text-agri">Solicite uma Demonstração Gratuita</h2>
          <p className="section-description text-center">Estamos disponíveis para esclarecer suas dúvidas sobre o nosso dispositivo e receber seus feedbacks.</p>
          <div className="row">
            <div className="col-md-6">    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          required
          className="form-control"
          placeholder="Seu nome"
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          required
          className="form-control"
          placeholder="Seu e-mail / Telefone"
          name="email"
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          required
          rows="4"
          placeholder="Sua mensagem"
          name="message"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <button type="submit" className="rounded-0 btn btn-primary" disabled={isButtonDisabled}>
        Enviar mensagem <i className="bi bi-s"></i>
      </button>
    </form>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <br />
                <br />
                <h3 className='ms-4'>Informações de Contato</h3>
                <ul>
                  <li><i className="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
                  <li><i className="bi bi-telephone"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="tel:+244928134249">+244 928 134 249</a></li>
                  <li><i className="bi bi-envelope"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="mailto:ja3328173@gmail.com">ja3328173@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <center>

        <div className="bg-agri" style={{ height: '1rem', width: '7vw' }}></div>

      </center>
      <br />


      <section id='partner' className="partners-section container">
        <h1 className="text-agri">Parceiros</h1>
        <br />
        <center>
          <img src={logo} style={{ height: '4em' }} alt="" /> <br />
          <span className="text-secondary">Seja Parceiro AgroTechMonitor, entre em contacto.</span>
        </center>
        <br />
        <br />

      </section>

      <Footer />


    </div>
  );
}

export default Home;
