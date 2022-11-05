import {useNavigation} from '@react-navigation/native';
import React from 'react';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import CardOfCoins from '../../components/Card/CardOfCoins';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

const HomeView = () => {
  const navigation = useNavigation();
  return (
    <BaseLayout>
      <HeaderHome navigation={navigation} />
      <CardOfCoins />
    </BaseLayout>
  );
};
export default HomeView;
