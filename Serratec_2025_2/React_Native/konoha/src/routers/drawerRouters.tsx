import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from '../pages/Profile';
import { TabsRouters } from './tabsRouters';
import { Settings } from '../pages/Settings';
import { DrawerList } from '../@types/navigation';
import { LoginInstagram } from '../pages/LoginInstagram';

const Drawer = createDrawerNavigator<DrawerList>();

export const DrawerRouters = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name='DrawerHome' component={TabsRouters} options={{ title: 'Home' }}/>
      <Drawer.Screen name='DrawerProfile' component={Profile} options={{ title: 'Perfil' }}/>
      <Drawer.Screen name='DrawerSettings' component={Settings} options={{ title: 'Configurações' }}/>
      <Drawer.Screen name='DrawerLoginInstagram' component={LoginInstagram} options={{ title: 'Login Instagram', headerShown: false }}/>
    </Drawer.Navigator>
  )
}
