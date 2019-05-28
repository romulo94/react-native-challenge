import React, { Component } from "react";
import { connect } from "react-redux";

import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Header from "../../components/Header";

import { Container, ItemList, TextListItem } from "./styles";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabIcon = ({ tintColor }) => (
  <Icon name="city-variant-outline" size={20} color={tintColor} />
);

class Cities extends Component {
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
    const { list } = this.props;
    return (
      <Container>
        <Header />

        <FlatList
          style={{ marginTop: 30 }}
          keyExtractor={() => JSON.stringify(Math.random())}
          data={list}
          renderItem={this._renderItemData}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.cities.data
});

export default connect(mapStateToProps)(Cities);
