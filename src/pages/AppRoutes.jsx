import React from "react";
import PaginaInicial from "./PaginaInicial";
import PaginaSobrevivencia from "./PaginaSobrevivencia";
import PaginaLogin from "./PaginaLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/Sobrevivencia" element={<PaginaSobrevivencia />} />
        <Route path="/Login" element={<PaginaLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;