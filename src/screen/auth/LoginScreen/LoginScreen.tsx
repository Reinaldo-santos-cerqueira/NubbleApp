import React from 'react';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { Icon } from '../../../components/icon/icon';
import { Screen } from '../../../components/screen/screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routes';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'LoginScreen'>

export function LoginScreen({navigation}:ScreenProps) {

	function submitForm() {
		
	}

	function navigateSignUpScreen() {
		navigation.navigate('SignUpScreen');
	}
	return (
		<Screen>
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
				boxProps={{ mb: 's20' }}
			/>
			<TextInput
				label='Senha'
				icon={<Icon name='eyeOff' color='gray2' />}
				placeholder='Digite sua senha'
				boxProps={{ mb: 's10' }}
			/>
			<Text color='primary' bold preset='paragraphSmall'>
                    Esqueci minha senha
			</Text>
			<Button onPress={submitForm} mt='s48' preset='primary' title='Entrar' />
			<Button onPress={navigateSignUpScreen} mt='s12' preset='outline' title='Criar conta' />
		</Screen>
	);
}