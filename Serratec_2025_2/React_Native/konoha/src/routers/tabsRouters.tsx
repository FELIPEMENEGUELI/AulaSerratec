import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Contacts } from '../pages/Register';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import { styles } from './style';
import { TabList } from '../@types/navigation';

const Tab = createBottomTabNavigator<TabList>();

export const TabsRouters = () => {

  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false,
        headerStyle: {
          backgroundColor: '#6200EE',
        },
        tabBarStyle: {
          backgroundColor: '#ddd',
          height: 70,
          paddingTop: 10,
        },
      }}
    >
      
      <Tab.Screen 
        name="TabHome" 
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Icon name='home' size={size} color={focused ? 'orange' : '#7c7c7c'} />

              <Text style={[styles.tabLabel, { color: focused ? 'orange' : '#7c7c7c'}]}>Home</Text>
            </View>
          ),
          tabBarLabel: '',
          headerTitle: '',
        }}
      />

      <Tab.Screen 
        name="TabProfile" 
        component={Profile}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Icon name='person' size={size} color={focused ? 'orange' : '#7c7c7c'} />

              <Text style={[styles.tabLabel, { color: focused ? 'orange' : '#7c7c7c'}]}>Perfil</Text>
            </View>
          ),
          tabBarLabel: '',
          headerTitle: '',
        }}
      />

      <Tab.Screen 
        name="TabContacts" 
        component={Contacts}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.viewButton}>
              <Icon name='call' size={size} color={focused ? 'orange' : '#7c7c7c'} />

              <Text style={[styles.tabLabel, { color: focused ? 'orange' : '#7c7c7c'}]}>Contatos</Text>
            </View>
          ),
          tabBarLabel: '',
          headerTitle: '',
        }} 
      />
    </Tab.Navigator>
  )
}
