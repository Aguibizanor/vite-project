import React from 'react';
import './PaginaMandarEmail.css';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
import viva from "../assets/viva.png";

const PaginaMandarEmail = () => {
  return (
    <div className='AAA1'>
      <div className="logo-container2">
        <img src={Logo} alt="Logo with text 'GL Game Legends'" className="logo1" />
      </div>
<div className="container">
<h1 className="W">Redefinir Senha</h1>
<p className='Redef'>Para redefinir sua senha, coloque seu Email:</p>
<form className='For'>
<input type="email" required className='LOLO'/>
<Link to={'/MandarCodin'}><button type="submit" className="mandar_email">MANDE EMAIL</button></Link>
</form>
<p className='KI'>
        Lembrou a senha? <Link to={'/Login'}><a href="">Faça login</a></Link>
</p>
<div className="bottom-left-character2">
        <img src={viva} alt="Pixel art character" className="character-icon2" />
      </div>
      <div className="bottom-right-character2">
        <img src={viva} alt="Pixel art character" className="character-icon2" />
      </div>
</div>
</div>
  );
};
export default PaginaMandarEmail;