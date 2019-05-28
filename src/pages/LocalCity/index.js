import React, { Component } from "react";

import { View } from "react-native";

// import { Container } from './styles';

export default class LocalCity extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("title")
  });
  render() {
    return <View />;
  }
}
