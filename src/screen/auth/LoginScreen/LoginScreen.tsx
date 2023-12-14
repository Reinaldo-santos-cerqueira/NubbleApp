import React from 'react';
import { Text } from '../../../components/text/text';
import { TextInput } from '../../../components/textInput/textInput';
import { Button } from '../../../components/button/button';
import { Screen } from '../../../components/screen/screen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../../routes/routes';
import { useForm, Controller } from 'react-hook-form';
import { InputPassword } from '../../../components/passwordInput/passwordInput';

type ScreenProps = NativeStackScreenProps<RootStackParams, 'LoginScreen'>

type LoginForm = {
	email: string,
	password: string
}

export function LoginScreen({ navigation }: ScreenProps) {
	const { control, formState, handleSubmit } = useForm<LoginForm>({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange'
	});

	function submitForm({ email, password }: LoginForm) {
		console.log('====================================');
		console.log(email, password );
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
			<Controller
				name={'email'}
				control={control}
				rules={{
					pattern:{
						message: 'E-mail deve ser valido',
						value: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
					}
				}}
				render={({ field, fieldState }) => {
					return (
						<TextInput
							erroMessage={fieldState.error?.message}
							value={field.value}
							onChangeText={field.onChange}
							label='E-mail'
							placeholder='Digite seu email'
							boxProps={{ mb: 's20' }}
						/>
					);
				}}
			/>

			<Controller
				name={'password'}
				rules={{
					required: 'Senha é obrigatório',
					pattern: {
						message: 'Senha deve ser forte',
						value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
					}
				}}
				control={control}
				render={({ field, fieldState }) => {
					return (
						<InputPassword
							erroMessage={fieldState.error?.message}
							value={field.value}
							onChangeText={field.onChange}
							label='Senha'
							placeholder='Digite sua senha'
							boxProps={{ mb: 's10' }}
						/>
					);
				}}
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