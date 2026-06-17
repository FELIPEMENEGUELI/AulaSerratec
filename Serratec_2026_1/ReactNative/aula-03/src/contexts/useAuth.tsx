import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

type AuthContextType = {
  nome: string;
  setNome: (value: string) => void;
  removeData: (value: string) => void;
  saveData: (value: string) => void;
}

const AuthContext = createContext<AuthContextType>({
  nome: '',
  setNome: () => { },
  removeData: () => { },
  saveData: () => { },
});

interface PropsProvider {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: PropsProvider ) => {

  const [nome, setNome] = useState<string>('');
  const navigate = useNavigation();

  const saveData = async (user: string) => {

    try {
      await AsyncStorage.setItem('@user', user); 
      console.log('Dados salvos com sucesso');

    } catch (error) {
      console.log('Erro ao salvar os dados', error);
    }
  }
  
  const removeData = async (key: string) => {

    try {
      await AsyncStorage.removeItem(key);
      console.log('Dados removidos com sucesso!');

    } catch (error) {
      console.log('Erro ao remover os dados', error);
    }
  }

  const getData = async () => {

    try {
      const value = await AsyncStorage.getItem('@user');

      if(value !== null) {
        console.log('Dados coletados com sucesso', value);
        setNome(value);
        navigate.navigate('StackHome');
      }

    } catch (error) {
      console.log('Erro ao buscar os dados', error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <AuthContext.Provider value={{ nome, setNome, removeData, saveData }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);