import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../screen/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screen/auth/signUpScreen/signUpScreen';
import { SuccessScreen } from '../screen/auth/successScreen/successScreen';
import { IconName } from '../components/icon/icon';
import { ThemeColors } from '../theme/theme';
export type RootStackParams = {
	LoginScreen: undefined,
	SignUpScreen: undefined,
	SuccessScreen: {
		title: string;
		content: string;
		icon: IconName;
		color: ThemeColors;
		colorCicle: ThemeColors;
	}
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
					name='SuccessScreen' 
					component={SuccessScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}