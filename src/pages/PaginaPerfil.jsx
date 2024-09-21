import React, { useState } from "react";
import './PaginaPerfil.css'; // Importando o CSS
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";

function PaginaPerfil() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    senha: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(formData.cpf)) {
      newErrors.cpf = "CPF inválido. Formato correto: xxx.xxx.xxx-xx";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Formato correto: (xx) xxxx-xxxx";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Perfil atualizado com sucesso!");
    } else {
      alert("Por favor, corrija os erros no formulário.");
    }
  };

  return (
    <div className="perfil-container"> 
    <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      <header className="perfil-header">
        <div className="perfil-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="perfil-nav">
          <Link to={'/Index'} className="perfil-nav-link">Início</Link>
          <Link to={'/'} className="perfil-nav-link">Games</Link>
          <Link to={'/Suporte'} className="perfil-nav-link">Suporte</Link>
        </nav>
        <div className="perfil-search">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Buscar..." className="perfil-search-input" />
          <Link to={'/Perfil'}>
            <button className="perfil-login-btn">
              <i className="fas fa-user-circle"></i> Perfil
            </button>
          </Link>
        </div>
      </header>

      <div className="perfil-form-container">
        <h2 className="perfil-title">MEU PERFIL</h2>
        <form onSubmit={handleSubmit} className="perfil-form">
          <div className="perfil-field">
            <label>Nome:</label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="perfil-input"
            />
          </div>
          <div className="perfil-field">
            <label>CPF:</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="perfil-input"
            />
            {errors.cpf && <p className="perfil-error">{errors.cpf}</p>}
          </div>
          <div className="perfil-field">
            <label>Data de Nascimento:</label>
            <input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="perfil-input"
            />
          </div>
          <div className="perfil-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="perfil-input"
            />
            {errors.email && <p className="perfil-error">{errors.email}</p>}
          </div>
          <div className="perfil-field">
            <label>Telefone:</label>
            <input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="perfil-input"
            />
            {errors.telefone && <p className="perfil-error">{errors.telefone}</p>}
          </div>
          <div className="perfil-field">
            <label>Senha:</label>
            <input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="perfil-input"
            />
          </div>
          <button type="submit" className="perfil-button">
            Atualizar Perfil
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaginaPerfil;
