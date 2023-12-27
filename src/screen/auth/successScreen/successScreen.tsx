import React from 'react';
import { Box, Button, Icon, Screen, Text } from '@components';
import { AuthScreenProps } from '@routes';

export function SuccessScreen({ route, navigation }: AuthScreenProps<'SuccessScreen'>) {

	function goLogin() {
		navigation.navigate('LoginScreen');
	}

	const { content, title, icon } = route.params;
	return (
		<Screen>
			<Box mb='s24'>
				<Icon {...icon} />
			</Box>
			<Text mb='s16' preset='headingLarge'>
				{title}
			</Text>
			<Text mb='s40' preset='paragraphLarge'>
				{content}
			</Text>
			<Button onPress={goLogin} preset='primary' title='Voltar ao inicio' />
		</Screen>
	);
}