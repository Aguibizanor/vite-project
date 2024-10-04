import React, { useEffect, useState, useRef } from 'react';
import './IndexPrincipal.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
 
const IndexPrincipal = () => { //carrosel
  const [data, setData] = useState([]); // Define o estado para armazenar os dados
  const carousel = useRef(null); // Ref para o carrossel

  useEffect(() => {
    fetch('/Carrossel.json') // Caminho corrigido
      .then((response) => response.json())
      .then(setData)
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth + 45;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth + 45;
  };

  if (!data || !data.length) return null;

  return (
<div className="app">
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
                            <i className="fas fa-user-circle"></i> Perfil
                        </button>
                    </Link>
                </div>
</header>
 
<main className="main">
<section className="intro">
<h1>EXPLORE O <br />
  MUNDO<br />
  DOS JOGOS</h1>
<p>Venha conhecer <br />
 nossa plataforma <br />onde você poderá <br />encontrar jogos <br /> 
da nossa comunidade.</p>
<Link to={'/Opcoes'}><button className="cta-button">Conheça <i className="fas fa-arrow-circle-right"></i></button></Link>
</section>
 <section>
  <div className="carrossel">
    <div className="carousel" ref={carousel}>
    {data.map((item) => {
          const {id, name, descricao, imagem} = item;
          return (
      <div class="item" key={id}>
        <div className="imag">
          <img src={imagem} alt={name}/>
        </div>
        <div className="info">
          <span className="name">{name}</span>
          <span className="texto">{descricao}</span>
          <Link to={'/'}><span className="butao">Veja Mais <i className="fas fa-arrow-circle-right"></i></span></Link>
          
        </div>
      </div>
        );
    })};
    </div>
    <div className="buttons">
      <button onClick={handleLeftClick}><img src={left} alt="esquerda" /></button>
      <button onClick={handleRightClick}><img src={right} alt="direita" /></button>
    </div>
  </div>
 </section>
 
 
</main>
</div>
  );
};
 
export default IndexPrincipal;