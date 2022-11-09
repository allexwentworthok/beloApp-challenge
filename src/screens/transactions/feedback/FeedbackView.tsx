import {Icon} from '@rneui/themed';
import React, {FunctionComponent, useEffect, useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {BaseLayout, RoundedButton} from '../../../components';
import {FEEDBACK_ERROR, FEEDBACK_SUSCCESS} from '../../../Constants/TEXTS';
import {PropsNavigation} from '../../../interfaces/interfaces';
import {LIGTH_THEME} from '../../../theme/colors';
import {FeebackStyles} from './Feedback.style';

const FeedbackView: FunctionComponent<PropsNavigation> = ({
  route,
  navigation,
}) => {
  const {amountPayed, coinName} = route.params;
  const [failState, setFailedState] = useState(false);

  useEffect(() => {
    if (amountPayed > 150) {
      setFailedState(true);
    }
  }, [amountPayed]);

  return (
    <BaseLayout>
      <View style={FeebackStyles.container}>
        <Icon
          name={failState ? 'error' : 'attach-money'}
          type="Ionicons"
          size={80}
          color={failState ? 'red' : LIGTH_THEME.feedbackSuccess}
          style={FeebackStyles.header}
        />

        {failState ? (
          <Text numberOfLines={2} style={FeebackStyles.titleConfirmation}>
            {`${FEEDBACK_ERROR}`}
          </Text>
        ) : (
          <Text numberOfLines={2} style={FeebackStyles.titleConfirmation}>
            {`${FEEDBACK_SUSCCESS} ${amountPayed} ${coinName}`}
          </Text>
        )}
        <RoundedButton
          title="Volver al inicio"
          action={() => navigation.navigate('Home')}
        />
      </View>
    </BaseLayout>
  );
};

export default FeedbackView;
