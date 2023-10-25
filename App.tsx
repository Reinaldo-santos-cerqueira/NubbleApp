import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
//import { LoginScreen } from './src/screen/auth/LoginScreen/LoginScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpScreen } from './src/screen/auth/signUpScreen/signUpScreen';

function App(): JSX.Element{
	return(
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				{/* <LoginScreen/> */}
				<SignUpScreen/>
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
export default App;