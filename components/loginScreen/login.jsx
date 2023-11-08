import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';


  
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

function Login({ password, setPassword, status, setStatus, navigation}) {
    function validate(){
      if(password == 'teste'){
        return navigation.navigate('HomePassageiro');
      }else {
        setStatus('Usuário ou senha incorretos!');
      }
    }
    function forgot(){
      setStatus('');
      return navigation.navigate('ForgotPassword');
    }
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={{uri: 'https://freesvg.org/storage/img/thumb/bobocal_American_Sport_Car.png',}} />
        </View>
        <Text>Login</Text> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            value="teste@gmail.com"
            onChangeText={(email) => setEmail(email)}
          /> 
        </View> 
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            overflowHidden={true}
            onChangeText={(password) => setPassword(password)}
          /> 
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={() => forgot()}>Esqueceu sua senha?</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => validate()}>
          <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity>
        <Text>{status}</Text> 
      </View> 
    );
  }
  export default Login;

  