import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStack from './AuthStack';
import { NativeBaseProvider } from 'native-base';

const NavigationStacks: any = () => (
  <>
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  </>
);

export default NavigationStacks;
