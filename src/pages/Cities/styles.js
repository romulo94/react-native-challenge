import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
`;

export const ItemList = styled.TouchableOpacity`
  flex: 1;

  height: 48;
  justify-content: center;
  padding-left: ${metrics.basePadding};

  border-bottom-width: 1px;
  border-bottom-color: ${colors.darkTransparent};
`;

export const TextListItem = styled.Text`
  color: ${colors.black};
`;
