import { NavigationContainer } from '@react-navigation/native';
import { StackRouters } from './stackRouters';
import { AuthProvider } from '../hooks/useAuth';
import { ThemeProvider } from '../hooks/useTheme';

export const Routers = () => {

  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider>
          <StackRouters />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  )
}
