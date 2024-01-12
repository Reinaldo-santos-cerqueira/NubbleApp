import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamsList } from './appStack';
import { AuthStackParams } from './authStack';
import { AppTabBottomTabParamsList } from './appTabNavigator';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace ReactNavigation {
        interface RootParamList extends AuthStackParams, AppStackParamsList { }
    }
}

export type AppScreenProps<RouteName extends keyof AppStackParamsList> = NativeStackScreenProps<AppStackParamsList, RouteName>
export type TabBottomScreenProps<RouteName extends keyof AppTabBottomTabParamsList> = NativeStackScreenProps<AppTabBottomTabParamsList, RouteName>
export type AuthScreenProps<RouteName extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, RouteName>
export type AppTabScreenProps<RouteName extends keyof AppTabBottomTabParamsList> = CompositeScreenProps<BottomTabScreenProps<AppTabBottomTabParamsList, RouteName>, NativeStackScreenProps<AppStackParamsList, 'AppTabNavigator'>>
