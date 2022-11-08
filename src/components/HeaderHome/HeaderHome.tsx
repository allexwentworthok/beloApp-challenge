import React, {FunctionComponent} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {PropsNavigation} from '../../interfaces/interfaces';
import RoundedButton from './RoundedButton';

const routerButtons = [{title: 'Intercambiar', route: 'SwapView', key: 2}];

const HeaderHome: FunctionComponent<PropsNavigation> = ({navigation}) => {
  return (
    <View style={HeaderHomeStyles.container}>
      <Text style={HeaderHomeStyles.textTitle}>$5.000,85</Text>
      <Text style={HeaderHomeStyles.textSubtitle}>This month: $12,00</Text>
      <View style={HeaderHomeStyles.buttons}>
        {routerButtons.map(x => (
          <RoundedButton
            key={x.key}
            title={x.title}
            action={() => navigation.navigate(x.route)}
          />
        ))}
      </View>
    </View>
  );
};

export default HeaderHome;

const HeaderHomeStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 18,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  textSubtitle: {
    fontSize: 12,
    fontWeight: '300',
  },
  buttons: {
    marginVertical: 18,
    justifyContent: 'space-between',
  },
});
