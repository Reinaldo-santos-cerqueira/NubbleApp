import React from 'react';
import { Box } from '../box/box';
import { SafeAreaView } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
interface ScreenProps {
    children: React.ReactNode
}
export function Screen({children}:ScreenProps) {
	const {top} = useAppSafeArea();
	return(
		<SafeAreaView>
			<Box paddingHorizontal='s24' style={{paddingTop: top}}>
				{children}
			</Box>
		</SafeAreaView>
	);
}