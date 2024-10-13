import React, { useState } from "react";
import "./PaginaLogin.css";
import { Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import Logo from "../assets/logo.site.tcc.png";
import stardew from "../assets/stardew.png";
import esquerda from "../assets/esquerda.png";
import axios from "axios";

function PaginaLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {  // Mudança de GET para POST
        email: email,
        senha: senha,
      });
      console.log(response.data);

      // Se o login for bem-sucedido, redireciona para a página desejada
      if (response.status === 200) {
        alert("Login realizado com sucesso!");
        navigate('/pagina-desejada'); // Redireciona após o login
      }
    } catch (error) {
      setErrorMessage("Email ou senha incorretos.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      {/* Logo no canto superior esquerdo */}
      <div className="logo-container">
        <img src={Logo} alt="Logo with text 'GL Game Legends'" className="logo" />
      </div>

      {/* Formulário centralizado */}
      <div className="form-container">
        <div className="header text-center mb-6">
          <h1 className="titulo text-2xl font-bold text-transparent bg-clip-text gradient-button" style={{ marginLeft: '78px' }}>
            Login Cliente
          </h1>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-single mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
              required
            />
          </div>
          <div className="input-single mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha:
            </label>
            <input
              className="input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)} // Atualiza o estado da senha
              required
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} {/* Exibe a mensagem de erro */}
          <div className="flex items-center justify-between">
            <Link to={"/Perfil"}><button className="login-button" type="submit">
              LOGIN
            </button></Link>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            Ainda não tem conta?{" "}
            <Link to="/Cadastro">
              <span className="text-blue-500">Cadastre-se</span>
            </Link>
          </p>
          <p className="text-gray-500 text-sm">
            Esqueceu a senha?{" "}
            <Link to="/MandarEmail">
              <span className="text-blue-500">Redefinir senha</span>
            </Link>
          </p>
        </div>
        <Link to={'/Opcoes'}>
          <img src={esquerda} alt="Seta" className="SetaLog" />
        </Link>
      </div>

      {/* Personagens pixelados no canto inferior esquerdo e direito */}
      <div className="bottom-left-character">
        <img src={stardew} alt="Pixel art character" className="character-icon" />
      </div>
      <div className="bottom-right-character">
        <img src={stardew} alt="Pixel art character" className="character-icon" />
      </div>
    </div>
  );
}

export default PaginaLogin;