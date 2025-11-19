import {createContext, useContext, useEffect, useState} from 'react';
import { Appearance } from 'react-native';

type Colors = {
  background: string;
  text: string;
}

type ThemeContextType = {
  colors: Colors;
}

export const ThemeContext = createContext<ThemeContextType>({
  colors: {
    background: '',
    text: '',
  },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {

  let colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  const colors = theme === 'dark' ? {
      background: '#000',
      text: '#fff',
    } : {
      background: '#fff',
      text: '#000',
    };

  const loadTheme = () => {
    if (colorScheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    loadTheme();
  }, [theme])

  return (
    <ThemeContext.Provider value={{ colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext);
