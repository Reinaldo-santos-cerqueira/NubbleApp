import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamsList } from './appStack';
import { AuthStackParams } from './authStack';


declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParams, AppStackParamsList { }
    }
}

export type AppScreenProps<RouteName extends keyof AppStackParamsList> = NativeStackScreenProps<AppStackParamsList, RouteName>
export type AuthScreenProps<RouteName extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, RouteName>
