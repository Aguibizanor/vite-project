import React from 'react';
import './PaginaCodin.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import sonic from "../assets/sonic.png";
 
 
const PaginaCodin = () => {
  return (
    <div className='AAA'>
      <div className="logo-container1">
        <img src={Logo} alt="Logo with text 'GL Game Legends'" className="logo1" />
      </div>
    <div className="container">
      <h1 className='Titu'>Redefinir Senha</h1>
      <p className='OP'>Coloque o código enviado para sua conta de Email:</p>
      <form className='Form'>
        <div className="code-inputs">
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />                    
        </div>
        <Link to={'/RedefinirSenha'}><button type="submit" className='botãoconfirmar'>CONFIRMAR</button></Link>
      </form>
      <Link to={'/Login'}><p className='Pe'>
        Lembrou a senha? <a href="">Faça login</a>
      </p></Link>
      <div className="bottom-left-character1">
        <img src={sonic} alt="Pixel art character" className="character-icon1" />
      </div>
      <div className="bottom-right-character1">
        <img src={sonic} alt="Pixel art character" className="character-icon1" />
      </div>
    </div>
    </div>
  );
};
 
export default PaginaCodin;