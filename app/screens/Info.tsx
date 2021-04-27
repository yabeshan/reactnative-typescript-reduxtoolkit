import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Input, Text } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackParams';

import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { PopupUserSubmit } from '../components'

type screenProp = StackNavigationProp<RootStackParamList, 'InfoScreen'>;

const component = () => {
  const navigation = useNavigation<screenProp>();
  const userState = useSelector((state: RootState) => state.user);

  const submitHandler = () => {
    console.log("submit")
  }

  return (
    <ScrollView>
      <Card>
				<Card.Title style={{fontSize:25}}>Подтверждение введенных данных</Card.Title>
        <Text>Логин: {userState.login}</Text>
        <Text>Роль: {userState.role}</Text>
        <Text>Направление: {userState.direction}</Text>
        <Text>Специализация: {userState.specialization}</Text>
        <Text>Название проекта: {userState.projectName}</Text>
        <Button
					title="Submit"
					onPress={submitHandler}
					containerStyle={{
						marginVertical: 10,
					}} />
			</Card>
    </ScrollView>
  );
}

export default component