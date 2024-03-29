import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from '@routes';

function App(): JSX.Element {
	return (
		<SafeAreaProvider>
			<ThemeProvider theme={theme}>
				<Router />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
export default App;