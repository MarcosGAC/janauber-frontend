import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login.jsx';
import ForgotPassword from './forgotPassword.jsx';
import Register from '../registerScreen/index';
import HomePassageiro from '../passanger/homePassageiro.jsx';

const Stack = createNativeStackNavigator();

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loggedUser, setLoggedUser] = useState(null); 

  const userMock = [
    {
      name: 'Gabriel',
      email: 'teste@gmail.com',
      password: '123456',
      type: 'passanger',
    },
    {
      name: 'João',
      email: 'teste@gmail.com',
      password: '123',
      type: 'driver',
    },
  ];

  function validate() {
    if (
      userMock[0].email === email &&
      userMock[0].password === password &&
      userMock[0].type === 'passanger'
    ) {
      return navigation.navigate('HomePassageiroWDrawer');
    } else if (
      userMock[1].email === email &&
      userMock[1].password === password &&
      userMock[1].type === 'driver'
    ) {
      return navigation.navigate('HomeDriverDrawer');
    } else {
      return setStatus('Email ou senha inválidos');
    }
  }
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login">
        {({ navigation }) => (
        <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        status={status}
        setStatus={setStatus}
        validate={validate}
        navigation={navigation}
        userMock={userMock}
        setLoggedUser={setLoggedUser} 
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
  <Stack.Screen name="Register">
    {({ navigation }) => <Register navigation={navigation} />}
  </Stack.Screen>
  <Stack.Screen name="HomePassageiroWDrawer">
    {() => (
      <HomePassageiro
        loggedUser={loggedUser} 
      />
    )}
  </Stack.Screen>
</Stack.Navigator>
);
}

export default LoginScreen;