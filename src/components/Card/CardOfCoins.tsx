import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {List} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {dataRedux, PropsNavigation} from '../../interfaces/interfaces';

const CardOfCoins: FunctionComponent<PropsNavigation> = () => {
  const coins = useSelector<dataRedux>(state => state.coins?.coins);

  return (
    <View style={BaseCardStyles.cardContainer}>
      {coins.map((coin: any) => (
        <List.Item
          key={coin.key}
          title={coin.name}
          description={coin.price.usd}
        />
      ))}
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
