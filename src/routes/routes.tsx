import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ThemeColors } from '../theme/theme';
import { IconName } from '@components';
import { ForgotPasswrod, LoginScreen, SignUpScreen, SuccessScreen } from '@screen';
export type RootStackParams = {
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

export function Router(){
	const Stack = createNativeStackNavigator<RootStackParams>();

	return(
		<NavigationContainer>
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
		</NavigationContainer>
	);
}