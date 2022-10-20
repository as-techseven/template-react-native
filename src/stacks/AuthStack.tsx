import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackAuthParamList } from './ts/authTypes';
import LoginScreen from '../screens/auth/LoginScreen';

const RootAuthStack = createNativeStackNavigator<RootStackAuthParamList>();

const AuthStack = () => (
  <RootAuthStack.Navigator initialRouteName="LoginScreen">
    <RootAuthStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ title: 'Inicio de sesión', headerShown: false }}
    />
  </RootAuthStack.Navigator>
);

export default AuthStack;
