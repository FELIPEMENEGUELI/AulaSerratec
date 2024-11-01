// Rotas react-router-dom v5

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PageError } from "../pages/PageError";
import { Layout } from "../components/Layout";

export const Routers = () => {
  const messageError = "Pagina não encontrada!";
  const messageAccessDenied = "Você não tem acesso a essa pagina!";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageError message={messageError} />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}> 
          <Route path="/home" element={<Home />} />
        </Route>


        <Route path="/diretor" element={<PageError message={messageAccessDenied} />} />
      </Routes>
    </BrowserRouter>
  );
};
