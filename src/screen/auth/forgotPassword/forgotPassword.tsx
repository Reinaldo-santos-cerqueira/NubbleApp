import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Text } from '../../../components/text/text';
import { Button } from '../../../components/button/button';
import { useResetNavigation } from '../../../hooks/useResetNavigationSucess';
import { useForm } from 'react-hook-form';
import { ForgotPasswordSchema, forgotPasswordSchema } from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInputText } from '../../../components/formInputText/formInputText';

export function ForgotPasswrod(){
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