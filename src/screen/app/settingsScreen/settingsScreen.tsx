/* eslint-disable @typescript-eslint/no-unused-vars */
import { Screen, Text } from '@components';
import { AppScreenProps } from '@routes';
import React from 'react';

export function SettingsScreen({ navigation }: AppScreenProps<'SettingsScreen'>): React.ReactNode {
	return (
		<Screen canGoBack>
			<Text preset='headingLarge'>
				Settings Screen
			</Text>
		</Screen>
	);
}