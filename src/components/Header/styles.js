import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  max-height: 48px;
  background: ${colors.primary};
  justify-content: center;
`;
export const TextHeader = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 24;
`;
