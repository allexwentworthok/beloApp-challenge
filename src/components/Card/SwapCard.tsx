import React, {useState} from 'react';
import {View} from 'react-native';
import {Card, List, Text} from 'react-native-paper';
import {Icon} from '@rneui/themed';
import {BaseCardStyles} from './Cards.style';
import {useSelector} from 'react-redux';
import {AppState} from '../../core/store';
import {BottomSheet} from '@rneui/base';

export interface ChildProps {
  secondCoin: (coin: object | undefined) => void;
}
const SwapCard = (props: ChildProps) => {
  /* A hook that allows us to use state in a functional component. */
  const [isVisible, setIsVisible] = useState(false);
  const [selectSecondCoin, setSecondSelectedCoin] = useState('Seleccionar');

  const coins = useSelector((state: AppState) => state.coins?.coins);

  /**
   * When the user clicks on a coin, the coin's name is set as the second selected coin, the coin is
   * passed to the parent component, and the modal is closed.
   * @param {any} coin - any - this is the coin that is selected from the list.
   */
  const secondCoinModal = (coin: any) => {
    setSecondSelectedCoin(coin.name);
    props.secondCoin(coin);
    setIsVisible(false);
  };

  return (
    <>
      <Card style={BaseCardStyles.cardContainer}>
        <View>
          <Card.Content style={BaseCardStyles.innerCard}>
            <Text>usdt</Text>
            <Icon name="swap-horizontal-circle" />
            <Text onPress={() => setIsVisible(true)}>{selectSecondCoin}</Text>
          </Card.Content>
        </View>
      </Card>
      <BottomSheet
        modalProps={{animationType: 'none'}}
        onBackdropPress={() => setIsVisible(false)}
        isVisible={isVisible}>
        <List.Section style={BaseCardStyles.bottonSheet}>
          <List.Subheader>Escoge una de estas</List.Subheader>
          {coins.map((coin: any, i: any) => (
            <List.Item
              key={i}
              title={coin.name}
              onPress={() => secondCoinModal(coin)}
            />
          ))}
        </List.Section>
      </BottomSheet>
    </>
  );
};

export default SwapCard;
