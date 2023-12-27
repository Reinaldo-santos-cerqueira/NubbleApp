import { IconName } from '@components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswrod, LoginScreen, SignUpScreen, SuccessScreen } from '@screen';
import React from 'react';
import { ThemeColors } from 'src/theme/theme';

export type AuthStackParams = {
	LoginScreen: undefined,
	SignUpScreen: undefined,
	SuccessScreen: {
		title: string;
		content: string;
		icon: {
			name: IconName;
			color: ThemeColors;
			colorCicle: ThemeColors;
		}
	},
	ForgotPassword: undefined
}


const Stack = createNativeStackNavigator<AuthStackParams>();


export function AuthStack(): React.ReactNode {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				fullScreenGestureEnabled: true
			}}
			initialRouteName='LoginScreen'

		>
			<Stack.Screen
				name='LoginScreen'
				component={LoginScreen}
			/>
			<Stack.Screen
				name='SignUpScreen'
				component={SignUpScreen}
			/>
			<Stack.Screen
				name='ForgotPassword'
				component={ForgotPasswrod}
			/>
			<Stack.Screen
				name='SuccessScreen'
				component={SuccessScreen}
			/>
		</Stack.Navigator>

	);
}