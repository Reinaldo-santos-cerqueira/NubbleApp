import { useNavigation } from '@react-navigation/native';
import { AuthStackParams } from '@routes';


export function useResetNavigation() {
	const navigation = useNavigation();

	function reset(params: AuthStackParams['SuccessScreen']) {
		navigation.reset({
			index: 1,
			routes: [
				{
					name: 'LoginScreen'
				},
				{
					name: 'SuccessScreen',
					params
				}
			]
		});
	}

	return {
		reset
	};
}