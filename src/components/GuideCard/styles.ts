import styled from 'styled-components/native';

export const Container = styled.View``;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  border-radius: 15px;
  elevation: 5;
`;

export const Column = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Line = styled.View`
  border-radius: 10px;
  width: 3px;
  height: 90%;
  background-color: #000;
`;

export const Name = styled.Text`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Status = styled.Text`
  font-size: 12px;
`;
