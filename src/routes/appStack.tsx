import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, SettingsScreen } from '@screen';
import React from 'react';

export type AppStackParamsList = {
	HomeScreen: undefined;
	SettingsScreen: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamsList>();

export function AppStack(): React.ReactNode {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				fullScreenGestureEnabled: true
			}}
		>
			<Stack.Screen component={HomeScreen} name={'HomeScreen'} />
			<Stack.Screen component={SettingsScreen} name={'SettingsScreen'} />
		</Stack.Navigator>

	);
}