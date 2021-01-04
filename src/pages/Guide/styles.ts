import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 20px;
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 15}px 15px 15px 15px;
  background-color: #fff;
  border-bottom-color: #f8fbfb;
  border-style: solid;
  border-bottom-width: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  color: #495057;
  font-size: 30px;
  margin-left: 16px;
`;
