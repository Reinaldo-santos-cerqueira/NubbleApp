import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/box/box';
import { EyeOff } from './src/components/icons/eyeOff';
import { EyeOn } from './src/components/icons/eyeOn';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{paddingHorizontal: 20}}>
					<Text preset='headingLarge' italic>
						CoffStack
					</Text>
					<Box height={20}/>
					<EyeOff color='#100'/>
					<Box height={20}/>
					<EyeOn color='#100'/>
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