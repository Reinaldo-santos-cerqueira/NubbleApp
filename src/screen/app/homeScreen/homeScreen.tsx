import { Button, Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import React from 'react';

export function HomeScreen({ navigation }: AppScreenProps<'HomeScreen'>): React.ReactNode {

	const goSettings = () => {
		navigation.push('SettingsScreen');
	};

	return (
		<Screen>
			<Text preset='headingLarge'>
				Home Screen
			</Text>
			<Button title='Settings' onPress={goSettings} />
		</Screen>
	);
}