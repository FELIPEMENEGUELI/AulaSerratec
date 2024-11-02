import { createContext, useContext, useState } from 'react';

const ContextProps = createContext();

export const ProviderProps = ({children}) => {
 
  const [email, setEmail] = useState('');

  return (
    <ContextProps.Provider value={{email, setEmail}}>
      {children}
    </ContextProps.Provider>
  );
};

export const useProps = () => useContext(ContextProps);
