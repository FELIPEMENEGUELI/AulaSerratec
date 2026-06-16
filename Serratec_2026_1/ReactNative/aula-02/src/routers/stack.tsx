import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/Login';
import { TabsRouters } from './tabs';
import { ParametrosRotasStack } from './navigation';
import { HomeV2 } from '../pages/HomeV2';

const Stack = createNativeStackNavigator<ParametrosRotasStack>();

// export const StackRouters = () => {

//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='StackLogin' component={Login} />
//       <Stack.Screen name='StackHome' component={TabsRouters} />
//     </Stack.Navigator>
//   )
// };

export const StackRoutersV2 = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='StackLogin' component={Login} />
      <Stack.Screen name='StackHomeV2' component={HomeV2} />
    </Stack.Navigator>
  )
};
