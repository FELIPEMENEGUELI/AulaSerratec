import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { TabRouters } from './BottomTabs';

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DrawerHome" component={Home} />
      <Drawer.Screen name="TabHome" component={TabRouters} />
    </Drawer.Navigator>
  );
}