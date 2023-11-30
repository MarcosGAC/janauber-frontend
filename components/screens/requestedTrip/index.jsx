import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";

const TripRequest = ({ navigation }) => {
  const [tripRequests, setTripRequests] = useState([
    {
      id: 1,
      passengerName: "João",
      destination: "Shopping Center",
      accepted: false,
    },
    {
      id: 2,
      passengerName: "Maria",
      destination: "Airport",
      accepted: false,
    },
  ]);

  const handleAcceptTrip = (id) => {
    const updatedTrips = tripRequests.map((trip) =>
      trip.id === id ? { ...trip, accepted: true } : trip
    );
    setTripRequests(updatedTrips);
  };

  const handleRejectTrip = (id) => {
    const updatedTrips = tripRequests.filter((trip) => trip.id !== id);
    setTripRequests(updatedTrips);
  };

  const renderItem = ({ item }) => (
    <View style={tw`border border-gray-300 rounded-md p-3 mb-3`}>
      <Text>{`Passenger: ${item.passengerName}`}</Text>
      <Text>{`Destination: ${item.destination}`}</Text>
      {item.accepted ? (
        <Text style={tw`text-green-500`}>Accepted</Text>
      ) : (
        <View style={tw`flex-row mt-2`}>
          <TouchableOpacity
            style={tw`bg-green-500 py-2 px-4 rounded mr-2`}
            onPress={() => handleAcceptTrip(item.id)}
          >
            <Text style={tw`text-white`}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`bg-red-500 py-2 px-4 rounded`}
            onPress={() => handleRejectTrip(item.id)}
          >
            <Text style={tw`text-white`}>Reject</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={tw`flex-1 p-4`}>
      <Text style={tw`text-blue-900 mb-4 text-center`}>Trip Requests</Text>
      <FlatList
        data={tripRequests}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TripRequest;
