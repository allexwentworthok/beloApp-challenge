import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {Icon} from '@rneui/themed';
import {BaseCardStyles} from './Cards.style';

const SwapCard = () => {
  return (
    <Card style={BaseCardStyles.cardContainer}>
      <View>
        <Card.Content style={BaseCardStyles.innerCard}>
          <Text>Pesos</Text>
          <Icon
            name="swap-horizontal-circle"
            onPress={() => console.log('Hola')}
          />
          <Text>Bitcoin</Text>
        </Card.Content>
      </View>
    </Card>
  );
};

export default SwapCard;
