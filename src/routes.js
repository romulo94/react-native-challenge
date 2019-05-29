import React from "react";
import {
  createAppContainer,
  getActiveChildNavigationOptions,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "./styles";

import Cities from "./pages/Cities";
import AddCity from "./pages/AddCity";
import Welcome from "./pages/Welcome";
import LocalCity from "./pages/LocalCity";
import AddLocalCity from "./pages/AddLocalCity";

const TabIcon = ({ tintColor }) => (
  <Icon name="city-variant-outline" size={20} color={tintColor} />
);

const CitiesStack = createStackNavigator(
  {
    Cities: Cities,
    Local: LocalCity,
    AddLocal: {
      screen: AddLocalCity,
      navigationOptions: {
        header: null,
        showTabBar: false
      }
    }
  },
  {
    initialRouteName: "Cities"
  }
);

CitiesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  tabBarLabel = "Cities";
  tabBarIcon = TabIcon;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "AddLocal") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel,
    tabBarIcon
  };
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Cities: CitiesStack,
      AddCity: AddCity
    },
    {
      initialRouteName: "AddCity",
      tabBarOptions: {
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secundary,
        style: {
          backgroundColor: colors.white
        }
      }
    }
  )
);

export default Routes;
