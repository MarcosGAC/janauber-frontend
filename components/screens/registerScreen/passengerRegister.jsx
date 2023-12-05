import React from "react";
import { TextInput, View } from "react-native";
import tw from "twrnc";

export default function PassengerRegister({ passengerInfo, setPassengerInfo }) {
  const inputs = [
    { placeholder: "cpf", value: passengerInfo.cpf, onChangeText: (text) => setPassengerInfo({ ...passengerInfo, cpf: text }) },
    { placeholder: "nome", value: passengerInfo.name, onChangeText: (text) => setPassengerInfo({ ...passengerInfo, name: text }) },
    { placeholder: "email", value: passengerInfo.email, onChangeText: (text) => setPassengerInfo({ ...passengerInfo, email: text }) }, 
    { placeholder: "password", value: passengerInfo.password, onChangeText: (text) => setPassengerInfo({ ...passengerInfo, password: text }) },
    { placeholder: "data de nascimento", value: passengerInfo.birthday, onChangeText: (text) => setPassengerInfo({ ...passengerInfo, birthday: text }) },
  ];

  return (
    <View style={tw`justify-center items-center w-full h-screen`}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm w-[70%]`}
          placeholder={input.placeholder}
          value={input.value}
          onChangeText={input.onChangeText}
        />
      ))}
    </View>
  );
}
