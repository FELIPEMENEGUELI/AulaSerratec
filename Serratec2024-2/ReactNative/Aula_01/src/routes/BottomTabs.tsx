import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { useAuth } from '../hooks/useAuth';
import { styles } from './style';
import Imagem from '../assets/html7.jpeg';
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export const TabRouters = () => {

  const { email, setTabChat } = useAuth();

  const handleChat = () => {
    setTabChat(true);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerBackground: () => (
          <View style={{
            backgroundColor: '#1B75BB',
            height: 580,
            justifyContent: 'center',
          }}>
            <Image style={{ width: 150, height: 150}} source={Imagem} />
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>
              Seja bem vinda, {email ? email : "Faça login"}
            </Text>
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: '#f00',
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
        name="TabsChat"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <TouchableOpacity onPress={handleChat} style={styles.boxTabBar}>
              <Ionicons name="person" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}
              >Chat</Text>
            </TouchableOpacity>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export const TabRoutersChat = () => {

  const { email, setTabChat } = useAuth();

  const handleChat = () => {
    setTabChat(false);
  }

  return (
    <Tab.Navigator
      screenOptions={{
        title: '',
        headerBackground: () => (
          <View style={{
            backgroundColor: '#1B75BB',
            height: 580,
            justifyContent: 'center',
          }}>
            <Image style={{ width: 150, height: 150}} source={Imagem} />
            <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 30 }}>
              Seja bem vinda, {email ? email : "Faça login"}
            </Text>
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
            <View style={{ width: 10, height: 10, backgroundColor: 'red',borderRadius: 9999}} />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: '#1b75bb',
          height: 70
        }
      }}>

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
            <TouchableOpacity onPress={handleChat} style={styles.boxTabBar}>
              <Ionicons name="alert-sharp" size={focused ? 30 : size} color={focused ? '#fff' : '#999'} />
              <Text
                style={[styles.textTabRoute,
                {
                  color: focused ? '#fff' : '#999'
                }
                ]}>Alert</Text>
            </TouchableOpacity>
          )
        }}
      />

    </Tab.Navigator>
  )
}