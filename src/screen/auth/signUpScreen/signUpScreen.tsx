import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { InputPassword } from '../../../components/passwordInput/passwordInput';
export function SignUpScreen(){
	return(
		<Screen canGoBack scrollable textBackButton="Voltar" >
			<Text bold color='grayBlack' preset='headingLarge' mb='s32'>
                Criar uma conta
			</Text>
			<TextInput 
				label='Seu username' 
				placeholder='@' 
				boxProps={{mb: 's16'}}
			/>
			<TextInput 
				label='Nome completo' 
				placeholder='Digite seu nome completo' 
				boxProps={{mb: 's16'}}
			/> 
			<TextInput 
				label='E-mail' 
				placeholder='Digite seu e-mail' 
				boxProps={{mb: 's16'}}
			/> 
			<InputPassword 
				label='Senha' 
				placeholder='Digite sua senha' 
				boxProps={{mb: 's48'}}
			/>
			<Button 
				title='Criar minha conta' 
				preset='primary'
			/>
		</Screen>
	);
}