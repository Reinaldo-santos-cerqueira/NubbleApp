import React from 'react';
import { Box } from '../box/box';
import { KeyboardAvoidingView, Platform, Pressable, SafeAreaView } from 'react-native';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
import { ScrollViewContainer, ViewContainer } from './Container';
import { useNavigation } from '@react-navigation/native';
import { useAppSafeArea, useAppTheme } from '@hooks';
interface ScreenProps {
	canGoBack?: boolean;
	textBackButton?: string;
	children: React.ReactNode;
	scrollable?: boolean;
}
export function Screen({ children, canGoBack, textBackButton = '',scrollable}: ScreenProps) {
	const { top,bottom } = useAppSafeArea();
	const {colors} = useAppTheme();
	const { goBack } = useNavigation();
	const Container = scrollable ? ScrollViewContainer : ViewContainer;
	return (
		<SafeAreaView>
			<KeyboardAvoidingView 
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
			>
				<Container backgroundColor={colors.background} >
					<Box 
						paddingHorizontal='s24' 
						paddingBottom='s24' 
						style={{ paddingTop: top,paddingBottom: bottom }}
					>
						{
							canGoBack &&
							<Pressable onPress={() => console.log('Teste')}>
								<Box mb={'s24'} flexDirection='row' alignItems='center'>
									<Icon onPress={goBack} name='arrowLeft' color='primary' size={20} />
									{
										textBackButton !== ''
										&&
											<Text
												ml={'s4'}
												preset='headingMedium'
												bold
												color='grayBlack'
											>
												{textBackButton}
											</Text>
									}
								</Box>
							</Pressable>
						}
						{children}
					</Box>
				</Container>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}