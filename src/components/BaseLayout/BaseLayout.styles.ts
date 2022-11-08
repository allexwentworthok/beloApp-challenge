import {Dimensions, StyleSheet} from 'react-native';

export const baseLayoutStyles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 18,
    height: Dimensions.get('screen').height - 20,
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
