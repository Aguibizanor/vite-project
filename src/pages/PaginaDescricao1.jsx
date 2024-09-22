import React from 'react';
import './PaginaDescricao1.css'; // Certifique-se de criar esse arquivo CSS para os estilos
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import clap from "../assets/clap.png";
import hum from "../assets/hum.png";
import casin from "../assets/casin.png";
import esquerda from "../assets/esquerda.png"

const PaginaDescricao1 = () => {
  return (
    <div>
        <div className="app">
                        <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
                        </head>
                        <header className="header">
                                <div className="logo"><img src={Logo} /></div>
                                <nav className="nav">
                                        <Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
                                        <Link to={'/'}><a href="" style={{ fontSize: '40px', marginLeft: '50px' }}>Games</a></Link>
                                        <Link to={'/Suporte'}><a href="" style={{ fontSize: '40px', marginLeft: '10px'  }}>Suporte</a></Link>
                                </nav>
                                <div className="search"><i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search..." />
                                        <Link to={'/Opcoes'}><button className="login-btn"><i className="fas fa-user-circle"></i> Log In</button></Link>
                                </div>
                        </header>
        </div>
    <div className="game-profile-container">
                        
      <div className="game-profile-header">
        <div className="developer-profile">
        <i className="fas fa-user-circle fa-3x"></i>
          <p style={{fontSize: "30px"}}>ClapFrace</p>
        </div>
      </div>

      <div className="game-profile-content">
        <div className="main-content">
          {/* Imagem principal do jogo */}
          <img
            src={clap}
            alt="Happy Cat Tavern"
            className="main-game-img"
          />
          {/* Descrição */}
          <div className="description">
            <h1>[Nightmare Files] CLAP CLAP</h1>
            <p>
            Clap Clap é um pequeno jogo de terror indie que coloca você no lugar de um cuidador de casa, 
            vivenciando ocorrências estranhas em uma casa aparentemente comum, vamos ver se você aguenta 
            passar um tempo nessa casa!
            </p>
            {/* Créditos */}
            <div className="credits">
              <h3>Créditos:</h3>
              <p>
                <strong>Artista:</strong> Clapfrace (
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter
                </a>{' '}
                /{' '}
                <a href="https://etsy.com" target="_blank" rel="noreferrer">
                  Clapfrx
                </a>
                )<br />
                <strong>Programador:</strong> Clapfrace (
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter
                </a>
                )
              </p>
            </div>
          </div>
        </div>

        {/* Imagens de descrição */}
        <div className="extra-images">
          <img
            src={hum}
            alt="Descrição 1"
            className="desc2-img"
          />
          <img
            src={casin}
            alt="Descrição 2"
            className="desc2-img"
          />
        </div>
      </div>

      <div className="game-profile-footer">
        <button className="Download-btn">Download</button>
      </div>
    </div>
    <Link to={'/Terror'}><img src={esquerda} alt="Seta" style={{position: 'absolute', left:'5.8%', marginTop: '-125px'}}/></Link>
    </div>
  );
};

export default PaginaDescricao1;
