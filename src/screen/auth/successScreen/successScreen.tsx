import React from 'react';
import { Screen } from '../../../components/screen/screen';
import { Box } from '../../../components/box/box';
import { Icon } from '../../../components/icon/icon';
import { Text } from '../../../components/text/text';
import { Button } from '../../../components/button/button';
export function SuccessScreen() {
	return (
		<Screen>
			<Box mb='s24'>
				<Icon name='checkRoundIcon' color='grayWhite' size={48} />
			</Box>
			<Text mb='s16' preset='headingLarge' bold>
				Enviamos as instruções para seu e-mail
			</Text>
			<Text mb='s40' preset='paragraphLarge'>
				Clique no link enviado no seu e-mail para recuperar sua senha
			</Text>
			<Button preset='primary' title='Voltar ao inicio' />
		</Screen>
	);
}