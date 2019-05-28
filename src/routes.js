import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

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
            activeTintColor: "#9b26b0",
            inactiveTintColor: "#8f8f8f",
            style: {
              backgroundColor: "white"
            }
          }
        }
      )
    },
    { initialRouteName: "CitiesAll" }
  )
);

export default Routes;
