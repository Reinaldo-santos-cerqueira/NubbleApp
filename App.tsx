import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';
import { TextInput } from './src/components/textInput/textInput';
import { Icon } from './src/components/icon/icon';

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
					<TextInput 
						erroMessage=''
						label='E-mail'
						placeholder='Digite seu email' 
						boxProps={{mb: 's20'}}
					/>
					<TextInput 
						label='Senha'
						icon={<Icon name='eyeOff' color='gray2' />}
						placeholder='Digite sua senha'
						boxProps={{mb: 's10'}}
					/>
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