import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';


function HomePassageiro(){
  
  const [value, setValue] = useState(dayjs()); //data
  const [email, setEmail] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState(0);
  const [vagas, setVagas] = useState(0);
  const [status, setStatus] = useState(0);

  const getData = () => {
    // add logica pra guardar os dados
    
    console.log('email: '+email+' bairro: '+bairro+' rua: '+rua+' numero: '+numero+' vagas: '+vagas+' data e hora: '+value.toISOString())
  }

  return(
  <SafeAreaView>
      <View>
        <Text>Header</Text>
      </View>
      <View style={tw`m-7`}>
        <View style={tw`max-w-md mx-auto`}>
          <Text style={tw`justify-center`}>Requisitar viagem</Text>
          <View style={tw`relative z-0 w-full mb-5 group`}>
            <Text>Endereço de origem</Text>
            <TextInput
              style={tw`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder="Cidade"
              placeholderTextColor="gray"
              keyboardType="email-address"
              value={email} 
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={tw`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder="Bairro"
              placeholderTextColor="gray"
              keyboardType="email-address"
              value={bairro} 
              onChangeText={text => setBairro(text)}
            />
            <View style={tw`flex-row`}>
              <TextInput
                style={tw`flex-4 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder="Rua"
                placeholderTextColor="gray"
                keyboardType="email-address"
                value={rua} 
                onChangeText={text => setRua(text)}
              />
              <TextInput
                style={tw`flex-1 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder="Número"
                placeholderTextColor="gray"
                keyboardType="numeric"
                value={numero} 
                onChangeText={text => setNumero(text)}
              />
            </View>
            <TextInput
                style={tw`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder="Quantidade de vagas"
                placeholderTextColor="gray"
                keyboardType="numeric"
                value={vagas} 
                onChangeText={text => setVagas(text)}
              />
          </View>

          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
          />
           

          <TouchableOpacity onPress={() => getData()}>
            <Text style={tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
              Requisitar viagem
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
  </SafeAreaView>
  );
}



export default HomePassageiro;