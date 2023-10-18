import { 
	createBox, 
	createRestyleComponent ,
	backgroundColor,
	spacing,
	layout,
	border
} from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { TouchableOpacity } from 'react-native';

const Box = createBox<Theme>();

const TouchableOpacityBox = createRestyleComponent(
	[	
		backgroundColor,
		spacing,
		layout,
		border
	],
	TouchableOpacity
);

export{
	Box,
	TouchableOpacityBox
};