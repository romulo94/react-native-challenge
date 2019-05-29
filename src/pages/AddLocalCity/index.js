import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

// import { Container } from './styles';

const AddLocalCity = ({ navigation: { navigate } }) => (
  <View>
    <Text>jjj</Text>
    <TouchableOpacity
      onPress={() => {
        navigate("Cities");
      }}
    >
      <Text>Close</Text>
    </TouchableOpacity>
  </View>
);

export default withNavigation(AddLocalCity);
