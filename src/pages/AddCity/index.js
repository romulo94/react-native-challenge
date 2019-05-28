import React, { Component } from "react";

import { View, Text, TextInput } from "react-native";

import { Container, Input, ButtonSubmit, TextButton } from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

const TabIcon = ({ tintColor }) => (
  <Icon name="plus" size={20} color={tintColor} />
);

export default class AddCity extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    city: "",
    country: ""
  };

  render() {
    const { city, country } = this.state;

    return (
      <Container>
        <Text>CITIES</Text>
        <Input
          value={city}
          onChangeText={text => this.setState({ city: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="City name"
        />
        <Input
          value={country}
          onChangeText={text => this.setState({ country: text })}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Country name"
        />
        <ButtonSubmit onPress={() => this.setState({ city: "", country: "" })}>
          <TextButton>Submit</TextButton>
        </ButtonSubmit>
      </Container>
    );
  }
}
