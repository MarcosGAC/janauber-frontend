import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent';
import HomePassageiro from './homePassageiro'; 
import Ofertas from './ofertas';

const Drawer = createDrawerNavigator();

function HomePassageiroWDrawer() {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="HomePassageiro" component={HomePassageiro} />
        <Drawer.Screen name="Ofertas" component={Ofertas} />
    </Drawer.Navigator>
  );
}

export default HomePassageiroWDrawer;
