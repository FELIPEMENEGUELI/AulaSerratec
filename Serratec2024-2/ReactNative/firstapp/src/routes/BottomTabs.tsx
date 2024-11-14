import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';

const Tab = createBottomTabNavigator();

export const TabRouters = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, title: ''}}>

      <Tab.Screen 
        name="TabsHome" 
        component={Home}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Home</Text>
              <Ionicons name="home" size={24} color="black" />
            </View>
          )
        }}
      />
      
      <Tab.Screen 
        name="TabsProfile" 
        component={Profile}
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Profile</Text>
              <Ionicons name="person" size={24} color="black" />
            </View>
          )
        }}
      />
      
      <Tab.Screen 
        name="TabsSettings" 
        component={Settings} 
        options={{
          tabBarIcon: () => (
            <View>
              <Text>Settings</Text>
              <Ionicons name="settings" size={24} color="black" />
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}