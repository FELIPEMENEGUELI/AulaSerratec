import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {createContext, useContext, useEffect, useState} from 'react';

type AuthContextType = {
  nome: string;
  name: string;
  setName: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setData: (name: string, password: string) => void;
  removeData: () => void;
  getData: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  nome: '',
  name: '',
  setName: () => {},
  password: '',
  setPassword: () => {},
  isLoading: true,
  setIsLoading: () => {},
  setData: () => {},
  removeData: () => {},
  getData: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {

  const nome = 'Thais Nubia';
  const navigation = useNavigation();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setData = async (name: string, password: string) => {

    const data = {
      name: name,
      password: password
    }

    try {
      await AsyncStorage.setItem('@user', JSON.stringify(data));
      console.log('salvou')
      
    } catch (error) {
      console.log('Eu algum erro')
    }
  }
    
  const getData = async () => {

    try {
      const jsonValue = await AsyncStorage.getItem('@user');
      if(jsonValue != undefined) {
        setTimeout(() => {
          navigation.navigate("StackHome", { name: "StackHome" });
          console.log('Nome do usuario', jsonValue)
        }, 3000);
      } else {
        console.log('Usuario nao encontrado')
      }

    } catch (error) {
      console.log('Nao buscou as informacoes')
    } finally {
      setIsLoading(false);
    }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@user')
      console.log('Removeu o usuario')
    } catch (error) {
      console.log('Nao removeu o usuario')      
    } finally {
      setIsLoading(false);
    }
  }

  const loadInfo = async () => {
    await getData();
  }

  useEffect(() => {
    loadInfo();
  }, [])

  return (
    <AuthContext.Provider 
      value={{ 
        nome,
        name,
        setName,
        password,
        setPassword,
        isLoading,
        setIsLoading,
        setData,
        removeData,
        getData
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
