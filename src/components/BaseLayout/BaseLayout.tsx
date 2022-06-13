/**
 * It's a function that takes in a children prop and returns a View component with the children prop
 * passed to it
 * @param  - FunctionComponent<Props>
 * Trabaje con diferentes tipos de componentes para mostrar las alternativas.
 */
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
