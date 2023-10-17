import React from 'react';
import { 
	TouchableOpacityProps as TouOpaProps 
} from 'react-native';
import { Text } from '../text/text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../box/box';

interface TouchableOpacityProps extends TouOpaProps {
    title: string
}

export function Button({ title, ...rest }: TouchableOpacityProps) {
	const { colors } = useTheme<Theme>();

	return (
		<Box
			backgroundColor='greenPrimary'
			paddingHorizontal='s20'
			paddingVertical='s10'
			borderRadius='s12'
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
		</Box>
	);
}