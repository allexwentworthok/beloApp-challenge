import {Icon} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import BaseLayout from '../../../components/BaseLayout/BaseLayout';

interface Props {
  route: any;
  navigation: any;
}

const ConfirmationView: FunctionComponent<Props> = ({route}) => {
  return (
    <BaseLayout>
      <View style={{marginTop: 130}}>
        <Icon
          name="swap-horiz"
          type="Ionicons"
          size={80}
          onPress={() => console.log('Hola')}
        />
        <Text>ConfirmarionView {`${route.params.amount}`}</Text>
        <Text>ConfirmarionView </Text>
      </View>
    </BaseLayout>
  );
};
export default ConfirmationView;
