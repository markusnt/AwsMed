/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';

import { Container, Card, Line, Column, Name, Status } from './styles';
import {
  CREATED,
  AWAIT_OPME,
  ACCEPTED_OPME,
  AWAIT_OPERATOR,
  ACCEPTED_GUIDE,
  CANCELED,
} from '../../utils/themes';

const GuideCard: React.FC = ({ ...rest }) => {
  const navigation = useNavigation();

  const name = 'Dale';
  const status = 'CREATED';
  const dateCreate = '12/12/1212';
  const dateValidade = '12/12/1212';
  const hospital = 'UMC';

  const statusName = (type: string) => {
    switch (type) {
      case 'CREATED': {
        return (
          <Status style={{ color: CREATED, fontWeight: 'bold' }}>
            Guia Criada!
          </Status>
        );
      }
      case 'AWAIT_OPME': {
        return (
          <Status style={{ color: AWAIT_OPME, fontWeight: 'bold' }}>
            Aguardando opme
          </Status>
        );
      }
      case 'ACCEPTED_OPME': {
        return (
          <Status style={{ color: ACCEPTED_OPME, fontWeight: 'bold' }}>
            Opme aceita
          </Status>
        );
      }
      case 'AWAIT_OPERATOR': {
        return (
          <Status style={{ color: AWAIT_OPERATOR, fontWeight: 'bold' }}>
            Aguardando operadora
          </Status>
        );
      }
      case 'ACCEPTED_GUIDE': {
        return (
          <Status style={{ color: ACCEPTED_GUIDE, fontWeight: 'bold' }}>
            Guia aceita
          </Status>
        );
      }
      case 'CANCELED': {
        return (
          <Status style={{ color: CANCELED, fontWeight: 'bold' }}>
            Cancelada
          </Status>
        );
      }
      default:
        break;
    }
  };

  const handleSelectGuide = () => {
    navigation.navigate('Details');
  };

  return (
    <Card onPress={() => handleSelectGuide()}>
      <Line
        style={{
          backgroundColor:
            status === 'CREATED'
              ? CREATED
              : status === 'AWAIT_OPME'
              ? AWAIT_OPME
              : status === 'ACCEPTED_OPME'
              ? ACCEPTED_OPME
              : status === 'AWAIT_OPERATOR'
              ? AWAIT_OPERATOR
              : status === 'ACCEPTED_GUIDE'
              ? ACCEPTED_GUIDE
              : CANCELED,
        }}
      />
      <Column>
        <Name>{name}</Name>
        {statusName(status)}
        <Status>{hospital}</Status>
        <Status>
          Criação: {dateCreate} Validade: {dateValidade}
        </Status>
      </Column>
    </Card>
  );
};

export default GuideCard;
