import React, {FunctionComponent} from 'react';
import {Dimensions, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import BaseInputSwap from '../../components/BaseInputSwap/BaseInput';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import SwapCard from '../../components/Card/SwapCard';
import RoundedButton from '../../components/HeaderHome/RoundedButton';
import {PropsNavigation} from '../../interfaces/interfaces';

const SwapView: FunctionComponent<PropsNavigation> = ({navigation}) => {
  return (
    <BaseLayout>
      <KeyboardAvoidingView>
        <View style={SwapViewStyles.container}>
          <BaseInputSwap />
        </View>
        <SwapCard />
        <View style={SwapViewStyles.buttons}>
          <RoundedButton
            action={() => navigation.navigate('Confirmation', {amount: 30})}
            title={'Convertir'}
          />
        </View>
      </KeyboardAvoidingView>
    </BaseLayout>
  );
};
export default SwapView;

const SwapViewStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    marginBottom: 40,
  },
  buttons: {
    marginTop: 36,
  },
});
