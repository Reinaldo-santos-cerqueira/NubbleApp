import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite, HomeScreen, NewPost, Profile } from '@screen';
import { Icon, Text } from '@components';

export type AppTabBottomTabParamsList = {
	HomeScreen: undefined;
	Favorite: undefined;
	Profile: undefined;
	NewPost: undefined;
}

const Tab = createBottomTabNavigator<AppTabBottomTabParamsList>();

export function AppTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					paddingTop: 20
				}
			}}
		>
			<Tab.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{
					tabBarLabel: ({ focused }) => (
						<Text
							semiBold
							color={focused ? 'primary' : 'backgroundContranst'}
							preset='paragraphCaption'
						>
							Inicio
						</Text>
					),
					tabBarIcon: ({ focused }) => (
						<Icon
							name={focused ? 'homeFill' : 'home'}
							color={focused ? 'primary' : 'backgroundContranst'}
						/>
					)

				}}
			/>
			<Tab.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
			<Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
			<Tab.Screen name="NewPost" component={NewPost} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
}