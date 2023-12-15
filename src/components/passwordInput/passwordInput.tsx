import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../textInput/textInput';
import { Icon } from '../icon/icon';

export type PassswordInputProps = Omit<TextInputProps,'icon'>

export function InputPassword(props:PassswordInputProps){
	const [isSecurityEntry,setIsSecurityEntry] = useState(true);

	function toogleSecureTextEntry(){
		setIsSecurityEntry(!isSecurityEntry);
	}
    
	return(
		<TextInput
			{...props}
			secureTextEntry={isSecurityEntry}
			icon={
				<Icon onPress={toogleSecureTextEntry} name={isSecurityEntry ?'eyeOn' : 'eyeOff'} color='gray2' />
			}
		/>
	);
}