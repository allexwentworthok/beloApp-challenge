import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {RoundedButton} from '../../../components';
import BaseLayout from '../../../components/BaseLayout/BaseLayout';
import {ConfirmationStyles} from './Confirmation.style';

interface Props {
  route: any;
  navigation: any;
}

const ConfirmationView: FunctionComponent<Props> = ({route, navigation}) => {
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
          onPress={() => console.log('Hola')}
          containerStyle={ConfirmationStyles.icon}
        />
        <Text numberOfLines={2} style={ConfirmationStyles.titleConfirmation}>
          Estas seguro de que quieres cambiar {`${route.params.amount} ARS`}
        </Text>
        <RoundedButton title="Intercambiar" action={goTo} />
      </View>
    </BaseLayout>
  );
};
export default ConfirmationView;
