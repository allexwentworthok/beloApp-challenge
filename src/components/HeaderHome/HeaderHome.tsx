import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import RoundedButton from './RoundedButton';

const routerButtons = [
  {title: 'Deposit', route: 'SwapView', key: 1},
  {title: 'Swap', route: 'SwapView', key: 2},
  {title: 'Checkout', route: 'SwapView', key: 3},
];

const HeaderHome = ({navigation}: {navigation: any}) => {
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
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
