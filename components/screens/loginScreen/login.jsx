import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

function Login({
  password,
  setPassword,
  status,
  setStatus,
  navigation,
  userMock,
  setLoggedUser, // Receba a função setLoggedUser como uma propriedade
}) {
  const [email, setEmail] = useState('teste@gmail.com')

  function validate() {
    if (
      userMock[0].email === email &&
      userMock[0].password === password &&
      userMock[0].type === "passanger"
    ) {
      setLoggedUser(userMock[0]); // Defina o usuário logado
      return navigation.navigate("HomePassageiroWDrawer");
    } else if (
      userMock[1].email === email &&
      userMock[1].password === password &&
      userMock[1].type === "driver"
    ) {
      setLoggedUser(userMock[1]); // Defina o usuário logado
      return navigation.navigate("HomeDriverDrawer"); 
    } else {
      return setStatus("Email ou senha inválidos");
    }
  }
  function forgot() {
    setStatus("");
    return navigation.navigate("ForgotPassword");
  }
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-red-900`}>Login</Text>
      <View>
        <TextInput
          style={tw`mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View>
        <TextInput
          style={tw`mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          overflowHidden={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text onPress={() => forgot()} style={tw`ml-12 mt-3`}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => validate()}
        style={tw`mt-10 bg-green-500 hover:bg-green-100 text-white font-bold py-2 px-4 rounded`}
      >
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <Text>{status}</Text>
      <View>
        <Text
          onPress={() => navigation.navigate("Register")}
          style={tw`p-2 m-2 rounded-xl bg-blue-500`}
        >
          Registrar
        </Text>
      </View>
    </View>
  );
}
export default Login;
