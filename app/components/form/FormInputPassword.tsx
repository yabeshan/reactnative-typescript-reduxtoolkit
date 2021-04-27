import React, { useState } from 'react';
import { Input } from 'react-native-elements';

type ComponentProps = {
	label?: string;
	placeholder?: string;
	value?: string;
	changeValue?: (val:string) => void;
}

const defaultProps = {
	label: "",
	placeholder: "",
	value: "",
	changeValue: (val:string) => {}
};

const component = ({ 
	label = defaultProps.label, 
	placeholder = defaultProps.placeholder, 
	value = defaultProps.value, 
	changeValue = defaultProps.changeValue,
}: ComponentProps ) => {

	const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

	return (
		<>			
			<Input
				label={label} 
				placeholder={placeholder}
				value={value}
				secureTextEntry={secureTextEntry} 
				onChangeText={changeValue}
				leftIcon={{ 
					type: 'font-awesome', 
					name: 'lock' 
				}}
				rightIcon={{ 
					type: 'font-awesome', 
					name: secureTextEntry ? 'eye-slash' : 'eye', 
					onPress:()=>{
						setSecureTextEntry(!secureTextEntry);
					} 
				}}
				containerStyle={{
					marginVertical: 10,
				}}
				/>
		</>
	)
}

export default component
