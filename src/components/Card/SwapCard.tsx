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
  const [isVisible, setIsVisible] = useState(false);
  const [selectSecondCoin, setSecondSelectedCoin] = useState('Seleccionar');

  const coins = useSelector((state: AppState) => state.coins?.coins);

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
