import React from 'react';
import {
	useForm
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginSchema } from './loginSchema';
import {
	Button,
	FormInputPassword,
	FormInputText,
	Screen,
	Text
} from '@components';
import { AuthScreenProps } from '@routes';


type LoginForm = {
	email: string,
	password: string
}

export function LoginScreen({ navigation }: AuthScreenProps<'LoginScreen'>) {
	const { control, formState, handleSubmit } =
		useForm<LoginSchema>({
			resolver: zodResolver(loginSchema),
			defaultValues: {
				email: '',
				password: '',
			},
			mode: 'onChange'
		});

	function submitForm({ email, password }: LoginForm) {
		console.log('====================================');
		console.log(email, password);
		console.log('====================================');
	}

	function navigateSignUpScreen() {
		navigation.navigate('SignUpScreen');
	}
	function goForgotPassword() {
		navigation.navigate('ForgotPassword');
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
			<Text onPress={goForgotPassword} color='primary' bold preset='paragraphSmall'>
				Esqueci minha senha
			</Text>
			<Button
				disabled={!formState.isValid}
				onPress={handleSubmit(submitForm)}
				mt='s48'
				preset='primary'
				title='Entrar'
			/>
			<Button onPress={navigateSignUpScreen} mt='s12' preset='outline' title='Criar conta' />
		</Screen>
	);
}