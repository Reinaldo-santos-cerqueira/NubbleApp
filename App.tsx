import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/box/box';
import { Icon } from './src/components/icon/icon';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{paddingHorizontal: 20}}>
					<Text preset='headingLarge' italic>
						CoffStack
					</Text>
					<Box height={20}/>
					<Icon name='eyeOff' size={50}/>
					<Box height={20}/>
					<Icon name='eyeOn' size={50}/>
					<Box height={20}/>
					<Button preset='primary' title='Entrar' />
					<Box height={20}/>
					<Button preset='outline' title='Criar conta' />
				</View>
			</SafeAreaView>
		</ThemeProvider>
	);
}
export default App;