import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomePassageiro from "./homePassageiro";
import tw from "twrnc";

function TripDetails({ tripInfo, onDeleteTrip }) {
  if (!tripInfo) {
    return <HomePassageiro />;
  }

  const handleDelete = () => {
    onDeleteTrip();
  };

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-lg font-bold mb-4`}>Viagem Solicitada</Text>
      <View style={tw`bg-white rounded-lg shadow-md p-4 mb-4`}>
        <Text style={tw`text-base`}>Cidade: {tripInfo.cidade}</Text>
        <Text style={tw`text-base`}>Bairro: {tripInfo.bairro}</Text>
        <Text style={tw`text-base`}>Rua: {tripInfo.rua}</Text>
        <Text style={tw`text-base`}>Número: {tripInfo.numero}</Text>
        <Text style={tw`text-base`}>Quantidade de vagas: {tripInfo.vagas}</Text>
        <Text style={tw`text-base`}>Data e Hora: {tripInfo.date}</Text>
      </View>

      <TouchableOpacity
        onPress={handleDelete}
        style={tw`bg-red-500 py-2 px-4 rounded`}
      >
        <Text style={tw`text-white`}>Excluir Viagem</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TripDetails;
