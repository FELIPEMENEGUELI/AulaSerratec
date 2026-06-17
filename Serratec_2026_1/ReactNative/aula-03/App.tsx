import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/useAuth';
import { Routers } from './src/routers';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </NavigationContainer>
  );
}
