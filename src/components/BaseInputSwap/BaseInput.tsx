import React from 'react';
import {Dimensions, StyleSheet, View, TextInput} from 'react-native';
import {Text} from 'react-native-paper';
import {LIGTH_THEME} from '../../theme/colors';

export default function BaseInputSwap() {
  return (
    <View style={SwapViewStyles.container}>
      <Text style={SwapViewStyles.input}>MAX</Text>
      <TextInput
        keyboardType="number-pad"
        autoFocus={true}
        numberOfLines={0}
        maxLength={5}
        placeholder="$0"
        style={SwapViewStyles.input}
      />
    </View>
  );
}
const SwapViewStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  input: {
    fontSize: 42,
    fontWeight: '600',
    color: LIGTH_THEME.secondary,
  },
});
