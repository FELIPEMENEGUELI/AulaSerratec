import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

const Stack = createStackNavigator();

export const StackRouters = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="StackLogin" component={Login} /> 
      <Stack.Screen name="StackHome" component={Home} /> 
    </Stack.Navigator>
  )
}