import { useState } from "react";
import { useNavigate } from "react-router"
import { useAuth } from "../../hooks/AuthContext";

export const LoginSegundo = () => {

  const navigate = useNavigate();
  const { email } = useAuth();


  const navegar = () => {
    navigate("/about");
  }

  return (
    <div>
        <h1>Tela de login</h1>
        <input type="text" value={email} />

        <button onClick={navegar}>Ir para pagina inicial</button>
        
    </div>
  )
}