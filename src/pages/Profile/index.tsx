import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';
import { IState } from '../../store';

import { Container, Title, User } from './styles';
import TabNavigation from '../../components/TabNavigation';
import Button from '../../components/Button';

import { signOut } from '../../store/modules/auth/actions';
import Header from '../../components/Header';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const userDate = useSelector<IState, any>((state) => {
    return state.auth.authState?.success;
  });

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Header title="Perfil" />
      <Container>
        <Title>Usuário</Title>
        <User>{userDate}</User>
        <Button onPress={() => handleLogout()}> SAIR </Button>
      </Container>

      <TabNavigation
        itemTabs={[{ name: 'PERFIL', icon: 'user', destiny: 'PERFIL' }]}
      />
    </>
  );
};

export default Profile;
