import React from 'react';
import { TouchableOpacity,TouchableOpacityProps as TouOpaProps } from 'react-native';
import { Text } from '../text/text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';

interface TouchableOpacityProps extends TouOpaProps {
    title: string
}

export function Button({ title, ...rest }: TouchableOpacityProps) {
	const { colors } = useTheme<Theme>();

	return (
		<TouchableOpacity
			style={{
				paddingHorizontal: 20,
				paddingVertical: 15,
				backgroundColor: colors.primary,
				alignItems: 'center',
				borderRadius: 16	
			}}
			{...rest}
		>
			<Text style={{color: colors.grayWhite}}  bold>{title}</Text>
		</TouchableOpacity>
	);
}