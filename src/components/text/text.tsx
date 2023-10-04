import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

export function Text({children, ...rest}: TextProps){
	return <RNText {...rest}>{children}</RNText>;
}

const  fontSize = {
	headingLarge:{
		fontSize: 32,
		lineHeight:38.4
	},
	headingMedium:{
		fontSize: 22,
		lineHeight:26.4
	},
	headingSmall:{
		fontSize: 18,
		lineHeight:23.4
	},
};