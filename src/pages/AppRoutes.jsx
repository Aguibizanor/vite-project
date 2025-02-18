import React from "react";
import IndexPrincipal from "./IndexPrincipal";
import PaginaInicial from "./PaginaInicial";
import PaginaInicial1 from "./PaginaInicial1";
import PaginaInicial2 from "./PaginaInicial2";
import PaginaSobrevivencia from "./PaginaSobrevivencia";
import PaginaLogin from "./PaginaLogin";
import PaginaCartas from "./PaginaCartas";
import PaginaCadastro from "./PaginaCadastro";
import PaginaWindows from "./PaginaWindows";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PaginaTerror from "./PaginaTerror";
import PaginaEsporte from "./PaginaEsporte";
import PaginaAventura from "./PaginaAventura";
import PaginaEducacional from "./PaginaEducacional";
import PaginaMacOs from "./PaginaMacOs";
import PaginaAndroid from "./PaginaAndroid";
import PaginaiOs from "./PaginaiOs";
import PaginaHoje from "./PaginaHoje";
import PaginaEssasemana from "./PaginaEssasemana";
import PaginaEssemes from "./PaginaEssemes";
import PaginaDesenvolvido from "./PaginaDesenvolvido";
import PaginaDesenvolvendo from "./PaginaDesenvolvendo";
import PaginaSuporte from "./PaginaSuporte";
import PaginaMandarEmail from "./PaginaMandarEmail";
import PaginaOpcoes from "./PaginaOpcoes";
import PaginaCodin from "./PaginaCodin";
import PaginaRedefinirSenha from "./PaginaRedefinirSenha";
import PaginaPerfil from "./PaginaPerfil";
import PaginaLogin1 from "./PaginaLogin1";
import PaginaLogin2 from "./PaginaLogin2";
import PaginaPerfDesenvolvedor from "./PaginaPerfDesenvolvedor";
import PaginaCriarProjeto from "./PaginaCriarProjeto";
import PaginaDescricao from "./PaginaDescricao";
import PaginaDescricao1 from "./PaginaDescricao1";
import PaginaDescricao2 from "./PaginaDescricao2";
import PaginaQuem from "./PaginaQuem";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Index" element={<IndexPrincipal/>} />
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/1" element={<PaginaInicial1 />} />
        <Route path="/2" element={<PaginaInicial2 />} />
        <Route path="/Sobrevivencia" element={<PaginaSobrevivencia />} />
        <Route path="/Login" element={<PaginaLogin />} />
        <Route path="/Login1" element={<PaginaLogin1 />} />
        <Route path="/Login2" element={<PaginaLogin2 />} />
        <Route path="/Cartas" element={<PaginaCartas />} />
        <Route path="/Cadastro" element={<PaginaCadastro />} />
        <Route path="/Windows" element={<PaginaWindows />} />
        <Route path="/Terror" element={<PaginaTerror/>} />
        <Route path="/Esporte" element={<PaginaEsporte/>} />
        <Route path="/Aventura" element={<PaginaAventura/>} />
        <Route path="/Educacional" element={<PaginaEducacional/>} />
        <Route path="/MacOs" element={<PaginaMacOs/>} />
        <Route path="/Android" element={<PaginaAndroid/>} />
        <Route path="/iOs" element={<PaginaiOs/>} />
        <Route path="/Hoje" element={<PaginaHoje/>} />
        <Route path="/Essasemana" element={<PaginaEssasemana/>} />
        <Route path="/Essemes" element={<PaginaEssemes/>} />
        <Route path="/Desenvolvido" element={<PaginaDesenvolvido/>} />
        <Route path="/Desenvolvendo" element={<PaginaDesenvolvendo/>} />
        <Route path="/Suporte" element={<PaginaSuporte/>} />
        <Route path="/MandarEmail" element={<PaginaMandarEmail/>} />
        <Route path="/Opcoes" element={<PaginaOpcoes/>} />
        <Route path="/MandarCodin" element={<PaginaCodin/>} />
        <Route path="/RedefinirSenha" element={<PaginaRedefinirSenha/>} />
        <Route path="/Perfil" element={<PaginaPerfil/>} />
        <Route path="/Perfil1" element={<PaginaPerfDesenvolvedor/>} />
        <Route path="/Criar" element={<PaginaCriarProjeto/>} />
        <Route path="/Descricao" element={<PaginaDescricao/>} />
        <Route path="/Descricao1" element={<PaginaDescricao1/>} />
        <Route path="/Descricao2" element={<PaginaDescricao2/>} />
        <Route path="/Que" element={<PaginaQuem/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;