import React from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';

const CardOfCoins = () => {
  return (
    <View style={BaseCardStyles.cardContainer}>
      <List.Item title="Bitcoin" description="Item description" />
      <List.Item title="Bitcoin" description="Item description" />
      <List.Item title="Bitcoin" description="Item description" />
      <List.Item title="Bitcoin" description="Item description" />
    </View>
  );
};
const BaseCardStyles = StyleSheet.create({
  cardContainer: {
    borderRadius: 14,
    marginTop: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
});
export default CardOfCoins;
