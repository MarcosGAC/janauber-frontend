import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';



function ForgotPassword({setEmail, status, setStatus}){
    function sendRecover(){
      setStatus('Email de recuperação enviado com sucesso!');
    }
    return(
      <View style={styles.container}>
        <Text>Recuperação de senha</Text> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Digite aqui seu email"
            placeholderTextColor="#003f5c"
            value="teste@gmail.com"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => sendRecover()}>
          <Text style={styles.loginText}>Enviar email de recuperação</Text> 
        </TouchableOpacity>
        <Text>{status}</Text> 
      </View> 
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView: {
        backgroundColor: "#EEEEEE",
        borderRadius: 30,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 30,
      },
      forgot_button: {
        height: 30,
        marginBottom: 30,
      },
      loginBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#1AACAC",
      },
      logo: {
        marginBottom: 10
      }
});

export default ForgotPassword;