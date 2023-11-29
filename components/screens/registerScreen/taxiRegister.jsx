import React from "react";
import { View, TextInput } from "react-native";
import tw from "twrnc";
export default function TaxiRegister(
  driverInfo,
  setDriverInfo,
  vehicleInfo,
  setVehicleInfo
) {

  return (
    <View style={tw` justify-center items-center w-full h-screen`}>
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="Nome"
          value={driverInfo?.proprietarioVeiculo}
          onChangeText={(text) =>
            setDriverInfo({ ...driverInfo, proprietarioVeiculo: text })
          }
        />
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="cpf"
          value={driverInfo?.cpf}
          onChangeText={(text) => setDriverInfo({ ...driverInfo, cpf: text })}
        />
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="Placa"
          value={vehicleInfo?.placa}
          onChangeText={(text) =>
            setVehicleInfo({ ...vehicleInfo, placa: text })
          }
        />
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="Modelo"
          value={vehicleInfo?.modelo}
          onChangeText={(text) =>
            setVehicleInfo({ ...vehicleInfo, modelo: text })
          }
        />
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="Ano"
          value={vehicleInfo?.ano}
          onChangeText={(text) => setVehicleInfo({ ...vehicleInfo, ano: text })}
        />
        <TextInput
          style={tw`mt-2 px-3 py-2 w-full bg-white border border-gray-300 rounded-md text-sm shadow-sm  w-[70%]`}
          placeholder="Cor"
          value={vehicleInfo?.cor}
          onChangeText={(text) => setVehicleInfo({ ...vehicleInfo, cor: text })}
        />

    </View>
  );
}
