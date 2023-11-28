import tw from 'twrnc';
import 'react-native-gesture-handler';
import { View, Image } from 'react-native';
import LoginScreen from './components/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePassageiroWDrawer from './components/passageiro/index';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen">
        {({ navigation }) => (
          <LoginScreen
            navigation={navigation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="HomePassageiroWDrawer">
        {({ navigation }) => (
          <HomePassageiroWDrawer
            navigation={navigation}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
