import React, { useState } from "react";
import './PaginaPerfil.css'; // Importando o CSS
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
function ProfileForm() {
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
    // Validação CPF (apenas exemplo simples)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(formData.cpf)) {
      newErrors.cpf = "CPF inválido. Formato correto: xxx.xxx.xxx-xx";
    }
    // Validação Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    // Validação Telefone
    const telefoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!telefoneRegex.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Formato correto: (xx) xxxx-xxxx";
    }
    setErrors(newErrors);
    // Retornar true se não houver erros
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Perfil atualizado com sucesso!");
      // Lógica para salvar os dados
    } else {
      alert("Por favor, corrija os erros no formulário.");
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
<div className="search"><i className="fas fa-search
"></i>
<input type="text" placeholder="Buscar..." />
<Link to={'/Perfil'}><button className="login-btn"><i className="fas fa-user-circle"></i>
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
</div>
</div>
  );
}
export default ProfileForm;