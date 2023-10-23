import React from 'react';
import { Text } from '../text/text';
import { 
	TouchableOpacityBox, 
	TouchableOpacityBoxProps 
} from '../box/box';
import { ActivityIndicator } from '../activityIndicator/activityIndicator';
import { buttonPresets } from './buttonPreset';

export type ButtonPreset = 'primary' | 'outline';
interface ButtonProps extends TouchableOpacityBoxProps {
	title: string;
	loading?: boolean;
	preset?: ButtonPreset;
	disabled?: boolean;
}

export function Button(
	{ 
		title,
		loading,  
		preset = 'primary',
		disabled,
		...touchableOpacityProps
	}: ButtonProps
) {
	const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

	return (
		<TouchableOpacityBox
			disabled={disabled || loading}
			{...buttonPreset.container}
			height={50}
			borderRadius='s12'
			alignItems='center'
			justifyContent='center'
			{...touchableOpacityProps}
		>
			{loading ?
				<ActivityIndicator color={buttonPreset.content} />
				: <Text 
					color={buttonPreset.content} 
					bold
				>
					{title}
				</Text>
			}
			
		</TouchableOpacityBox>
	);
}