import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const SpacesCards = () => {
  return (
    <ScrollView horizontal={true}>
      <Card style={BaseCardStyles.cardContainer}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
      </Card>
      <Card style={BaseCardStyles.cardContainer}>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
      </Card>
    </ScrollView>
  );
};
const BaseCardStyles = StyleSheet.create({
  cardContainer: {
    marginVertical: '5%',
    marginRight: 12,
    height: 100,
    width: 300,
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
export default SpacesCards;
