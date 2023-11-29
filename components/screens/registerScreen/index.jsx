import React, { useState } from "react";
import { Text, View, Picker,TouchableOpacity } from "react-native";
import tw from "twrnc";
import TaxiRegister from "./taxiRegister";
import PassengerRegister from "./passengerRegister";

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userType, setUserType] = useState("passageiro");
  const [vehicleInfo, setVehicleInfo] = useState({
    placa: "",
    modelo: "",
    ano: "",
    cor: "",
  });
  const [driverInfo, setDriverInfo] = useState({
    proprietarioVeiculo: "",
    cpf: "",
  });
  const [passengerInfo, setPassengerInfo] = useState({
    cpf: "",
    endereco: "",
  });


  const handleRegister = () => {


    if (userType === "taxi") {
      console.log("Driver Info:", driverInfo);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Name:", name);
      console.log("User Type:", userType);
      console.log("Vehicle Info:", vehicleInfo);
    } else {
      console.log("Passenger Info:", passengerInfo);
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
          onValueChange={(itemValue, itemIndex) => setUserType(itemValue)}
        >
          <Picker.Item label="Passageiro" value="passageiro" />
          <Picker.Item label="Taxi" value="taxi" />
        </Picker>
      </View>

      {userType === "taxi" && (
        <TaxiRegister
          driverInfo={driverInfo}
          setDriverInfo={setDriverInfo}
          vehicleInfo={vehicleInfo}
          setVehicleInfo={setVehicleInfo}
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
