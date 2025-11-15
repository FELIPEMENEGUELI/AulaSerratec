import { createStackNavigator } from '@react-navigation/stack';
import { Login } from "../pages/Login";
import { NavigationContainer } from '@react-navigation/native';
import { TabsRouters } from './bottomTabs';

const Stack = createStackNavigator();

export const Routers = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StackLogin" component={Login} /> 
        <Stack.Screen name="StackHome" component={TabsRouters} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}