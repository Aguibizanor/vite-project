import React, { useState } from "react";
import './PaginaCriarProjeto.css'; // Importa o arquivo CSS
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";

function PaginaCriarProjeto() {
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nomeProjeto || !descricao || !dataInicio || !tecnologias) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      console.log("Nome do Projeto:", nomeProjeto);
      console.log("Descrição:", descricao);
      console.log("Data de Início:", dataInicio);
      console.log("Tecnologias:", tecnologias);
    }
  };

  return (
    <div>
      <header className="pagina-criar-projeto-header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="nav">
          <Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
          <Link to={'/'}><a href="" style={{ fontSize: '40px', marginLeft: '50px' }}>Games</a></Link>
          <Link to={'/Suporte'}><a href="" style={{ fontSize: '40px', marginLeft: '10px' }}>Suporte</a></Link>
        </nav>
        <div className="search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Buscar..." />
          <Link to={'/Perfil1'}><button className="login-btn"><i className="fas fa-user-circle"></i> Perfil</button></Link>
        </div>
      </header>
      <div className="pagina-criar-projeto-container">
        <div className="pagina-criar-projeto-title">
          <h1>Criar Meu Projeto</h1>
        </div>
        <form onSubmit={handleSubmit} className="pagina-criar-projeto-form">
          <div className="pagina-criar-projeto-field">
            <label>Nome do Projeto:</label>
            <input
              type="text"
              value={nomeProjeto}
              onChange={(e) => setNomeProjeto(e.target.value)}
              className="pagina-criar-projeto-input"
            />
          </div>
          <div className="pagina-criar-projeto-field">
            <label>Descrição:</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="pagina-criar-projeto-input"
            />
          </div>
          <div className="pagina-criar-projeto-field">
            <label>Data de Início:</label>
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="pagina-criar-projeto-input"
            />
          </div>
          <div className="pagina-criar-projeto-field">
            <label>Tecnologias Utilizadas:</label>
            <input
              type="text"
              value={tecnologias}
              onChange={(e) => setTecnologias(e.target.value)}
              className="pagina-criar-projeto-input"
              placeholder="Ex: React, Node.js, MySQL"
            />
          </div>
          {error && <div className="pagina-criar-projeto-error">{error}</div>}
          <Link to={'/'}><button type="submit" className="pagina-criar-projeto-button">Criar Projeto</button></Link>
        </form>
      </div>
    </div>
  );
}

export default PaginaCriarProjeto;
