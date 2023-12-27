import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthStack } from './authStack';
import { AppStack } from './appStack';

export function Router() {
	const authenticated = true;
	return (
		<NavigationContainer>
			{
				authenticated
					? <AppStack />
					: <AuthStack />
			}
		</NavigationContainer>
	);
}