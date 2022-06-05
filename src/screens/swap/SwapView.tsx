import { useNavigation } from '@react-navigation/native';
import React from 'react';
import BaseLayout from '../../components/BaseLayout/BaseLayout';
import BaseCard from '../../components/Card/BaseCard';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

export default function SwapView() {
  const navigation = useNavigation();
  return (
    <BaseLayout>
      <HeaderHome navigation={navigation} />
      <BaseCard />
    </BaseLayout>
  );
}
