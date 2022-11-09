import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {RoundedButton} from '../../../components';
import BaseLayout from '../../../components/BaseLayout/BaseLayout';
import {CONFIRMATION_TITLE} from '../../../Constants/TEXTS';
import {PropsNavigation} from '../../../interfaces/interfaces';
import {ConfirmationStyles} from './Confirmation.style';

const ConfirmationView: FunctionComponent<PropsNavigation> = ({
  route,
  navigation,
}) => {
  /* Destructuring the route.params object. */
  const {amount, coinToSwap} = route.params;
  /**
   * When the user clicks the button, navigate to the FeedbackView screen and pass the amountPayed and
   * coinName as parameters.
   */
  const goTo = () => {
    navigation.navigate('FeedbackView', {
      amountPayed: amountToSwap(),
      coinName: coinToSwap.name,
    });
  };

  /**
   * It takes the amount of money the user wants to spend and divides it by the price of the coin they
   * want to buy
   * @returns The amount of the coin to swap.
   */
  const amountToSwap = () => {
    const result = amount / coinToSwap.price.usd;
    return result.toFixed(4);
  };

  return (
    <BaseLayout>
      <View style={ConfirmationStyles.container}>
        <Icon
          name="swap-horiz"
          type="Ionicons"
          size={80}
          color={'green'}
          containerStyle={ConfirmationStyles.icon}
        />
        <Text numberOfLines={3} style={ConfirmationStyles.titleConfirmation}>
          {`${CONFIRMATION_TITLE} ${route.params.amount} USDT a $${route.params.coinToSwap.price.usd} cada moneda`}
        </Text>
        <RoundedButton title="Intercambiar" action={goTo} />
      </View>
    </BaseLayout>
  );
};
export default ConfirmationView;
