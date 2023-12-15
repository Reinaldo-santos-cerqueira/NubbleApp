import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Text } from '../../../components/text/text';
import { Button } from '../../../components/button/button';
import { useResetNavigation } from '../../../hooks/useResetNavigationSucess';
import {  useForm } from 'react-hook-form';
import { FormInputText } from '../../../components/formInputText/formInputText';
import { FormInputPassword } from '../../../components/formInputPassword/formInputPassword]';

type SignUpForm = {
	email: string,
	password: string,
	username: string,
	fullName: string
}

export function SignUpScreen(){
	const {reset} = useResetNavigation();
	const { control, formState, handleSubmit } = useForm<SignUpForm>({
		defaultValues: {
			email: '',
			password: '',
			username: '',
			fullName: ''	
		},
		mode: 'onChange'
	});
	const submitForm = () => {
		reset({
			title: 'Sua conta foi criada com sucesso!',
			content: 'Agora é só fazer login na nossa plataforma',
			icon: {
				name:'checkRoundIcon',
				color: 'grayWhite',
				circleColor: 'primary'
			}
		});
	};
	return(
		<Screen canGoBack scrollable textBackButton="Voltar" >
			<Text bold color='grayBlack' preset='headingLarge' mb='s32'>
                Criar uma conta
			</Text>
			<FormInputText
				name={'username'}
				control={control}
				rules={{
					required: 'Username é obrigatório',
				}}
				label='Seu username'
				placeholder='@'
				boxProps={{ mb: 's16' }}
			/>
			<FormInputText
				name={'fullName'}
				control={control}
				rules={{
					required: 'Username é obrigatório',
				}}
				label='Nome completo'
				placeholder='Digite seu nome completo'
				boxProps={{ mb: 's16' }}
			/>
			<FormInputText
				name={'email'}
				control={control}
				rules={{
					required: 'E-mail é obrigatório',
					pattern: {
						message: 'E-mail deve ser valido',
						value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
					}
				}}
				label='E-mail'
				placeholder='Digite seu email'
				boxProps={{ mb: 's16' }}
			/>
		
			<FormInputPassword
				name={'password'}
				control={control}
				rules={{
					required: 'Senha é obrigatório',
					pattern: {
						message: 'Senha deve ser forte',
						value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
					}
				}}
				label='Senha'
				placeholder='Digite sua senha'
				boxProps={{ mb: 's16' }}
			/>
			<Button 
				disabled={!formState.isValid}
				onPress={handleSubmit(submitForm)}
				title='Criar minha conta' 
				preset='primary'
			/>
		</Screen>
	);
}