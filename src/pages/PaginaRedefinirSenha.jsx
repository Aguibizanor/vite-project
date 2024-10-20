import React from 'react';
import './PaginaRedefinirSenha.css';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
import mario from "../assets/mario.png";
import esquerda from "../assets/esquerda.png";

const PaginaRedefinirSenha = () => {
  return (
    <div className='OIA'>
    <div className='AAA1'>
      <div className="logo-container2">
        <img src={Logo} alt="Logo with text 'GL Game Legends'" className="logo2" />
      </div>
<div className="container" >
<h1 className='H'>Redefinir Senha</h1>
<p className='VIVI'>Pronto! Agora coloque sua senha nova:</p>
<form className='KAKA'>
<label>Senha:</label>
<input type="password" required className='MUMU'/>
<label>Confirme senha:</label>
<input type="password" required className='MUMU'/>
<Link to={'/Login'}><button type="submit" className='FRUFRU'>CONFIRMAR</button></Link>
</form>
<p className='BABA'> 
        Lembrou a senha? <Link to={'/Login'}><a href="">Faça login</a></Link>
</p>
<div className="bottom-left-character3">
        <img src={mario} alt="Pixel art character" className="character-icon3" />
      </div>
      <div className="bottom-right-character3">
        <img src={mario} alt="Pixel art character" className="character-icon3" />
      </div>
      <Link to={'/MandarCodin'}><img src={esquerda} alt="Seta" className="SetaLog" style={{position: 'absolute', left:'1.8%', marginTop: '80px'}}/></Link>
</div>
</div>
</div>
  );
};
export default PaginaRedefinirSenha;