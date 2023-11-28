import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePassageiro from './homePassageiro'; 
import Ofertas from './ofertas';

const Stack = createNativeStackNavigator();

function HomePassageiroWDrawer() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="HomePassageiro" component={HomePassageiro} />
        <Stack.Screen name="Ofertas" component={Ofertas} />
    </Stack.Navigator>
  );
}

export default HomePassageiroWDrawer;
