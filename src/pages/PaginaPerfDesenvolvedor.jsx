import React, { useState } from 'react';
import './PaginaPerfDesenvolvedor.css';
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
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
</head>
<header className="header">
<div className="logo">
<img src={Logo} alt="Logo" />
</div>
<nav className="nav">
<Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
                                        <Link to={'/'}><a href="" style={{ fontSize: '40px', marginLeft: '50px' }}>Games</a></Link>
                                        <Link to={'/Suporte'}><a href="" style={{ fontSize: '40px', marginLeft: '10px'  }}>Suporte</a></Link>
</nav>
<div className="search">
<i className="fas fa-search"></i>
<input type="text" placeholder="Buscar..." />
<Link to={'/Perfil1'}><button className="login-btn"><i className="fas fa-user-circle"></i>
            Perfil
</button></Link>
</div>
</header>
<div className="container">
<h2 className="title">MEU PERFIL</h2>
<form onSubmit={handleSubmit} className="form">
<div className="field">
<label>Nome:</label>
<input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="input"
            />
</div>
<div className="field">
<label>CPF:</label>
<input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="input"
            />
            {errors.cpf && <p className="error">{errors.cpf}</p>}
</div>
<div className="field">
<label>Data de Nascimento:</label>
<input
              type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              className="input"
            />
</div>
<div className="field">
<label>Email:</label>
<input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
            {errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="field">
<label>Telefone:</label>
<input
              type="text"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="input"
            />
            {errors.telefone && <p className="error">{errors.telefone}</p>}
</div>
<div className="field">
<label>Senha:</label>
<input
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="input"
            />
</div>
<button type="submit" className="button">
            Atualizar Perfil
</button>
</form>
<footer className="footer">
<Link to={'/Criar'}><button>➕</button></Link>
<button>💬</button>
</footer>
</div>
</div>
  );
};
export default PaginaPerfDesenvolvedor;