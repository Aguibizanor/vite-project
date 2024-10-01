import React from 'react';
import './PaginaDescricao.css'; // Certifique-se de criar esse arquivo CSS para os estilos
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import gato1 from "../assets/gato1.png";
import gato2 from "../assets/gato2.png";
import gato3 from "../assets/gato3.png";
import esquerda from "../assets/esquerda.png"

const PaginaDescricao = () => {
  return (
    <div>
        <div className="app">
                        <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
                        </head>
                        <header className="header">
                        <div className="logo"><img src={Logo} alt="Logo" /></div>
                <nav className="nav">
                    <Link to={'/Index'} className="nav-text"><span style={{ fontSize: '39px'}}>Início</span></Link>
                    <Link to={'/'} className="nav-text"><span style={{ fontSize: '39px'}}>Games</span></Link>
                    <Link to={'/Suporte'} className="nav-text"><span style={{ fontSize: '39px'}}>Suporte</span></Link>
                    <Link to={'/Index'} className="nav-icon">
                        <i className="fas fa-home fa-2x" aria-hidden="true"></i>
                    </Link>
                    <Link to={'/'} className="nav-icon">
                        <i className="fas fa-gamepad fa-2x" aria-hidden="true"></i>
                    </Link>
                    <Link to={'/Suporte'} className="nav-icon">
                        <i className="fas fa-headset fa-2x" aria-hidden="true"></i>
                    </Link>
                </nav>
                <div className="search">
                    <i className="fas fa-search" style={{ fontSize: '20px', margin: '0 10px' }}></i>
                    <input type="text" placeholder="Search..." />
                    <Link to={'/Opcoes'}>
                        <button className="login-btn">
                            <i className="fas fa-user-circle"></i>
                        </button>
                    </Link>
                </div>
                        </header>
        </div>
    <div className="game-profile-container">
                        
      <div className="game-profile-header">
        <div className="developer-profile">
        <i className="fas fa-user-circle fa-3x"></i>
          <p style={{fontSize: "30px"}}>Courier Kat</p>
        </div>
      </div>

      <div className="game-profile-content">
        <div className="main-content">
          {/* Imagem principal do jogo */}
          <img
            src={gato3}
            alt="Happy Cat Tavern"
            className="main-game-img"
          />
          {/* Descrição */}
          <div className="description">
            <h1>Happy Cat Tavern: Typing Challenge</h1>
            <p>
              Batou quer beber o máximo de milkshakes que puder enquanto os
              clientes da taverna o animam. Cada palavra é um milkshake para
              Batou beber. Digite com rapidez e precisão para ganhar pontos e
              desbloquear conquistas!
            </p>
            {/* Créditos */}
            <div className="credits">
              <h3>Créditos:</h3>
              <p>
                <strong>Artista:</strong> Miyaualit (
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  Twitter
                </a>{' '}
                /{' '}
                <a href="https://etsy.com" target="_blank" rel="noreferrer">
                  Etsy
                </a>
                )<br />
                <strong>Programador:</strong> OnyxHeart (
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
            src={gato1}
            alt="Descrição 1"
            className="desc1-img"
          />
          <img
            src={gato2}
            alt="Descrição 2"
            className="desc1-img"
          />
        </div>
      </div>

      <div className="game-profile-footer">
        <button className="Download-btn">Download</button>
      </div>
    </div>
    <Link to={'/'}><img src={esquerda} alt="Seta" style={{position: 'absolute', left:'5.8%', marginTop: '-125px'}}/></Link>
    </div>
  );
};

export default PaginaDescricao;
