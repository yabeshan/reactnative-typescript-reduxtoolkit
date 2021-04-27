import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Button, Card, Text, Input } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/StackParams';

import { useDispatch } from 'react-redux';
import { userRole, userDirection, userSpecialization, userProjectName } from '../store/UserReducer';

import { FormComboBox } from '../components';

type screenProp = StackNavigationProp<RootStackParamList, 'UserScreen'>;

const roleParts = [
	{ label:'', value:'' },
	{ label:'Дизайнер', value:'Дизайнер' },
	{ label:'Разработчик', value:'Разработчик' }
];

const directionParts = [
	{ label:'', value:'' },
	{ label:'Backend', value:'Backend' },
	{ label:'Frontend', value:'Frontend' },
]

const specializationParts = [
	{ label:'', value:'' },
	{ label:'Web', value:'Web' },
	{ label:'Mobile', value:'Mobile' },
]

const component = () => {
  const navigation = useNavigation<screenProp>();
	const dispatch = useDispatch();

	const [selectedRole, setSelectedRole] = useState<string>("");
	const [selectedDirection, setSelectedDirection] = useState<string>("");
	const [selectedSpecialization, setSelectedSpecialization] = useState<string>("");
	const [projectName, setProjectName] = useState<string>("");
	const [errorStatus, setErrorStatus] = useState<string>("");
	
	const changeRole = (item:string) => {
		setSelectedRole(item);
	}

	const changeDirection = (item:string) => {
		setSelectedDirection(item);
	}

	const changeSpecialization = (item:string) => {
		setSelectedSpecialization(item);
	}

	const submitHandler = () => {
		if (!Boolean(selectedRole)) {
			setErrorStatus("Выберите роль");
			return false;
		}

		if (selectedRole === roleParts[1].value && !Boolean(selectedSpecialization)) {
			setErrorStatus("Выберите специализацию");
			return false;
		}

		if (selectedRole === roleParts[2].value && !Boolean(selectedDirection)) {
			setErrorStatus("Выберите направление");
			return false;
		}

		setErrorStatus("");
		dispatch( userRole(selectedRole) );
		dispatch( userDirection(selectedDirection) );
		dispatch( userSpecialization(selectedSpecialization) );
		dispatch( userProjectName(projectName) );
		
		navigation.navigate('InfoScreen');
	}

	const getStepSecond = () => {
		if (selectedRole === roleParts[1].value) {
			return (
				<FormComboBox 
					title="Специализация" 
					data={specializationParts} 
					selectedValue={selectedSpecialization} 
					changeValue={changeSpecialization} />
			)
		}
		if (selectedRole === roleParts[2].value) {
			return (
				<FormComboBox 
					title="Направление" 
					data={directionParts} 
					selectedValue={selectedDirection} 
					changeValue={changeDirection} />
			)
		}
		return null;
	}

  return (
    <ScrollView>
			<Card>
				<Card.Title style={{fontSize:25}}>Сведения о пользователе</Card.Title>
				<FormComboBox 
					title="Роль" 
					data={roleParts} 
					selectedValue={selectedRole} 
					changeValue={changeRole} />
				{ getStepSecond() }

				<Input 
					label="Название проекта" 
					value={projectName}
					onChangeText={(val)=>{
						setProjectName(val);
					}}
					containerStyle={{
						marginVertical: 20,
					}}
					/>
				<Text style={{color:'red'}}>{ errorStatus }</Text>
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