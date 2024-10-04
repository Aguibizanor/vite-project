import React, { useState } from "react";
import './PaginaCriarProjeto.css'; // Importa o arquivo CSS
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import esquerda from "../assets/esquerda.png";
 
function PaginaCriarProjeto() {
  const [nomeProjeto, setNomeProjeto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [tecnologias, setTecnologias] = useState("");
  const [image, setImage] = useState(""); // Adicionando estado para a imagem
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
      console.log("Imagem:", image); // Exibir a imagem no console
    }
  };
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result); // Atualiza o estado da imagem
      };
      reader.readAsDataURL(file);
    }
  };
 
  const handleButtonClick = () => {
    document.getElementById('fileInput').click();
  };
 
  return (
    <div>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <header className="pagina-criar-projeto-header">
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
      <div className="pagina-criar-projeto-container">
        <div className="pagina-criar-projeto-title">
          <h1>Criar Meu Projeto</h1>
        </div>
        <form onSubmit={handleSubmit} className="pagina-criar-projeto-form">
          <div>
          <div className="pagina-criar-projeto-field">
  <label>Selecionar Imagem:</label>
  <div className="image-upload-wrapper">
    <button type="button" onClick={handleButtonClick} className="pagina-criar-projeto-button">Selecionar Imagem</button>
    <input
      type="file"
      id="fileInput"
      accept="image/*"
      onChange={handleFileChange}
      style={{ display: 'none' }}
    />
    {image && (
      <div className="image-preview">
        <img src={image} alt="Preview" />
      </div>
    )}
  </div>
</div>
           
 
          </div>
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
          <button type="submit" className="pagina-criar-projeto-button">Criar Projeto</button>
        </form>
      </div>
      <Link to={'/Perfil1'}><img src={esquerda} alt="Seta" style={{position: 'absolute', left:'19.8%', marginTop: '-130px'}}/></Link>
    </div>
  );
}
 
export default PaginaCriarProjeto;