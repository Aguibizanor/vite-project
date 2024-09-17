import React from "react";
import PaginaInicial from "./PaginaInicial";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;