import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { InputPassword, PassswordInputProps } from '../passwordInput/passwordInput';

export function FormInputPassword<FormType extends FieldValues>({
	control,
	name,
	rules,
	...textInputProps
}: PassswordInputProps & UseControllerProps<FormType>
) {
	return (
		<Controller
			name={name}
			rules={rules}
			control={control}
			render={({ field, fieldState }) => {
				return (
					<InputPassword
						erroMessage={fieldState.error?.message}
						value={field.value}
						onChangeText={field.onChange}
						{...textInputProps}
					/>
				);
			}}
		/>	
	);
}
