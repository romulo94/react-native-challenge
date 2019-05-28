import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import Header from "../../components/Header";

import { Container, ItemList, TextListItem } from "./styles";
import { metrics, colors } from "../../styles";

class Cities extends Component {
  static navigationOptions = {
    title: "CITIES",
    headerStyle: {
      backgroundColor: colors.primary
    },

    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
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

  _renderItemData = navigate => ({ item }) => (
    <ItemList onPress={() => navigate("Local", { title: item.city })}>
      <TextListItem>{item.city}</TextListItem>
    </ItemList>
  );

  render() {
    const {
      list,
      navigation: { navigate }
    } = this.props;
    return (
      <Container>
        <FlatList
          keyExtractor={() => JSON.stringify(Math.random())}
          data={list}
          renderItem={this._renderItemData(navigate)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  list: state.cities.data
});

export default withNavigation(connect(mapStateToProps)(Cities));
