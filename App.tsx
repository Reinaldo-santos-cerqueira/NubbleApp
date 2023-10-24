import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Box } from './src/components/box/box';
import { Icon } from './src/components/icon/icon';

function App(): JSX.Element{
	return(
		<ThemeProvider theme={theme}>
			<SafeAreaView>
				<View style={{paddingHorizontal: 20}}>
					<Box flexDirection="row">
						<Icon name="chevronRight" size={50} />
						<Icon name="heartFill" size={50} color="buttonPrimary" />
						<Icon name="profile" size={50} />
						<Icon name="profileFill" size={50} />
						<Icon name="heart" size={50} />
						<Icon name="bellOn" color="carrotSecondary" size={50} />
					</Box>
					<Box flexDirection="row">
						<Icon name="newPost" size={50} />
						<Icon name="camera" size={50} />
						<Icon name="chat" size={50} />
						<Icon name="chatOn" color="error" size={50} />
						<Icon name="flashOff" size={50} />
						<Icon name="flashOn" size={50} />
					</Box>
				</View>
			</SafeAreaView>
		</ThemeProvider>
	);
}
export default App;