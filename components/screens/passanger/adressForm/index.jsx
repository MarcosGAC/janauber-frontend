import React, { useState, useEffect } from "react";
import AddressInput from "./adressInput";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import tw from "twrnc";
import dayjs from "dayjs";
import TripDetails from "../tripInfo";
export default function AdressForm() {
  const [value, setValue] = useState(dayjs());
  const [tripRegistered, setTripRegistered] = useState(false);
  const [registeredTripInfo, setRegisteredTripInfo] = useState({
    cidade: "São Paulo",
    bairro: "Centro",
    rua: "Avenida Paulista",
    numero: "1000",
    vagas: "2",
    date: "2023-12-15T08:30:00.000Z",
  });
  const [address, setAddress] = useState({
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    vagas: "",
  });

  const addressFields = [
    { placeholder: "Cidade", value: address.cidade, fieldName: "cidade" },
    { placeholder: "Bairro", value: address.bairro, fieldName: "bairro" },
    { placeholder: "Rua", value: address.rua, fieldName: "rua" },
    { placeholder: "Número", value: address.numero, fieldName: "numero" },
    {
      placeholder: "Quantidade de vagas",
      value: address.vagas,
      fieldName: "vagas",
    },
  ];

  const getData = () => {
    console.log(
      "Cidade: " +
        address.cidade +
        ", Bairro: " +
        address.bairro +
        ", Rua: " +
        address.rua +
        ", Número: " +
        address.numero +
        ", Vagas: " +
        address.vagas +
        ", Data e Hora: " +
        value.toISOString()
    );
  };

  const handleChange = (fieldName, text) => {
    setAddress({
      ...address,
      [fieldName]: text,
    });
  };
  const handleRegister = () => {
    // Simula o registro da viagem e exibe as informações
    const tripData = {
      cidade: address.cidade,
      bairro: address.bairro,
      rua: address.rua,
      numero: address.numero,
      vagas: address.vagas,
      date: value.toISOString(),
    };
    setRegisteredTripInfo(tripData);
    setTripRegistered(true);
  };

  useEffect(() => {
    // Verificar se há uma viagem registrada e definir tripRegistered
    if (
      registeredTripInfo != null &&
      Object.keys(registeredTripInfo).length !== 0
    ) {
      setTripRegistered(true);
    }
  }, [registeredTripInfo]);
  const handleDeleteTrip = () => {
    setRegisteredTripInfo(null); // Limpa as informações da viagem
    setTripRegistered(false); // Define tripRegistered como falso para redirecionar para a Home do Passageiro
  };

  return (
    <View>
      {tripRegistered ? (
        <TripDetails tripInfo={registeredTripInfo} onDeleteTrip={handleDeleteTrip} />
      ) : (
        <>
          {addressFields.map((field, index) => (
            <AddressInput
              key={index}
              placeholder={field.placeholder}
              value={field.value}
              onChangeText={(text) => handleChange(field.fieldName, text)}
            />
          ))}
          <DateTimePicker
            value={value}
            onValueChange={(date) => setValue(date)}
          />
          <TouchableOpacity onPress={handleRegister}>
            <Text
              style={tw`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Requisitar viagem
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
