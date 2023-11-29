import React from "react";
import { TextInput } from "react-native";
import { View } from "react-native-web";
import tw from "twrnc";
export default function PassengerRegister({ passengerInfo, setPassengerInfo }) {
  return (
    <View style={tw` justify-center items-center w-full h-screen`}>
      <TextInput
        style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
        placeholder="cpf"
        value={passengerInfo.cpf}
        onChangeText={(text) =>
          setPassengerInfo({ ...passengerInfo, cpf: text })
        }
      />
      <TextInput
        style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
        placeholder="nome"
        value={passengerInfo.name}
        onChangeText={(text) =>
          setPassengerInfo({ ...passengerInfo, name: text })
        }
      />
      <TextInput
        style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
        placeholder="idade"
        value={passengerInfo.age}
        onChangeText={(text) =>
          setPassengerInfo({ ...passengerInfo, age: text })
        }
      />
    </View>
  );
}
