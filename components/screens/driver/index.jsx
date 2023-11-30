import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeDriver from './homeDriver'; 
import TripRequest from '../requestedTrip';

const Stack = createNativeStackNavigator();

function HomeDriverDrawer() {
  return (
    <Stack.Navigator >
        <Stack.Screen name="HomeDriver" component={HomeDriver} />
        <Stack.Screen name="TripRequest" component={TripRequest} />
    </Stack.Navigator>
  );
}

export default HomeDriverDrawer;
