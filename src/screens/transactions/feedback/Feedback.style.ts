import {StyleSheet} from 'react-native';
import {LIGTH_THEME} from '../../../theme/colors';

export const FeebackStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 14,
    marginTop: '20%',
    overflow: 'hidden',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },

  titleConfirmation: {
    marginVertical: '20%',
    fontSize: 18,
    color: '#1E3C00',
    textAlign: 'center',
  },
  header: {
    backgroundColor: LIGTH_THEME.feedbackColor,
    width: 150,
    height: 150,
    borderRadius: 100,
    justifyContent: 'center',
  },
});
