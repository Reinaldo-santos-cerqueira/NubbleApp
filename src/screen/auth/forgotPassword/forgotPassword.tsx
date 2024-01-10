import React from 'react';
import { useForm } from 'react-hook-form';
import { ForgotPasswordSchema, forgotPasswordSchema } from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, FormInputText, Screen, Text } from '@components';
import { useResetNavigation } from '@hooks';

export function ForgotPasswrod() {
	const { reset } = useResetNavigation();
	const { control, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: ''
		},
		mode: 'onChange'
	});
	const submitForm = () => {
		reset({
			title: 'Enviamos as instruções para seu e-mail',
			content: 'Clique no link enviado no seu e-mail para recuperar sua senha',
			icon: {
				name: 'messageRoundIcon',
				color: 'grayWhite',
				colorCicle: 'primary'
			}
		});
	};

	return (
		<Screen canGoBack textBackButton='Voltar '>
			<Text mt='s24' preset='headingLarge'>Esqueci minha{'\n'}senha</Text>
			<Text mt='s16' preset='paragraphLarge' mb="s32">Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
			<FormInputText
				name={'email'}
				control={control}
				label='E-mail'
				placeholder='Digite seu email'
				boxProps={{ mb: 's16' }}
			/>
			<Button
				onPress={handleSubmit(submitForm)}
				mt='s56'
				preset='primary' title='Recuperar senha'
				disabled={!formState.isValid}
			/>
		</Screen>
	);
}