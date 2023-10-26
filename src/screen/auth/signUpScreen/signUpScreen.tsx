import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { InputPassword } from '../../../components/passwordInput/passwordInput';
import { RootStackParams } from '../../../routes/routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'SignUpScreen'>


export function SignUpScreen({navigation}: ScreenProps){
	const submitForm = () => {
		navigation.navigate('SuccessScreen',{
			title: 'Sua conta foi criada com sucesso!',
			content: 'Agora é só fazer login na nossa plataforma',
			icon: 'checkRoundIcon',
			color: 'grayWhite',
			colorCicle: 'primary'
		});
	};
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
				onPress={submitForm}
				title='Criar minha conta' 
				preset='primary'
			/>
		</Screen>
	);
}