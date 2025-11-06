import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [email, setEmail] = useState('Simone');
  const [password, setPassword] = useState();

  const sofredor = 'vascainos'
  const feliz = 'botafogo'

  return (
    <AuthContext.Provider value={{ sofredor, feliz, email }}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => useContext(AuthContext);