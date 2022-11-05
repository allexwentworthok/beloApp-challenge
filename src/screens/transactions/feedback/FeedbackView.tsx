import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {BaseLayout, RoundedButton} from '../../../components';
import {FeebackStyles} from './Feedback.style';

interface Props {
  navigation: any;
}
const FeedbackView: FunctionComponent<Props> = ({navigation}) => {
  return (
    <BaseLayout>
      <View style={FeebackStyles.container}>
        <Icon
          name="attach-money"
          type="Ionicons"
          size={80}
          color={'#1E3C00'}
          style={FeebackStyles.header}
        />
        <Text numberOfLines={2} style={FeebackStyles.titleConfirmation}>
          Felicidades ya cambiaste tus monedas
        </Text>
        <RoundedButton
          title="Volver al inicio"
          action={() => navigation.navigate('Home')}
        />
      </View>
    </BaseLayout>
  );
};

export default FeedbackView;
