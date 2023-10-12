import React from 'react';
import { TouchableOpacity,TouchableOpacityProps as TouOpaProps } from 'react-native';
import { Text } from '../text/text';

interface TouchableOpacityProps extends TouOpaProps {
    title: string
}

export function Button({ title,...rest }: TouchableOpacityProps) {
	return (
		<TouchableOpacity
			style={{
				paddingHorizontal: 20,
				paddingVertical: 15,
				backgroundColor: '#074C4E',
				alignItems: 'center',
				borderRadius: 16
			}}
			{...rest}
		>
			<Text  bold color='#FFF'>{title}</Text>
		</TouchableOpacity>
	);
}