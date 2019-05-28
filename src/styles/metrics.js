import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  baseMargin: "5px",
  basePadding: "10px",
  baseRadius: "3px",
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
};
