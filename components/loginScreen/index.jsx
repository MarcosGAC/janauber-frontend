import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, DefaultTheme } from '@react-navigation/native-stack';
import Login from './login.jsx';
import HomePassageiro from './homePassageiro.jsx';
import ForgotPassword from './forgotPassword.jsx';


const Stack = createNativeStackNavigator();

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login">
          {({ navigation }) => (
            <Login
              email={email}
              password={password}
              setPassword={setPassword}
              status={status}
              setStatus={setStatus}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="HomePassageiro" component={HomePassageiro}/>
        <Stack.Screen name="ForgotPassword">
          {({ navigation }) => (
            <ForgotPassword
              email={email}
              status={status}
              setStatus={setStatus}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginScreen;
