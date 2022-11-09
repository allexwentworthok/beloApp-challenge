import React, {FunctionComponent, useState} from 'react';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
import {Text} from 'react-native-paper';
import {SwapInputStyles} from './SwapView.style';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import SwapCard from '../../components/Card/SwapCard';
import RoundedButton from '../../components/HeaderHome/RoundedButton';
import {PropsNavigation} from '../../interfaces/interfaces';
import {SwapViewStyles} from './SwapView.style';

const SwapView: FunctionComponent<PropsNavigation> = ({navigation}) => {
  const [amount, setAmount] = useState(0);
  const [selectCoin, setSecondSelectedCoin] = useState({});

  const setAmountOfSwap = (numberAmount: string) => {
    setAmount(Number(numberAmount));
  };

  const secondCoin = (coin: any) => {
    setSecondSelectedCoin(coin);
  };

  return (
    <BaseLayout>
      <KeyboardAvoidingView>
        <View style={SwapViewStyles.container}>
          <View style={SwapInputStyles.container}>
            <Text style={SwapInputStyles.input}>MAX</Text>
            <TextInput
              keyboardType="number-pad"
              autoFocus={true}
              maxLength={6}
              placeholder={'$' + `${amount}`}
              onChange={({nativeEvent: {text}}) => setAmountOfSwap(text)}
              style={SwapInputStyles.input}
            />
          </View>
        </View>
        <SwapCard secondCoin={secondCoin} />
        <View style={SwapViewStyles.buttons}>
          <RoundedButton
            action={() =>
              navigation.navigate('Confirmation', {
                amount: amount,
                coinToSwap: selectCoin,
              })
            }
            title={'Convertir'}
          />
        </View>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};
export default SwapView;
