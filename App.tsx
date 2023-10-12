import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/text/text';
import { Button } from './src/components/button/button';
const App = () =>{
	return(
		<SafeAreaView>
			<Text preset='headingLarge' italic>
				CoffStack
			</Text>
			<Button title='Entrar'/>
		</SafeAreaView>
		
	);
};
export default App;