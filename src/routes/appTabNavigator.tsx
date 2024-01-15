import React from 'react';
import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'; import { Favorite, HomeScreen, NewPost, Profile } from '@screen';
import { Icon, Text } from '@components';
import { AppTabBar } from './appTab';
export type AppTabBottomTabParamsList = {
	HomeScreen: undefined;
	FavoriteScreen: undefined;
	MyProfileScreen: undefined;
	NewPostScreen: undefined;
}

const Tab = createBottomTabNavigator<AppTabBottomTabParamsList>();

export function AppTabNavigator() {
	function renderTabBar(props: BottomTabBarProps) {
		return <AppTabBar {...props} />;
	}
	return (
		<Tab.Navigator
			tabBar={renderTabBar}
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
			<Tab.Screen name="FavoriteScreen" component={Favorite} options={{ headerShown: false }} />
			<Tab.Screen name="MyProfileScreen" component={Profile} options={{ headerShown: false }} />
			<Tab.Screen name="NewPostScreen" component={NewPost} options={{ headerShown: false }} />
		</Tab.Navigator>
	);
}