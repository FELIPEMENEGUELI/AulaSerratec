import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { Settings } from '../pages/Settings';
import { DrawerRouters } from './drawerRouters';
import { StackList } from '../@types/navigation';

const Stack = createStackNavigator<StackList>();

export const StackRouters = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="StackLogin" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="StackHome" component={DrawerRouters} options={{ headerShown: false }}/>
      <Stack.Screen name="StackSettings" component={Settings} options={{ title: 'Configurações' }}/>
    </Stack.Navigator>
  )
}
