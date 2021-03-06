import React from 'react';
import Menu from './../../components/menuSamanta';
import Banner from './../../img/Banner1.png';
import './../home/home.css';

//imagens
import Imagem from './../../img/Trabalho.png';
import Samanta from './../../img/Samanta.png';
import Makoto from './../../img/Makoto.png';
import Milena from './../../img/Milena.png';
import Fusca from './../../img/Fusca.png';
import Gustavo from './../../img/Gustavo.png';
import Henrique from './../../img/Henrique.png';
import Eduardo from './../../img/Eduardo.png';
import banner2 from './../../img/Banner2.jpg';

import 'reactjs-popup/dist/index.css';
import Libras from '././../../components/acessibilidade';

import ChatBot from './../../containers/bot';


const home = () => {

  return (
    <div className="ContainerHome1">
      <Libras />


      <div className="botão">
        <ChatBot />
      </div>

      <div>
        <div style={{ color: '#fffff' }}>
              <Menu />
          <div id="home">
            <div id="Home" style={{  display: 'flex', justifyContent: 'center'}}>
              <img style={{ width: '100%', }} src={Banner} />
              <div style={{ height: '40px', position: 'absolute'}} className="textoHome">
                <p style={{ fontSize: '80px', fontWeight: 'bold', color: 'white', margin: 'auto', marginRight: '620px', marginTop: '230px'}}>Seja bem vindo! </p>
                <p style={{ fontSize: '40px', color: 'white', margin: 'auto', }}>Ao melhor atendimento do Brasil </p>
              </div>
            </div>
          </div>
        </div>

        <div id="Quemsomos">
          <div className='quemSomos'>
            <img className="coletividade" src={Imagem} />
            <div className="textinho" >
              <h1>Quem somos?</h1>
              <p>
                Com mais de 28 anos de experiência no mercado, somos uma das principais empresas de serviços e soluções de tecnologia no Brasil.
                A nossa missão é construir jornadas de transformação com robustez e segurança, entrega de inovação, produtividade e valor para seguradoras, bancos, telecom, varejo, serviços e outras empresas líderes de mercado.
              </p>
            </div>
          </div>
        </div>


        <div>
          <div id="Servicos" >
            <img style={{ width: '100%' }} src={banner2} />
          </div>
        </div>

        <div style={{ color: 'grey' }}>
          <div id="Integrantes">
            <h1>Integrantes  <hr className='hezinho' /> </h1>
            <div>
              <div className="grupo1">
                <div id="Samanta">
                  <img className="inte" src={Samanta} />
                  <div className='caixaTexto'>
                    <p>Samanta Melissa</p>
                    <a href="https://www.linkedin.com/in/samanta-nascimento-593057173/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div id="Makoto">
                  <img className="inte" src={Makoto} />
                  <div className='caixaTexto'>
                    <p>Marcelo Makoto</p>
                    <a href="https://www.linkedin.com/in/marcelo-santos1/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div id="Fusca">
                  <img className="inte" src={Fusca} />
                  <div className='caixaTexto'>
                    <p >Matheus Fuscaldi</p>
                    <a href="https://www.linkedin.com/in/matheus-fuscaldi-lima-283a05203/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

              </div>
              <div className="grupo2">

                <div id="Milena">
                  <img className="inte" src={Milena} />
                  <div className='caixaTexto'>
                    <p >Milena Akamine</p>
                    <a href="https://www.linkedin.com/in/milena-akamine-7a12041b2/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

                <div>
                  <div id="Gustavo">
                    <img className="inte" src={Gustavo} />
                    <div className='caixaTexto'>
                      <p >Gustavo Acacio</p>
                      <a href="https://www.linkedin.com/in/gustavo-acacio-078a011a3/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                    </div>
                  </div>


                  <div id="Henrique">
                    <img className="inte" src={Henrique} />
                    <div className='caixaTexto'>
                      <p >Henrique Oliveira</p>
                      <a href="https://www.linkedin.com/in/henrique-oliveira-118081211/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                    </div>
                  </div>

                </div>
                <div id="Eduardo">
                  <img className="inte" src={Eduardo} />
                  <div className='caixaTexto'>
                    <p >Eduardo Almeida</p>
                    <a href="https://www.linkedin.com/in/eduardo-almeida-6496321b1/"><img className='linkedin' src="https://image.flaticon.com/icons/png/512/49/49656.png" class="media-object  img-responsive img-thumbnail" /></a>
                  </div>
                </div>

              </div>
            </div>


          </div>



          <div className='Rodape'>
            <hr />
            <div className="divimg">
              <img className='logoRodape' src="https://www.brq.com/images/logo-brq.png"></img>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}


export default home;