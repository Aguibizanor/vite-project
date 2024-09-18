import React from "react";
import PaginaInicial from "./PaginaInicial";
import PaginaSobrevivencia from "./PaginaSobrevivencia";
import PaginaLogin from "./PaginaLogin";
import PaginaCartas from "./PaginaCartas";
import PaginaCadastro from "./PaginaCadastro";
import PaginaWindows from "./PaginaWindows";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/Sobrevivencia" element={<PaginaSobrevivencia />} />
        <Route path="/Login" element={<PaginaLogin />} />
        <Route path="/Cartas" element={<PaginaCartas />} />
        <Route path="/Cadastro" element={<PaginaCadastro />} />
        <Route path="/Windows" element={<PaginaWindows />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;