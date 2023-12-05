import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./login.jsx";
import ForgotPassword from "./forgotPassword.jsx";
import Register from "../registerScreen/index";
import HomePassageiro from "../passanger/homePassageiro.jsx";

const Stack = createNativeStackNavigator();

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loggedUser, setLoggedUser] = useState(null);

  function validate() {
    fetch('http://localhost:3000/passenger', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          // Login bem-sucedido, armazene o token em AsyncStorage ou State
          // Navegue para a próxima tela ou atualize o estado do usuário logado
        } else {
          // Caso não seja bem-sucedido, defina o status de erro
          setStatus("Email ou senha inválidos");
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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
          <HomePassageiro loggedUser={loggedUser} navigation={navigation} />
        )}
      </Stack.Screen>
      <Stack.Screen name="HomeDriver">
        {() => <HomeDriver loggedUser={loggedUser} navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default LoginScreen;
