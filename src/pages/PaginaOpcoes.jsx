import React from 'react';
import './PaginaOpcoes.css'; // Import custom CSS for styling
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
import tails from "../assets/tails.png";
 
const PaginaOpcoes = () => {
  return (
<div className="App">
      <div className="App-div">
        <img src={tails} alt="Tails Pixel Art" className="pixel-art" />
        <h1 className='ENTRE'>ENTRE COM</h1>
        <div className="buttons">
          <Link to={'/Login'}>
            <button onClick={() => alert('Cliente login')}>Sou Cliente</button>
          </Link>
          <Link to={'/Login1'}>
            <button onClick={() => alert('Desenvolvedor login')}>Sou Desenvolvedor</button>
          </Link>
          <Link to={'/Login2'}>
            <button onClick={() => alert('Administrador login')}>Sou Administrador</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default PaginaOpcoes;