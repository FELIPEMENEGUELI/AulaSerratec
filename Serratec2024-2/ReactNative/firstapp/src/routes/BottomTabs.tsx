import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { useAuth } from '../hooks/useAuth';
import { styles } from './style';

const Tab = createBottomTabNavigator();

export const TabRouters = () => {

  const { email } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerBackground: () => (
          <View style={{
            backgroundColor: '#1B75BB',
            height: 80,
            justifyContent: 'center',
          }}>
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>
              Seja bem vinda, {email ? email : "Faça login"}
            </Text>
          </View>
        ),
        tabBarStyle: {
          backgroundColor: '#1b75bb',
          height: 70
        }
      }}>

      <Tab.Screen
        name="TabsHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <Ionicons name="home" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}>Home</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="TabsProfile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <Ionicons name="person" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}
              >Profile</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="TabsSettings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <Ionicons name="settings" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}>Settings</Text>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="TabsNotification"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.boxTabBar}>
              <Ionicons name="alert-sharp" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}>Alert</Text>
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}