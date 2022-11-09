import {Dimensions, StyleSheet} from 'react-native';

export const baseLayoutStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 24,
    height: Dimensions.get('screen').height - 12,
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
