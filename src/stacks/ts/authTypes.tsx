import { RouteProp } from '@react-navigation/native';

export type RootStackAuthParamList = {
  LoginScreen: undefined;
};

export type LoginScreenRouteProp = RouteProp<
  RootStackAuthParamList,
  'LoginScreen'
>;
