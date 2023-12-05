import React from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";


export default function TaxiRegister({
  driverInfo,
  setDriverInfo,
  vehicleInfo,
  setVehicleInfo,
}) {
  const inputs = [
    { placeholder: "Nome", value: driverInfo?.name, onChangeText: (text) => setDriverInfo({ ...driverInfo, name: text }) },
    { placeholder: "cpf", value: driverInfo?.cpf, onChangeText: (text) => setDriverInfo({ ...driverInfo, cpf: text }) },
    { placeholder: "email", value: driverInfo?.email, onChangeText: (text) => setDriverInfo({ ...driverInfo, email: text }) },
    { placeholder: "password", value: driverInfo?.password, onChangeText: (text) => setDriverInfo({ ...driverInfo, password: text }) },
    { placeholder: "data de nascimento", value: driverInfo.birthday, onChangeText: (text) => setDriverInfo({ ...driverInfo, birthday: text }) },
  ]

  return (
    <View style={tw`justify-center items-center w-full h-screen`}>
      {inputs.map((input, index) => (
        <TextInput
          key={index}
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder={input.placeholder}
          value={input.value}
          onChangeText={input.onChangeText}
        />
      ))}
    </View>
  );
}
