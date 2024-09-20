import React from 'react';
import './PaginaCodin.css';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import sonic from "../assets/sonic.png";
 
const PaginaCodin = () => {
  return (
    <div className="container">
      <h2>Redefinir Senha</h2>
      <p>Coloque o código enviado para sua conta de Email:</p>
      <form>
        <label>Código:</label>
        <div className="code-inputs">
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
          <input type="text" maxLength="1" required />
        </div>
        <Link to={'/RedefinirSenha'}><button type="submit">CONFIRMAR</button></Link>
      </form>
      <Link to={'/Login'}><p>
        Lembrou a senha? <a href="">Faça login</a>
      </p></Link>
    </div>
  );
};
 
export default PaginaCodin;