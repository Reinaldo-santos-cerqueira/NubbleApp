import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Box, Icon, Text, TouchableOpacityBox } from '@components';
import {
	AppTabBottomTabParamsList
} from './appTabNavigator';

import { mapScreenToProps } from './mapScreenToProps';
import { useAppSafeArea } from '@hooks';
import { ViewStyle } from 'react-native';

const $shadowProps: ViewStyle = {
	elevation: 10,
	shadowColor: '#000',
	shadowOpacity: .05,
	shadowRadius: 12,
	shadowOffset: { width: 0, height: -3 }
};

export function AppTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
	const { bottom } = useAppSafeArea();
	return (
		<Box flexDirection="row" style={[{ paddingBottom: bottom }, $shadowProps]} paddingTop='s12' bg='background' >
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const tabItem =
					mapScreenToProps[route.name as keyof AppTabBottomTabParamsList];

				const isFocused = state.index === index;

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({ name: route.name, merge: true, params: route.params });
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacityBox
						key={index}
						activeOpacity={1}
						alignItems="center"
						accessibilityRole="button"
						accessibilityState={isFocused ? { selected: true } : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}
						style={{ flex: 1 }}>
						<Icon
							color={isFocused ? 'primary' : 'backgroundContranst'}
							name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
						/>
						<Text
							semiBold
							preset="paragraphCaption"
							color={isFocused ? 'primary' : 'backgroundContranst'}>
							{tabItem.label}
						</Text>
					</TouchableOpacityBox>
				);
			})}
		</Box>
	);
}