/**
 * It creates a stack navigator with two screens, Home and SwapView
 * @returns A function that returns a NavigationContainer component.
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConfirmationView, HomeView, SwapView, FeedbackView} from '../screens';

export type RootStackParamList = {
  Home: {navigation: any};
  SwapView: {name: string};
  Confirmation: {name: String};
  FeedbackView: {name: String};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            title: 'Home',
          }}
          component={HomeView}
        />
        <Stack.Screen
          name="SwapView"
          options={{
            headerShown: true,
            headerTitle: 'Swap de criptomonedas',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerBlurEffect: 'light',
          }}
          component={SwapView}
        />
        <Stack.Screen
          name="Confirmation"
          options={{
            headerShown: true,
            headerTitle: 'Confirmación',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerBlurEffect: 'light',
          }}
          component={ConfirmationView}
        />
        <Stack.Screen
          name="FeedbackView"
          options={{
            headerShown: false,
          }}
          component={FeedbackView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigation;
