import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { primaryColor } from '../../utils/themes';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${primaryColor};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
