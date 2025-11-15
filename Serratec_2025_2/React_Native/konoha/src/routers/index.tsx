import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Routers = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StackLogin" component={Login} /> 
        <Stack.Screen name="StackHome" component={Home} /> 
      </Stack.Navigator>
    </NavigationContainer>
  )
}