import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO, getDate } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TextMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector, useDispatch } from 'react-redux';

import { Text, View } from 'react-native';
import { IState } from '../../store';

import {
  Container,
  Description,
  DescriptionValue,
  Title,
  SubTitle,
  Content,
  DayBox,
  Row,
  Column,
  Mouth,
  Year,
  DescriptionBox,
  Line,
  Sort,
} from './styles';

import { filterOpen } from '../../store/modules/filter/actions';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import historicals from './data';

const Details: React.FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  // const { item } = route.params ?? '';

  const type = useSelector<IState, any>((state) => {
    return state.filter.filterClass;
  });

  const handleMonth = (item: any) => {
    const str = format(parseISO(item), 'MMMM', { locale: ptBR });
    const transform = str[0].toUpperCase() + str.substr(1); // Ricardo

    return transform;
  };

  const handleFilter = () => {
    dispatch(filterOpen());
  };

  const handleSort = () => {};

  return (
    <>
      <Header title="Detalhes" />
      <Container>
        <Content>
          <Title>000000001</Title>
          <SubTitle>Nome Completo</SubTitle>
          <Description>João Silve</Description>
          <SubTitle>Nome do Médico</SubTitle>
          <Description>Fulano de Tal</Description>
          <SubTitle>Nome da Operadora</SubTitle>
          <Description>Josefina</Description>
        </Content>

        <Line />

        <Content>
          <Row
            style={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Title>HISTÓRICO</Title>
            <Sort onPress={() => handleFilter()}>
              <Row style={{ alignItems: 'center' }}>
                <SubTitle style={{ color: '#fff' }}>
                  Ordenar por data
                  {/* {type.orderBy ? 'Ordenar por descrição' : 'Ordenar por data'} */}
                </SubTitle>
                <Icon
                  // name={type.sortBy ? 'arrow-down' : 'arrow-up'}
                  name="arrow-up"
                  size={14}
                  color="#fff"
                />
              </Row>
            </Sort>
          </Row>

          {historicals.map((historic: any) => {
            return (
              <View key={historic.key}>
                <Row>
                  <DayBox>
                    {format(parseISO(historic.date), 'd', { locale: ptBR })}
                  </DayBox>
                  <Column>
                    <Mouth>{handleMonth(historic.date)}</Mouth>
                    <Year>
                      {format(parseISO(historic.date), 'yyyy', {
                        locale: ptBR,
                      })}
                    </Year>
                  </Column>
                </Row>
                <DescriptionBox>
                  <Text>{historic.description}</Text>
                </DescriptionBox>
              </View>
            );
          })}
        </Content>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
