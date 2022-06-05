import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {LIGTH_THEME} from '../../theme/colors';

const BaseCard = () => {
  return (
    <Card style={BaseCardStyles.cardContainer}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Title>Card title</Title>
      </Card.Content>
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
});
export default BaseCard;
