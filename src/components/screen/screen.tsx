import React from 'react';
import { Box } from '../box/box';
import { SafeAreaView } from 'react-native';
interface ScreenProps {
    children: React.ReactNode
}
export function Screen({children}:ScreenProps) {
	return(
		<SafeAreaView>
			<Box paddingHorizontal='s24'>
				{children}
			</Box>
		</SafeAreaView>
	);
}