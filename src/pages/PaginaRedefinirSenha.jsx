import React from 'react';
import './PaginaRedefinirSenha.css';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
import mario from "../assets/mario.png";

const PaginaRedefinirSenha = () => {
  return (
<div className="container">
<h1>Redefinir Senha</h1>
<p>Pronto! Agora coloque sua senha nova:</p>
<form>
<label>Senha:</label>
<input type="password" required />
<label>Confirme senha:</label>
<input type="password" required />
<button type="submit">CONFIRMAR</button>
</form>
<p>
        Lembrou a senha? <Link to={'/Login'}><a href="">Faça login</a></Link>
</p>
</div>
  );
};
export default PaginaRedefinirSenha;