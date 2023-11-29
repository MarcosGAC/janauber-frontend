import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

function HomeDriver({ navigation }) {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-blue-900 mb-4`}>Home Driver with Drawer</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={tw`bg-blue-500 py-2 px-4 rounded-md`}
      >
        <Text style={tw`text-white`}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeDriver;
