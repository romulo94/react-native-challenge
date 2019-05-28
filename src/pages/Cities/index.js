import React, { Component } from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Header from "../../components/Header";

import { Container, ItemList, TextListItem } from "./styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabIcon = ({ tintColor }) => (
  <Icon name="city-variant-outline" size={20} color={tintColor} />
);

export default class Cities extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    list: [
      {
        id: 0,
        city: "Paracuru"
      },
      {
        id: 1,
        city: "Fortaleza"
      }
    ]
  };

  _renderItemData = ({ item }) => (
    <ItemList>
      <TextListItem>{item.city}</TextListItem>
    </ItemList>
  );

  render() {
    const { list } = this.state;
    return (
      <Container>
        <Header />

        <FlatList
          keyExtractor={item => JSON.stringify(item.id)}
          data={list}
          renderItem={this._renderItemData}
        />
      </Container>
    );
  }
}
