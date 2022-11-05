import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import {LIGTH_THEME} from '../../theme/colors';

const CardOfCoins = () => {
  return (
    <List.Item
      title="Bitcoin"
      style={BaseCardStyles.cardContainer}
      description="Item description"
    />
  );
};
const BaseCardStyles = StyleSheet.create({
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
});
export default CardOfCoins;
