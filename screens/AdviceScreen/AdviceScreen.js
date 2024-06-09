import React from 'react';
import { View, Text } from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

import Advice from '../../components/Advice/Advice';
import IntroPage from '../../components/IntroPage/IntroPage';
import Search from '../../components/Search/Search';

const AdviceScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.Intro}>
        <IntroPage>
          <Text style={styles.title}>Search your way to happiness</Text>
          <Search />
        </IntroPage>
      </View>
      <View style={styles.Advice}>
        <Advice title="Motivation" description="Augmentez la motivation et la confiance"/>
        <Advice title="Motivation" description="Augmentez la motivation et la confiance"/>
        <Advice title="Motivation" description="Augmentez la motivation et la confiance"/>
        <Advice title="Motivation" description="Augmentez la motivation et la confiance"/>
        <Advice title="Motivation" description="Augmentez la motivation et la confiance"/>
      </View>
    </View>
  );
};

export default AdviceScreen;