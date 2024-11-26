import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/Login';
import { DrawerRoutes } from './DrawerRoutes';
import { useAuth } from '../hooks/useAuth';
import { TabRouters, TabRoutersChat } from './BottomTabs';

const Stack = createNativeStackNavigator();

export const StackRouters = () => {

  const { tabChat } = useAuth();

  return (
    <Stack.Navigator >
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="StackHome" component={!tabChat ? TabRouters : TabRoutersChat} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}