import {Dimensions, StyleSheet} from 'react-native';
import {LIGTH_THEME} from '../../theme/colors';

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

export const SwapInputStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    fontSize: 42,
    fontWeight: '700',
    color: LIGTH_THEME.secondary,
    marginHorizontal: '5%',
  },
});
