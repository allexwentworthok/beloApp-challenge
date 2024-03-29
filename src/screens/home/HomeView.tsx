import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import CardOfCoins from '../../components/Card/CardOfCoins';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import {getBalance} from '../../core/actions/balanceAction';
import {getCoins} from '../../core/actions/coinsAction';
import {PropsNavigation} from '../../interfaces/interfaces';

const HomeView: FunctionComponent<PropsNavigation> = () => {
  const navigation = useNavigation();
  const distpatch = useDispatch();

  /* A hook that is called after every render. */
  useEffect(() => {
    distpatch(getCoins());
    distpatch(getBalance());
  }, [distpatch]);

  return (
    <BaseLayout>
      <HeaderHome navigation={navigation} />
      <CardOfCoins />
    </BaseLayout>
  );
};
export default HomeView;
