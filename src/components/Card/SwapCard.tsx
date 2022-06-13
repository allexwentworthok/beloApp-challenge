import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Icon} from '@rneui/themed';
import {LIGTH_THEME} from '../../theme/colors';

const SwapCard = () => {
  return (
    <Card style={BaseCardStyles.cardContainer}>
      <View>
        <Card.Content style={BaseCardStyles.innerCard}>
          <Text>ArgyCoin</Text>
          <Icon
            name="swap-horiz"
            type="Ionicons"
            iconStyle={BaseCardStyles.icon}
            onPress={() => console.log('Hola')}
          />
          <Text>Bitcoin</Text>
        </Card.Content>
      </View>
    </Card>
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
  innerCard: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 12,
  },
  icon: {
    fontFamily: 'Ionicons',
  },
});
export default SwapCard;
