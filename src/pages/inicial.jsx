import React from 'react';
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
import ic8 from '../img/ic8.png';
import logoo from '../img/logo1.png';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
  document.title = 'Pagina Inicial | AgroTechMonitor'
  return (
    <div classNameName="">
      <Header />

      {/* <!-- Hero Section --> */}
      <section id="hero" className="hero-section w-100 text-center">
        <div className="container mx-auto">
          <h1>AgroTechMonitor</h1>
          <p>Plataforma para Agricultura Digital em Angola</p>
        </div>
      </section>
      <div className='bg-agri py-2 shadow'>
      <div className="container d-flex j-around justify-content-between">
        <button className="btn border-0 rounded-0 shadow-md btn-warning">Comunidade <i className="bi bi-people"></i></button>
        <button className="btn border-0 rounded-0 shadow-md btn-warning">Produtos <i className="bi bi-cart"></i></button>
      </div>
      </div>

      {/* <!-- Features Section --> */}
      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title text-center">Benefícios da AgroTechMonitor</h2>
          <div className="row">
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic1} alt="Transferências Rápidas" className="feature-icon" />
                <h3 className="feature-title">Aumente sua produtividade</h3>
                <p className="feature-description">Utilize os recursos avançados da plataforma para otimizar seus processos agrícolas e alcançar maiores rendimentos.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
              <div className="feature-box">
                <img src={ic8} alt="Pagamentos Digitais" className="feature-icon" />
                <h3 className="feature-title"> Tomada de decisões informadas</h3>
                <p className="feature-description">Obtenha insights valiosos sobre o solo, clima e saúde das plantas para tomar decisões fundamentadas e maximizar os resultados.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 my-3">
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
            <div className="col-md-4 col-lg-3 my-3">
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
      <section id="how-it-works" className="how-it-works-section">

        <h2 className="section-title text-center">Recursos da AgroTechMonitor</h2>

        <div className="row bg-agri">
          <div className="col-12  p1 h-40 col-md-6  col-lg-5">
            {/* <img src={im10} className='img-fluid w-100' alt="" /> */}
          </div>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="col-12 py-5 text-center px-3 px-sm-5 bg-i h-40 col-md-6 col-lg-7">
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
      <section id="team" className="team-section">
        <div className="container">
          <h2 className="section-title text-center">Recursos Adicionais</h2>
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


      <section className="action-section">
        <div className="row">
          <div className="col-12 c h-70 col-lg-6 col-xl-5">

          </div>
          <div style={{ display: 'flex', placeItems: 'center', placeContent: 'center' }} className="bg-agri col-12 col-lg-6 text-center px-3 px-sm-5 col-xl-7 py-5">
          <blockquote className="destaque">
 
              <h1 style={{fontWeight:'bolder'}} className='cc'>
              Experimente agora o AgroTechMonitor e eleve sua agricultura a um novo nível. Acesse nossa plataforma e comece a colher os benefícios da agricultura digital. Seja parte da revolução agrícola!
              </h1>
              </blockquote>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title text-center">Solicite uma Demonstração</h2>
          <p className="section-description text-center">Estamos disponíveis para esclarecer suas dúvidas e receber seus feedbacks.</p>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Seu nome" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Seu e-mail" />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Sua mensagem"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar mensagem</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <br />
                <br />
                <h3 className='ms-4'>Informações de Contato</h3>
                <ul>
                  <li><i class="bi bi-geo-alt"></i> Rua do Mufulama, Talatona, Luanda - Angola</li>
                  <li><i class="bi bi-telephone"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="tel:+244928134249">+244 928 134 249</a></li>
                  <li><i class="bi bi-envelope"></i> <a className='text-dark' style={{ textDecoration: 'none' }} href="mailto:info@afrikapay.com">info@afrikapay.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <Footer />


    </div>
  );
}

export default Home;
