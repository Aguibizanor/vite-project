import React, { useState } from 'react';
import './PaginaPerfDesenvolvedor.css'; // Importa o CSS
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";

const PaginaPerfDesenvolvedor = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    telefone: '',
    senha: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }
    
    if (formData.cpf.length !== 14) {
      newErrors.cpf = 'CPF inválido';
    }
    
    if (formData.telefone.length < 10) {
      newErrors.telefone = 'Telefone inválido';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Perfil atualizado com sucesso!');
    }
  };

  return (
    <div>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <header className="pagina-perfil-header">
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
                    <Link to={'/Perfil1'}>
                    <button className="login-btn">
                            <i className="fas fa-user-circle"></i> Perfil
                        </button>
                    </Link>
                </div>
      </header>
      <div className="pagina-perfil-container">
        <h2 className="pagina-perfil-title">MEU PERFIL</h2>
        <form onSubmit={handleSubmit} className="pagina-perfil-form">
          <div className="pagina-perfil-field">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
          </div>
          <div className="pagina-perfil-field">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
            {errors.cpf && <p className="pagina-perfil-error">{errors.cpf}</p>}
          </div>
          <div className="pagina-perfil-field">
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
          </div>
          <div className="pagina-perfil-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
            {errors.email && <p className="pagina-perfil-error">{errors.email}</p>}
          </div>
          <div className="pagina-perfil-field">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
            {errors.telefone && <p className="pagina-perfil-error">{errors.telefone}</p>}
          </div>
          <div className="pagina-perfil-field">
            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="pagina-perfil-input"
            />
          </div>
          <button type="submit" className="pagina-perfil-button">
            Atualizar Perfil
          </button>
        </form>
        <footer className="pagina-perfil-footer">
          <Link to={'/Criar'}><button>➕</button></Link>
        </footer>
      </div>
    </div>
  );
};

export default PaginaPerfDesenvolvedor;
