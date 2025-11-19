import { createDrawerNavigator } from '@react-navigation/drawer';
import { Profile } from '../pages/Profile';
import { TabsRouters } from './tabsRouters';
import { Settings } from '../pages/Settings';
import { DrawerList } from '../@types/navigation';
import { LoginInstagram } from '../pages/LoginInstagram';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

const Drawer = createDrawerNavigator<DrawerList>();

export const DrawerRouters = () => {

  const { name } = useAuth();
  const { colors } = useTheme();

  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name='DrawerHome' 
        component={TabsRouters} 
        options={{ 
          title: `Seja bem-vindo ${name}`,
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          drawerPosition: 'right',
        }}
      />
      
      <Drawer.Screen 
        name='DrawerProfile' 
        component={Profile} 
        options={{ title: 'Perfil' }}
      />
      
      <Drawer.Screen 
        name='DrawerSettings' 
        component={Settings} 
        options={{ title: 'Configurações' }}
      />
      
      <Drawer.Screen 
        name='DrawerLoginInstagram' 
        component={LoginInstagram} 
        options={{ title: 'Login Instagram', headerShown: false }}
      />
      
    </Drawer.Navigator>
  )
}
