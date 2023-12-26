import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, Icon, Screen, Text } from '@components';
import { RootStackParams } from '@routes';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'SuccessScreen'>

export function SuccessScreen({route, navigation}:ScreenProps) {	

	function goLogin() {
		navigation.navigate('LoginScreen');
	}

	const { content,title,icon } = route.params;
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