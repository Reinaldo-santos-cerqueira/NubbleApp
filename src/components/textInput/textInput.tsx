import React from 'react';
import { TextInput as RNTextInput, TextInputProps as RnTextInputProps } from 'react-native';
import { Box, BoxProps } from '../box/box';
import { Text } from '../text/text';

interface TextInputProps extends RnTextInputProps {
    label: string
}

export function TextInput({label,...props}: TextInputProps){
	return( 
		<Box>
			<Text mb={'s4'} preset='paragraphMedium'>{label}</Text>
			<Box {...$textInputContainer}
				
			>
				<RNTextInput {...props}/>
			</Box>
		</Box>
	);
}

const $textInputContainer: BoxProps = {
	padding:'s16',
	borderWidth:1,
	borderColor:'gray4',
	borderRadius:'s12'
};