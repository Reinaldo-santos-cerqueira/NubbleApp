import React from 'react';
import {  useForm } from 'react-hook-form';
import { SignUpSchema, signUpSchema } from './signUpScreenSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import { Button, FormInputPassword, FormInputText, Screen, Text } from '@components';
import { useResetNavigation } from '@hooks';
export function SignUpScreen(){
	const {reset} = useResetNavigation();
	const { control, formState, handleSubmit } = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
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
				label='Seu username'
				placeholder='@'
				boxProps={{ mb: 's16' }}
			/>
			<FormInputText
				name={'fullName'}
				control={control}
				label='Nome completo'
				placeholder='Digite seu nome completo'
				boxProps={{ mb: 's16' }}
			/>
			<FormInputText
				name={'email'}
				control={control}
				label='E-mail'
				placeholder='Digite seu email'
				boxProps={{ mb: 's16' }}
			/>
		
			<FormInputPassword
				name={'password'}
				control={control}
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