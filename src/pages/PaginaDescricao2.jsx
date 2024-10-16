import React from 'react';
import './PaginaDescricao2.css'; // Certifique-se de criar esse arquivo CSS para os estilos
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import our from "../assets/our.png";
import our1 from "../assets/our1.png";
import our2 from "../assets/our2.png";
import esquerda from "../assets/esquerda.png"

const PaginaDescricao2 = () => {
  return (
    <div className='GIT'>
        <div className="app7">
                        <head>
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
                        </head>
                        <header className="header">
                        <div className="logo"><img src={Logo} alt="Logo" /></div>
                        <nav className="nav">
                    <Link to={'/Index'} className="nav-text"><span style={{ fontSize: '39px'}}>Início</span></Link>
                    <Link to={'/'} className="nav-text"><span style={{ fontSize: '39px'}}>Games</span></Link>
                    <Link to={'/Que'} className="nav-text"><span style={{ fontSize: '40px' }}>Sobre</span></Link>
                    <Link to={'/Suporte'} className="nav-text"><span style={{ fontSize: '39px'}}>Suporte</span></Link>
                    <Link to={'/Que'} className="nav-icon">
                    <i className="fas fa-id-badge fa-2x" aria-hidden="true"></i></Link>
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
                            <i className="fas fa-user-circle"></i> Log in
                        </button>
                    </Link>
                </div>
                        </header>
        </div>
    <div className="game-profile-container">
                        
      <div className="game-profile-header">
        <div className="developer-profile">
        <i className="fas fa-user-circle fa-3x"></i>
          <p style={{fontSize: "30px"}}>Lest-Aian</p>
        </div>
      </div>

      <div className="game-profile-content">
        <div className="main-content">
          {/* Imagem principal do jogo */}
          <img
            src={our}
            alt="Our Life"
            className="main-game-img"
          />
          {/* Imagens de descrição */}
        <div className="extra-images1">
          <img
            src={our1}
            alt="Descrição 1"
            className="desc-img"
          />
          <img
            src={our2}
            alt="Descrição 2"
            className="desc-img"
          />
        </div>
          {/* Descrição */}
          <div className="description">
            <h1>Our Life: Now & Forever</h1>
            <p>
            Um avião de papel, dois novos vizinhos, quatro outonos e uma vida única. 
            Crie uma experiência totalmente sua nesta história quase totalmente personalizável e repleta de opções, 
            onde você cresce desde a infância até a idade adulta.
            </p>
            {/* Créditos */}
            <div className="credits">
              <h3>Créditos:</h3>
              <p>
                <strong>Artista:</strong> Andy Hill (
                <a href="https://www.instagram.com/gbpatchgames?igsh=MWZ1eThjeTd1M2JkdQ==" target="_blank" rel="noreferrer">
                  Instagram
                </a>{' '}
                /{' '}
                <a href="https://etsy.com" target="_blank" rel="noreferrer">
                  Hilland
                </a>
                )<br />
                <strong>Programador:</strong> Sandy Frost (
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
            src={our1}
            alt="Descrição 1"
            className="desc-img"
          />
          <img
            src={our2}
            alt="Descrição 2"
            className="desc-img"
          />
        </div>
      </div>

      <div className="game-profile-footer">
        <button className="Download-btn">Download</button>
      </div>
    </div>
    <Link to={'/'}><img src={esquerda} alt="Seta" className="SetaLog" style={{position: 'absolute', left:'5.8%', marginTop: '-195px'}}/></Link>
    </div>
  );
};

export default PaginaDescricao2;
