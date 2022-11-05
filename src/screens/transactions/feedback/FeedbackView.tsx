import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {BaseLayout, RoundedButton} from '../../../components';
import {FEEDBACK_SUSCCESS} from '../../../Constants/TEXTS';
import {PropsNavigation} from '../../../interfaces/interfaces';
import {FeebackStyles} from './Feedback.style';

const FeedbackView: FunctionComponent<PropsNavigation> = ({navigation}) => {
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
          {FEEDBACK_SUSCCESS}
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
