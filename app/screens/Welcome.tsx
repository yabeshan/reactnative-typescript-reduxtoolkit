import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackParams'

type screenProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const component = () => {
  const navigation = useNavigation<screenProp>();

  useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate('LoginScreen');
		}, 400);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
}

export default component