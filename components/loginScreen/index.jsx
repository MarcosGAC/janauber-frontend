import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login.jsx';
import ForgotPassword from './forgotPassword.jsx';
import tw from 'twrnc';
const Stack = createNativeStackNavigator();

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

 
  return (
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
  );
}

export default LoginScreen;
