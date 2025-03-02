import React, { useEffect, useState, useRef } from 'react';
import './IndexPrincipal.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

const IndexPrincipal = () => {
  const [data, setData] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('/Carrossel.json')
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  const handleLeftClick = () => {
    const width = carousel.current.clientWidth;
    carousel.current.scrollLeft -= width;
  };

  const handleRightClick = () => {
    const width = carousel.current.clientWidth;
    carousel.current.scrollLeft += width;
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  if (!data || !data.length) return null;

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
          <nav className={`navegacao ${menuAberto ? 'ativo' : ''}`}>
            <Link to={'/Index'} className="nav-text nav-item"><i className="fas fa-home"></i><span className="nav-label">Início</span></Link>
            <Link to={'/'} className="nav-text nav-item"><i className="fas fa-gamepad"></i><span className="nav-label">Games</span></Link>
            <Link to={'/Que'} className="nav-text nav-item"><i className="fas fa-question-circle"></i><span className="nav-label">Sobre</span></Link>
            <Link to={'/Suporte'} className="nav-text nav-item"><i className="fas fa-headset"></i><span className="nav-label">Suporte</span></Link>
          </nav>
          <button className="hamburguer" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
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

      <main className="principal">
        <section className="intro">
          <h1>EXPLORE O <br /> MUNDO<br /> DOS JOGOS</h1>
          <p>Venha conhecer <br /> nossa plataforma <br />onde você poderá <br />encontrar jogos <br /> da nossa comunidade.</p>
          <Link to={'/'}><button className="cta-button">Conheça <i className="fas fa-arrow-circle-right"></i></button></Link>
        </section>
        <section>
          <div className="carrossel-container">
            <button className="left" onClick={handleLeftClick}><img src={left} alt="esquerda" /></button>
            <div className="carrossel" ref={carousel}>
              {data.map((item) => {
                const { id, name, descricao, imagem } = item;
                return (
                  <div className="item" key={id}>
                    <div className="imag">
                      <img src={imagem} alt={name} />
                    </div>
                    <div className="info">
                      <span className="name">{name}</span>
                      <span className="texto">{descricao}</span>
                      <Link to={'/'}><span className="butao">Veja Mais <i className="fas fa-arrow-circle-right"></i></span></Link>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="right" onClick={handleRightClick}><img src={right} alt="direita" /></button>
          </div>
        </section>
      </main>

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

export default IndexPrincipal;