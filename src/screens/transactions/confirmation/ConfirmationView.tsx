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
        <Text>ConfirmarionView {`${route.params.amount}`} </Text>
        <Text>ConfirmarionView </Text>
      </View>
    </BaseLayout>
  );
};
export default ConfirmationView;
