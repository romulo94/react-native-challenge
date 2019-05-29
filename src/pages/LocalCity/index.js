import React, { Component } from "react";

import { View, Text } from "react-native";

import { Container } from "./styles";

export default class LocalCity extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title")
  });
  render() {
    return (
      <Container>
        <Text>Oi</Text>
      </Container>
    );
  }
}
