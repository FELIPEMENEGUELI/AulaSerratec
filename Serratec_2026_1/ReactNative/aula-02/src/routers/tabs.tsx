import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';
import { Notifications } from '../pages/Notifications';
import { ParametrosRotasTabs } from './navigation';
import Icon from '@expo/vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles } from './style';

const Tabs = createBottomTabNavigator<ParametrosRotasTabs>();

export const TabsRouters = () => {

  return (
    <Tabs.Navigator
      screenOptions={{
         tabBarStyle: {
          backgroundColor: '#7797f6',
          height: 70,
         }
      }}
    >
      <Tabs.Screen 
        name='TabsHome' 
        component={Home} 
        options={{
          title: '', 
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon name="home" size={22} color={focused ? 'white' : 'black'} />
              <Text style={[styles.textTabs, { color: focused ? 'white' : 'black' }]}>Home</Text>
            </View>
          )
        }} 
      />

      <Tabs.Screen 
        name='TabsProfile' 
        component={Profile}
        options={{
          title: '', 
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon name="person" size={22} color={focused ? 'white' : 'black'} />
              <Text style={[styles.textTabs, { color: focused ? 'white' : 'black' }]}>Perfil</Text>
            </View>
          )
        }}  
      />

      <Tabs.Screen 
        name='TabsSettings' 
        component={Settings} 
        options={{
          title: '', 
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon name="settings" size={22} color={focused ? 'white' : 'black'} />
              <Text style={[styles.textTabs, { color: focused ? 'white' : 'black' }]}>Config</Text>
            </View>
          )
        }} 
      />

      <Tabs.Screen
        name='TabsNotification' 
        component={Notifications}
        options={{
          title: '', 
          tabBarIcon: ({ focused }) => (
            <View style={[styles.cardTabs]}>
              <Icon name="notifications" size={22} color={focused ? 'white' : 'black'} />
              <Text style={[styles.textTabs, { color: focused ? 'white' : 'black' }]}>Notif</Text>
            </View>
          )
        }} 
      />
    </Tabs.Navigator>
  )
};
