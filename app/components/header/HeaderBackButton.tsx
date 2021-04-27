import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

const component = () => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity 
			style={{ flex:1, padding:10, alignItems:'center', justifyContent:'center', flexDirection: 'row' }}
			onPress={()=>{
				navigation.goBack();
			}} 
		>
			<Icon
				name='chevron-left'
				type='font-awesome'
				/>
			<Text style={{fontSize:18, paddingLeft:10, paddingBottom:5 }}>Back</Text>
		</TouchableOpacity>
	)
}

export default component