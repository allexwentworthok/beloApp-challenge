/**
 * It creates a stack navigator with two screens, Home and SwapView
 * @returns A function that returns a NavigationContainer component.
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeView, SwapView} from '../screens';

export type RootStackParamList = {
  Home: {navigation: any};
  SwapView: {name: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeView}
        />
        <Stack.Screen
          name="SwapView"
          options={{headerShown: false}}
          component={SwapView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
