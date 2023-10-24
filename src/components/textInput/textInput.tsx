import React, { useRef } from 'react';
import { Pressable, TextInput as RNTextInput, TextInputProps as RnTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../box/box';
import { $fontFamily, Text,$fontSizes } from '../text/text';
import { useAppTheme } from '../../hooks/useAppTheme';

interface TextInputProps extends RnTextInputProps {
    label: string
}

export function TextInput({label,...props}: TextInputProps){
	const {colors} = useAppTheme();
	const inputRef = useRef<RNTextInput>(null);
	function focusInput(){
		inputRef.current?.focus();
	}
	return(
		<Pressable
			onPress={focusInput}
		>
			<Box>
				<Text mb={'s4'} preset='paragraphMedium'>{label}</Text>
				<Box 
					{...$textInputContainer}
				>
					<RNTextInput 
						ref={inputRef}
						placeholderTextColor={colors.gray2}
						{...props} 
						style={$textInputStyle}
					/>
				</Box>
			</Box>
		</Pressable>
	);
}

const $textInputStyle: TextStyle = {
	padding: 0,
	fontFamily: $fontFamily.regular,
	...$fontSizes.paragraphMedium
};

const $textInputContainer: BoxProps = {
	padding:'s16',
	borderWidth:1,
	borderColor:'gray4',
	borderRadius:'s12'
};