import { useContext, createContext, useState } from 'react';

export const ContextoInformacoes = createContext();

export const ProvedorInformacoes = ({ children }) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [user, setUser] = useState(false);

  async function validateUser() {
    setIsLoading(true);

    const response = await CheckUser(email, password);
    const userAutenticado = response.data.find(userValidate => userValidate.email === email && userValidate.password === password);

    if(!userAutenticado) {
      console.log('Erro ao realizar login')
      setIsLoading(false);
      return;
    }

    setUser(response.data);
    setIsLoading(false);
  }

  return (
    <ContextoInformacoes.Provider value={{ name, setName, password, setPassword, autenticado, user, validateUser }}>
      {children}
    </ContextoInformacoes.Provider>
  )
};

export const useAuth = () => useContext(ContextoInformacoes);

// UseContext diz para o useAuth que, ele vai acessar os valores do ContextoInformacoes que, esta inserido no provedor ProvedorInformacoes;
// useAuth recebe => ContextoInformacoes atraves do useContext;
// ContextoInformacoes passa os valores que esta recebendo do ProvedorInformacoes, que prove os valores;