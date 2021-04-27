import React, { useState, FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Input, Text } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackParams';

import { useDispatch } from 'react-redux';
import { userLogin } from '../store/UserReducer';

import { FormInputPassword } from '../components'

type screenProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const component: FunctionComponent = () => {
  const navigation = useNavigation<screenProp>();
	const dispatch = useDispatch();

	const [loginValue, setLoginValue] = useState<string>("");
	const [passwordValue, setPasswordValue] = useState<string>("");
	const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>("");
	const [errorStatus, setErrorStatus] = useState<string>("");

	const changeLogin = (val:string) => {
		setLoginValue(val);
	}

	const changePassword = (val:string) => {
		setPasswordValue(val);
	}

	const changeConfirmPassword = (val:string) => {
		setConfirmPasswordValue(val);
	}

	const cancelHandler = () => {
		setLoginValue("");
		setPasswordValue("");
		setConfirmPasswordValue("");
	}

	const checkLength = (val:string, name:string, min:number, max:number) => {
		if (val.length>=min && val.length<=max) {
			return "";
		}
		return "Пожалуйста, введите "+ name +" от "+ min +" до "+ max +" символов включительно. \n";
	}

	const submitHandler = () => {
		let err = "";
		err += checkLength(loginValue, "логин", 3, 12);
		err += checkLength(passwordValue, "пароль", 6, 10);
		err += checkLength(confirmPasswordValue, "подтверждение пароля", 6, 10);
		err += (confirmPasswordValue === passwordValue) ? "" : "Пожалуйста, убедитесь, что введенный и подтверждаемый пароли совпадают";

		if (err.length>0) {
			setErrorStatus(err);
			return false;
		}
		
		setErrorStatus("");
		dispatch( userLogin(loginValue) );
		navigation.navigate('UserScreen');
	}

  return (
    <ScrollView>
      <Card>
				<Card.Title style={{fontSize:25}}>Данные для регистрации пользователя</Card.Title>
				<Input 
					label="Логин" 
					placeholder="Login"
					value={loginValue}
					onChangeText={changeLogin}
					leftIcon={{ type: 'font-awesome', name: 'user' }}
					containerStyle={{
						marginVertical: 10,
					}}
					/>
				<FormInputPassword 
					label="Пароль" 
					placeholder="Password"
					value={passwordValue}
					changeValue={changePassword}
				/>
				<FormInputPassword 
					label="Подтверждение пароля" 
					placeholder="Confirm password"
					value={confirmPasswordValue}
					changeValue={changeConfirmPassword}
				/>
				<Text style={{color:'red'}}>{ errorStatus }</Text>
				<Button
					title="Cancel"
					onPress={cancelHandler}
					buttonStyle={{ 
						backgroundColor: 'rgba(214, 61, 57, 1)' 
					}}
					containerStyle={{
						marginVertical: 10,
					}} />
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