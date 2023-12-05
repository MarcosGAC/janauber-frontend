import React, { useState } from "react";
import { Text, View, Picker, TouchableOpacity } from "react-native";
import tw from "twrnc";
import TaxiRegister from "./taxiRegister";
import PassengerRegister from "./passengerRegister";
import { createPassengerUser, createDriverUser } from "../../../utils/userAPI";

function Register({ navigation }) {
  const [userType, setUserType] = useState("passageiro");
  const [driverInfo, setDriverInfo] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    birthday: "",
  });
  const [passengerInfo, setPassengerInfo] = useState({
    cpf: "",
    name: "",
    birthday: "",
    email: "",
    password: "",
  });

  const handleRegister = () => {
    if (userType === "taxi") {
      createDriverUser(driverInfo)
        .then((response) => {
          console.log("Novo usuário motorista criado:", response);
        })
        .catch((error) => {
          console.error("Erro ao criar usuário motorista:", error);
        });
    } else {
      createPassengerUser(passengerInfo)
        .then((response) => {
          console.log("Novo usuário passageiro criado:", response);
        })
        .catch((error) => {
          console.error("Erro ao criar usuário passageiro:", error);
        });
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center w-full h-screen`}>
      <Text style={tw`text-blue-900 mb-4`}>Registro</Text>

      <View
        style={tw`mt-2 w-full bg-white border border-gray-300 rounded-md shadow-sm  w-[70%]`}
      >
        <Picker
          selectedValue={userType}
          onValueChange={(itemValue, itemIndex) => {
            console.log("Novo valor selecionado:", itemValue);
            setUserType(itemValue);
          }}
        >
          <Picker.Item label="Passageiro" value="passageiro" />
          <Picker.Item label="Taxi" value="taxi" />
        </Picker>
      </View>

      {userType === "taxi" && (
        <TaxiRegister 
        driverInfo={driverInfo} 
        setDriverInfo={setDriverInfo} 
        />
      )}

      {userType === "passageiro" && (
        <PassengerRegister
          passengerInfo={passengerInfo}
          setPassengerInfo={setPassengerInfo}
        />
      )}

      <TouchableOpacity
        style={tw`mt-4 bg-blue-500 py-2 px-4 rounded-md`}
        onPress={handleRegister}
      >
        <Text style={tw`text-white`}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Register;
