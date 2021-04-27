import React, { useEffect, useState } from 'react';
import { Text } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';

import { IUserTypeComboBox } from '../../typings'

type ComponentProps = {
	title?: string;
	data?: IUserTypeComboBox[];
	selectedValue?: string;
	changeValue?: (item:string) => void;
}

const defaultValue:IUserTypeComboBox = {
	label:"", 
	value:""
};

const defaultProps = {
	title: "Title",
	data: [defaultValue],
	selectedValue: "",
	changeValue: (item:string) => {}
};

const component = ({ 
	title = defaultProps.title, 
	data = defaultProps.data, 
	selectedValue = defaultProps.selectedValue,
	changeValue = defaultProps.changeValue,
}: ComponentProps ) => (
	<>			
		<Text>{ title }</Text>
		<Picker
			selectedValue={ selectedValue }
			onValueChange={ (itemValue, itemIndex) => changeValue(itemValue) }
			style={ {height:50} } 
		>
			{ 
				data.map( (item:IUserTypeComboBox) => (
					<Picker.Item label={item.label} value={item.value} key={item.value} />
				)) 
			}
		</Picker>
	</>
)

export default component
