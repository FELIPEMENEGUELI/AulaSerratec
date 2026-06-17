import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

const Stack = createNativeStackNavigator();

export const Routers = () => {
    return <StackRouters />
}

const StackRouters = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="StackLogin" component={Login} />
            <Stack.Screen name="StackHome" component={Home} />
        </Stack.Navigator>
    )
}
