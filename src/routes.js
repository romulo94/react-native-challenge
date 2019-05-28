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

const TabIcon = ({ tintColor }) => (
  <Icon name="city-variant-outline" size={20} color={tintColor} />
);

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Cities: createStackNavigator(
        {
          Cities: Cities,
          Local: LocalCity
        },
        {
          navigationOptions: () => ({
            tabBarLabel: "Cities",
            tabBarIcon: TabIcon
          })
        }
      ),
      AddCity: AddCity
    },
    {
      initialRouteName: "Cities",
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
