import React from 'react';
import { 
	TouchableOpacityProps as TouOpaProps 
} from 'react-native';
import { Text } from '../text/text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacityBox } from '../box/box';

interface TouchableOpacityProps extends TouOpaProps {
    title: string
}

export function Button({ title }: TouchableOpacityProps) {
	const { colors } = useTheme<Theme>();

	return (
		<TouchableOpacityBox
			backgroundColor='greenPrimary'
			borderRadius='s12'
			height={50}
			alignItems='center'
			justifyContent='center'
			// style={{
			// 	paddingHorizontal: 20,
			// 	paddingVertical: 15,
			// 	backgroundColor: colors.primary,
			// 	alignItems: 'center',
			// 	borderRadius: 16	
			// }}
			//{...rest}
		>
			<Text color={colors.grayWhite} bold>{title}</Text>
		</TouchableOpacityBox>
	);
}