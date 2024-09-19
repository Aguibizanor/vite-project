import React from 'react';
import './IndexPrincipal.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
 
const IndexPrincipal = () => { //carrosel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
 
  return (
<div className="app">
<header className="header">
<div className="logo"><img src={Logo} className='B'/></div>
<nav className="nav">
<Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
<a href="" style={{ fontSize: '40px' }}>Games</a>
<a href="" style={{ fontSize: '40px' }}>Suporte</a>
</nav>
<div className="search">
          <input type="text" placeholder="Search..." className="search-input"/>
          <button className="login-btn">
          <Link to={'/Login'}><button className="login-btn"><i className="fas fa-user-circle"></i>Log in</button></Link>
          </button>
        </div>
</header>
 
<main className="main">
<section className="intro">
<h1>EXPLORE O <br />
  MUNDO DOS<br />
   JOGOS</h1>
<p>Venha conhecer <br />
 nossa plataforma <br />onde você poderá <br />encontrar.</p>
<button className="cta-button">Conheça</button>
</section>
 
 
 
</main>
</div>
  );
};
 
export default IndexPrincipal;