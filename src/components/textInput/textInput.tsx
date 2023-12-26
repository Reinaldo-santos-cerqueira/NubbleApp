import React, { useRef } from 'react';
import { Pressable, TextInput as RNTextInput, TextInputProps as RnTextInputProps, TextStyle } from 'react-native';
import { Box, BoxProps } from '../box/box';
import { $fontFamily, Text,$fontSizes } from '../text/text';
import { IconBase } from '../icon/icon';
import { useAppTheme } from '@hooks';

export interface TextInputProps extends RnTextInputProps {
    label: string,
	erroMessage?: string,
	icon?: React.ReactElement<IconBase>;
	boxProps?: BoxProps
}

export function TextInput({label,erroMessage,icon,boxProps,...props}: TextInputProps){
	const {colors} = useAppTheme();
	const inputRef = useRef<RNTextInput>(null);
	function focusInput(){
		inputRef.current?.focus();
	}
	return(
		<Box {...boxProps}>
			<Pressable
				onPress={focusInput}
			>
				<Text mb={'s4' } color='grayBlack' preset='paragraphMedium'>{label}</Text>
				<Box 
					{...$textInputContainer(erroMessage)}
				>
					<RNTextInput 
						ref={inputRef}
						placeholderTextColor={colors.gray2}
						{...props} 
						style={$textInputStyle}
					/> 
					{icon && <Box ml={'s16'}>{icon}</Box> }
				</Box>
				{
					erroMessage && <Text color='error' preset='paragraphSmall' bold>{erroMessage}</Text>
				}
			</Pressable>
		</Box>
	);
}

const $textInputStyle: TextStyle = {
	padding: 0,
	flexGrow: 1,
	flexShrink: 1,
	fontFamily: $fontFamily.regular,
	flexDirection: 'row',
	...$fontSizes.paragraphMedium
};

const $textInputContainer =(erroMessage = ''): BoxProps =>{
	return {
		padding:'s16',
		borderWidth:1,
		flexDirection:'row',
		borderColor:erroMessage !== '' ? 'error' :'gray4',
		borderRadius:'s12'
	};

};