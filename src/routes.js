import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { colors } from "./styles";

import Cities from "./pages/Cities";
import AddCity from "./pages/AddCity";
import Welcome from "./pages/Welcome";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      CitiesAll: createBottomTabNavigator(
        {
          Cities,
          AddCity
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
    },
    { initialRouteName: "CitiesAll" }
  )
);

export default Routes;
