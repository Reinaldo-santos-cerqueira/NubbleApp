import React from 'react';
import { Text } from '../text/text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../box/box';

interface TouchableOpacityProps extends TouchableOpacityBoxProps {
    title: string,
	loading?: boolean
}

export function Button({ title,  ...touchableOpacityProps}: TouchableOpacityProps) {
	const { colors } = useTheme<Theme>();

	return (
		<TouchableOpacityBox
			backgroundColor='greenPrimary'
			height={50}
			borderRadius='s12'
			alignItems='center'
			justifyContent='center'
			{...touchableOpacityProps}
		>
			<Text color={colors.grayWhite} bold>{title}</Text>
		</TouchableOpacityBox>
	);
}