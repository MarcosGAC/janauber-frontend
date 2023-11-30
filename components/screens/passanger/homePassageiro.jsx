import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import AdressForm from "./adressForm";

function HomePassageiro({loggedUser}) {
  console.log(loggedUser)
  return (
    <SafeAreaView>
      <View>
        <Text>ola {loggedUser.name}</Text>
      </View>
      <View style={tw`m-7`}>
        <View style={tw`max-w-md mx-auto`}>
          <Text style={tw`justify-center`}>Requisitar viagem</Text>
          <View style={tw`relative z-0 w-full mb-5 group`}>
            <Text>Endereço de origem</Text>
            <AdressForm />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomePassageiro;
