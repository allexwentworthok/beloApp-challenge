import {Dimensions, StyleSheet} from 'react-native';

export const SwapViewStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    marginBottom: 40,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 36,
    alignItems: 'center',
  },
});
