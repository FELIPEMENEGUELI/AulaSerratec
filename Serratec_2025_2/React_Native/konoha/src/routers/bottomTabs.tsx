import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../pages/Home";
import { Profile } from '../pages/Profile';
import { Contacts } from '../pages/Register';
import { Settings } from '../pages/Settings';

const Tab = createBottomTabNavigator();

export const TabsRouters = () => {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="TabHome" component={Home}/>
      <Tab.Screen name="TabProfile" component={Profile} />
      <Tab.Screen name="TabContacts" component={Contacts} />
      <Tab.Screen name="TabSettings" component={Settings} />
    </Tab.Navigator>
  )
}