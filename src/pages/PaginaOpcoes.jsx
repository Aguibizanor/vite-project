import React from 'react';
import './PaginaOpcoes.css'; // Import custom CSS for styling
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
import tails from "../assets/tails.png";
import esquerda from "../assets/esquerda.png";

const PaginaOpcoes = () => {
  return (
    <div className="app">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <header className="cabecalho">
        <div className="conteudo-cabecalho">
          <h1 className="logo">
            <a href="/" title="Game Legends">
              <img src={Logo} alt="Logo do Game Legends" />
            </a>
          </h1>
          <nav className="navegacao">
            <Link to={'/Index'} className="nav-text nav-item"><i className="fas fa-home"></i><span className="nav-label">Início</span></Link>
            <Link to={'/'} className="nav-text nav-item"><i className="fas fa-gamepad"></i><span className="nav-label">Games</span></Link>
            <Link to={'/Que'} className="nav-text nav-item"><i className="fas fa-question-circle"></i><span className="nav-label">Sobre</span></Link>
            <Link to={'/Suporte'} className="nav-text nav-item"><i className="fas fa-headset"></i><span className="nav-label">Suporte</span></Link>
          </nav>
          <form className="formulario-pesquisa" action="/search">
            <input required="required" name="q" placeholder="Pesquisar Jogos, Tags ou Criadores" className="input-pesquisa" type="text"/>
            <button className="botao-pesquisa" aria-label="Search">
              <svg version="1.1" width="18" height="18" role="img" viewBox="0 0 24 24" aria-hidden="true" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" className="icone-pesquisa" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
          <div className="painel-usuario">
            <Link to={'/Login'} className="link-usuario">Login</Link>
            <Link to={'/Cadastro'} className="link-usuario">Registre-se</Link>
          </div>
        </div>
      </header>

      <div className="App9">
        
        <div className="App-div">
          <img src={tails} alt="Tails Pixel Art" className="pixel-art" />
          <h1 className='ENTRE'>ENTRE COM</h1>
          <div className="buttons">
            <Link to={'/Login'}>
              <button onClick={() => alert('Cliente login')} className='OI'>Sou Cliente</button>
            </Link>
            <Link to={'/Login1'}>
              <button onClick={() => alert('Desenvolvedor login')} className='OI'>Sou Desenvolvedor</button>
            </Link>
            <Link to={'/Login2'}>
              <button onClick={() => alert('Administrador login')} className='OI'>Sou Administrador</button>
            </Link>
          </div>
          <Link to={'/Index'}><img src={esquerda} alt="Seta" className="SetaOp" /></Link>
        </div>
      </div>

      <footer className="rodape">
        <div className="conteudo-rodape">
          <div className="secao-rodape sobre">
            <h1 className="logo-rodape"><span>Game</span>Legends</h1>
            <p>
              Game Legends é uma plataforma dedicada a jogos indie, fornecendo uma maneira fácil para desenvolvedores distribuírem seus jogos e para jogadores descobrirem novas experiências.
            </p>
            <div className="contato-rodape">
              <span><i className="fas fa-phone"></i> &nbsp; (99) 99999-9999</span>
              <span><i className="fas fa-envelope"></i> &nbsp; info@gamelegends.com</span>
            </div>
            <div className="redes-sociais">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="secao-rodape links">
            <h2>Links Rápidos</h2>
            <ul>
              <a href="#"><li>Eventos</li></a>
              <a href="#"><li>Equipe</li></a>
              <a href="#"><li>Missão</li></a>
              <a href="#"><li>Serviços</li></a>
              <a href="#"><li>Afiliados</li></a>
            </ul>
          </div>
        </div>
        <div className="rodape-inferior">
          &copy; gamelegends.com | Feito pelo time do Game Legends 
        </div>
      </footer>
    </div>
  );
};

export default PaginaOpcoes;