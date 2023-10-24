import React from 'react';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { Icon } from '../../../components/icon/icon';
import { Screen } from '../../../components/screen/screen';

export function LoginScreen() {
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
			<Button mt='s48' preset='primary' title='Entrar' />
			<Button mt='s12' preset='outline' title='Criar conta' />
		</Screen>
	);
}