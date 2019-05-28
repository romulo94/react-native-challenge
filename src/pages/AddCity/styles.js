import styled from "styled-components/native";
import { colors, metrics } from "../../styles";

export const Container = styled.View`
  flex: 1;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  width: 100%;
  height: 48px;
  background: ${colors.white};
  margin-top: 5;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  height: 48px;
  background: ${colors.secundary};
  align-items: center;
  justify-content: center;
  margin-top: 5;
`;

export const TextButton = styled.Text`
  color: ${colors.white};
`;
export const TextDefault = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
`;
