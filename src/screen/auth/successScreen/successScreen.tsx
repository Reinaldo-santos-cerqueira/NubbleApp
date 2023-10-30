import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Box } from '../../../components/box/box';
import { Icon } from '../../../components/icon/icon';
import { Text } from '../../../components/text/text';
import { Button } from '../../../components/button/button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routes';

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