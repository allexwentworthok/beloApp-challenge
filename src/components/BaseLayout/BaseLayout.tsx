import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {baseLayoutStyles} from './BaseLayout.styles';

interface Props {
  children: any;
}
const BaseLayout: FunctionComponent<Props> = ({children}) => {
  return <View style={baseLayoutStyles.container}>{children}</View>;
};

export default BaseLayout;
