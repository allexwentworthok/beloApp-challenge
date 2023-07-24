import {Avatar} from '@rneui/base';
import React, {FunctionComponent} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {AppState} from '../../core/store';
import {PropsNavigation} from '../../interfaces/interfaces';
import {LIGTH_THEME} from '../../theme/colors';
import RoundedButton from './RoundedButton';

const routerButtons = [
  {title: 'Intercambiar', route: 'SwapView', key: 1},
  {title: 'Historial', route: 'SwapView', key: 2},
];

const HeaderHome: FunctionComponent<PropsNavigation> = ({navigation}) => {
  const {cbu, balance, name, avatar} = useSelector(
    (state: AppState) => state.balance?.defaultAccount,
  );

  return (
    <>
      <View style={HeaderHomeStyles.container}>
        <View style={HeaderHomeStyles.avatar}>
          <Avatar size={96} rounded={true} source={{uri: avatar}} />
        </View>
        <Text style={HeaderHomeStyles.textName}>Hola {name}</Text>
        <Text style={HeaderHomeStyles.textTitle}>${balance}</Text>
        <Text style={HeaderHomeStyles.textSubtitle}>Tu IBAN {cbu}</Text>
      </View>
      <View style={HeaderHomeStyles.buttons}>
        {routerButtons.map(x => (
          <RoundedButton
            key={x.key}
            title={x.title}
            action={() => navigation.navigate(x.route)}
          />
        ))}
      </View>
    </>
  );
};

export default HeaderHome;

const HeaderHomeStyles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get('screen').height / 8,
    padding: 12,
    borderRadius: 18,
    backgroundColor: '#940CFE',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginTop: -48,
  },
  textName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: LIGTH_THEME.primary,
  },
  textTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: LIGTH_THEME.primary,
  },
  textSubtitle: {
    fontSize: 14,
    fontWeight: '300',
    color: LIGTH_THEME.primary,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
