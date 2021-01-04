import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import { Container, Title } from './styles';
import { primaryColor } from '../../utils/themes';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({ title, ...rest }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Icon
        name="arrow-left"
        size={30}
        color={primaryColor}
        onPress={() => navigation.goBack()}
      />
      <Title>{title}</Title>
      {/* <Icon name="paperclip" size={20} color="#18abf4" /> */}
    </Container>
  );
};

export default Header;
