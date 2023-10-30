import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { useResetNavigation } from '../../../hooks/useResetNavigationSucess';

export function ForgotPasswrod(){
	const {reset} = useResetNavigation();
	const submitForm = () => {
		reset({
			title: 'Enviamos as instruções para seu e-mail',
			content: 'Clique no link enviado no seu e-mail para recuperar sua senha',
			icon: {
				name:'messageRoundIcon',
				color: 'grayWhite',
				circleColor: 'primary'
			}
		});
	};

	return(
		<Screen canGoBack textBackButton='Voltar '>
			<Text mt='s24' preset='headingLarge'>Esqueci minha{'\n'}senha</Text>
			<Text mt='s16' preset='paragraphLarge' mb="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
			<TextInput  label='Email' placeholder='Digite seu e-mail'/>
			<Button onPress={submitForm} mt='s56' preset='primary' title='Recuperar senha' />
		</Screen>
	);
}