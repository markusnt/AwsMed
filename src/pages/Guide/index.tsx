import React from 'react';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import GuideCard from '../../components/GuideCard';
import TabNavigation from '../../components/TabNavigation';

import { Container, Header, HeaderTitle } from './styles';

const Guide: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderTitle>Guias</HeaderTitle>
        <Icon name="search" size={25} color="#18ABF4" />
      </Header>
      <Container>
        <GuideCard />
      </Container>
      <TabNavigation
        itemTabs={[{ name: 'PERFIL', icon: 'user', destiny: 'PERFIL' }]}
      />
    </>
  );
};

export default Guide;
