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
  const goTo = () => {
    navigation.navigate('FeedbackView');
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
        <Text numberOfLines={2} style={ConfirmationStyles.titleConfirmation}>
          {`${CONFIRMATION_TITLE} ${route.params.amount} ARS`}
        </Text>
        <RoundedButton title="Intercambiar" action={goTo} />
      </View>
    </BaseLayout>
  );
};
export default ConfirmationView;
