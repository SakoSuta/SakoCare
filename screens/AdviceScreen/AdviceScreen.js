import React from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import colors from '../../styles/colors';
import styles from './styles';

import useResources from '../../hooks/useResources';

import Advice from '../../components/Advice/Advice';
import IntroPage from '../../components/IntroPage/IntroPage';
import Search from '../../components/Search/Search';

const AdviceScreen = () => {
  const userID = 1;
  const { resources, UserResources, loading, error } = useResources(userID);

  if (loading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching resources: {error.message}</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Intro}>
          <IntroPage>
            <Text style={styles.title}>Search your way to happiness</Text>
            <Search />
          </IntroPage>
        </View>
        <View style={styles.Advice}>
          <Text style={styles.TextCategory}>Your resources</Text>
          {UserResources.map((resource) => (
            <Advice
              key={resource.id}
              title={resource.title}
              description={resource.description}
              image={resource.image}
            />
          ))}
          <Text style={styles.TextCategory}>Need Someting esle ?</Text>
          {resources.map((resource) => (
            <Advice
              key={resource.id}
              title={resource.title}
              description={resource.description}
              image={resource.image}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default AdviceScreen;