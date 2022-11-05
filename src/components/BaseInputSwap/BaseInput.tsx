import React from 'react';
import {View, TextInput} from 'react-native';
import {Text} from 'react-native-paper';
import {SwapViewStyles} from './BaseInput.style';

export default function BaseInputSwap() {
  return (
    <View style={SwapViewStyles.container}>
      <Text style={SwapViewStyles.input}>MAX</Text>
      <TextInput
        keyboardType="number-pad"
        autoFocus={true}
        maxLength={6}
        placeholder="$0"
        style={SwapViewStyles.input}
      />
    </View>
  );
}
