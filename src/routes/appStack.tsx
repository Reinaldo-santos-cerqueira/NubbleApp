import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '@screen';
import React from 'react';
import { AppTabBottomTabParamsList, AppTabNavigator } from './appTabNavigator';
import { NavigatorScreenParams } from '@react-navigation/native';

export type AppStackParamsList = {
	AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamsList>;
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
			<Stack.Screen component={AppTabNavigator} name={'AppTabNavigator'} />
			<Stack.Screen component={SettingsScreen} name={'SettingsScreen'} />
		</Stack.Navigator>

	);
}