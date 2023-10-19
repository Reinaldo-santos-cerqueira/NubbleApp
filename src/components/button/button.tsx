import React from 'react';
import { Text } from '../text/text';
import { 
	TouchableOpacityBox, 
	TouchableOpacityBoxProps 
} from '../box/box';
import { ActivityIndicator } from '../activityIndicator/activityIndicator';

interface TouchableOpacityProps extends TouchableOpacityBoxProps {
    title: string,
	loading?: boolean
}

export function Button(
	{ 
		title,
		loading,  
		...touchableOpacityProps
	}: TouchableOpacityProps
) {
	return (
		<TouchableOpacityBox
			backgroundColor='greenPrimary'
			height={50}
			borderRadius='s12'
			alignItems='center'
			justifyContent='center'
			{...touchableOpacityProps}
		>
			{loading ?
				<ActivityIndicator color='grayWhite'/>
				: <Text 
					color={'grayWhite'} 
					bold
				>
					{title}
				</Text>
			}
			
		</TouchableOpacityBox>
	);
}