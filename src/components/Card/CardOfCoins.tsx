import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {List, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {AppState} from '../../core/store';
import {LIGTH_THEME} from '../../theme/colors';

const CardOfCoins: FunctionComponent = () => {
  const coins = useSelector((state: AppState) => state.coins?.coins);

  return (
    <View style={BaseCardStyles.cardContainer}>
      <List.Section>
        <List.Subheader>Monedas soportadas</List.Subheader>
        {coins.map((coin: any) => (
          <List.Item
            key={coin.key}
            title={coin.name}
            right={() => (
              <Text style={BaseCardStyles.price}>${coin.price.usd}</Text>
            )}
          />
        ))}
      </List.Section>
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
  price: {
    justifyContent: 'center',
    color: LIGTH_THEME.titleInput,
    fontSize: 14,
    fontWeight: '600',
  },
});
export default CardOfCoins;
