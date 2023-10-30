import { useNavigation } from '@react-navigation/native';
import { ThemeColors } from '../theme/theme';

interface Props{
    title: string,
    content: string;
    icon: {
        name: string;
        color: ThemeColors;
        circleColor: ThemeColors
    }
}

export function useResetNavigation(){
	const navigation = useNavigation();

	function reset({
		title,
		content,
		icon
	}: Props){
		navigation.reset({
			index: 1,
			routes:[
				{
					name: 'LoginScreen'
				},
				{
					name: 'SuccessScreen',
					params: {
						title,
						content,
						icon: icon
					}
				}
			]
		});
	}

	return {
		reset
	};
}