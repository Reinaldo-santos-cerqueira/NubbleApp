import React from 'react';
import { SafeAreaView, TextInput, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/box/box';
import { Icon } from './src/components/icon/icon';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{paddingHorizontal: 20}}>
					<Text 
						preset='headingLarge'
						margin='s8'
					>
						Olá
					</Text>
					<Text 
						preset='paragraphLarge'
						bold
						marginBottom='s40'
					>
						Digite seu e-mail e senha para entrar
					</Text>
					<Box mb='s20'>
						<TextInput placeholder='Digite seu email' style={{ borderWidth: 1,height:50}}/>
					</Box>
					<Box>
						<TextInput placeholder='Digite sua senha' style={{ borderWidth: 1,height:50}}/>
					</Box>
					<Text color='primary' bold preset='paragraphSmall'>
						Esqueci minha senha
					</Text>
					<Button mt='s48' preset='primary' title='Entrar'/>
					<Button mt='s12' preset='outline' title='Criar conta'/>
				</View>
			</SafeAreaView>
		</ThemeProvider>
	);
}
export default App;