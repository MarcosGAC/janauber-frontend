import tw from "twrnc";
import "react-native-gesture-handler";
import { View, Image,TouchableOpacity, Text } from "react-native";
import LoginScreen from "./components/screens/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePassageiroWDrawer from "./components/screens/passageiro/homePassageiro";
import HomeDriverDrawer from "./components/screens/driver";
import Register from "./components/screens/registerScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={tw`flex-1 bg-white w-full h-screen`}>
  
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="LoginScreen">
            {({ navigation }) => <LoginScreen navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="HomePassageiroWDrawer">
            {({ navigation }) => (
              <HomePassageiroWDrawer navigation={navigation} />
            )}
          </Stack.Screen>
          <Stack.Screen name="HomeDriverDrawer">
            {({ navigation }) => (
              <HomeDriverDrawer navigation={navigation} />
            )}
          </Stack.Screen>
          <Stack.Screen name="Register">
            {({ navigation }) => <Register navigation={navigation} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
