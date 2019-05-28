import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as AddCitiesActions } from "../../store/ducks/cities";

import { View, Text, TextInput } from "react-native";

import {
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  TextDefault
} from "./styles";

import Icon from "react-native-vector-icons/FontAwesome";

const TabIcon = ({ tintColor }) => (
  <Icon name="plus" size={20} color={tintColor} />
);

class AddCity extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    city: "",
    country: ""
  };

  addNewCity = () => {
    const { city, country } = this.state;

    if (city && country) {
      const obj = {
        city,
        country
      };

      const { addCity } = this.props;

      addCity(obj);

      this.setState({ city: "", country: "" });
    } else {
      alert("Preencha todos os campos");
    }
  };

  render() {
    const { city, country } = this.state;

    return (
      <Container>
        <TextDefault>CITIES</TextDefault>
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
        <ButtonSubmit onPress={() => this.addNewCity()}>
          <TextButton>Submit</TextButton>
        </ButtonSubmit>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AddCitiesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCity);
