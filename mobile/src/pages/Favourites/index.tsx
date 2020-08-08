import React from 'react';
import { Text, View } from 'react-native';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favourites() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos"/>
    </View>
  );
};

export default Favourites;