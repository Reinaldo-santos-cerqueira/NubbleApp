import React from 'react';
import { Box } from '../box/box';
import { Pressable, SafeAreaView } from 'react-native';
import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Icon } from '../icon/icon';
import { Text } from '../text/text';
interface ScreenProps {
	canGoBack?: boolean,
	textBackButton?: string,
    children: React.ReactNode
}
export function Screen({children,canGoBack,textBackButton = ''}:ScreenProps) {
	const {top} = useAppSafeArea();
	return(
		<SafeAreaView>
			<Box paddingHorizontal='s24' style={{paddingTop: top}}>
				{
					canGoBack && 
						<Pressable onPress={()=>console.log('Teste')}>
							<Box mb={'s24'} flexDirection='row' alignItems='center'>
								<Icon name='arrowLeft' color='primary' size={20}/>
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
		</SafeAreaView>
	);
}