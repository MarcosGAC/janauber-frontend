import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';


function ForgotPassword({setEmail, status, setStatus}){
    function sendRecover(){
      setStatus('Email de recuperação enviado com sucesso!');
    }
    return(
      <View style={tw`flex-1 justify-center items-center`}>
        <Text>Recuperação de senha</Text> 
        <View >
          <TextInput
            style={tw`mt-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
            placeholder="Digite aqui seu email"
            placeholderTextColor="#003f5c"
            value="teste@gmail.com"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View>
        <TouchableOpacity  onPress={() => sendRecover()}
          style={tw`mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}>
          <Text style={tw`text-white`}>Enviar email de recuperação</Text> 
        </TouchableOpacity>
        <Text>{status}</Text> 
      </View> 
    );
  }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       inputView: {
//         backgroundColor: "#EEEEEE",
//         borderRadius: 30,
//         width: "80%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
//       },
//       TextInput: {
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 30,
//       },
//       forgot_button: {
//         height: 30,
//         marginBottom: 30,
//       },
//       loginBtn: {
//         width:"80%",
//         borderRadius:25,
//         height:50,
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:40,
//         backgroundColor:"#1AACAC",
//       },
//       logo: {
//         marginBottom: 10
//       }
// });

export default ForgotPassword;