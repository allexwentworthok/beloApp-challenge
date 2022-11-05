import {StyleSheet} from 'react-native';
import {LIGTH_THEME} from '../../theme/colors';

export const BaseCardStyles = StyleSheet.create({
  cardContainer: {
    borderRadius: 14,
    overflow: 'hidden',
    borderColor: 'white',
    shadowColor: LIGTH_THEME.shadowCards,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  innerCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
  },
  icon: {
    fontWeight: '600',
  },
});
