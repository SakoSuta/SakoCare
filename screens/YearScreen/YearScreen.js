import React from 'react';
import { ScrollView, Text, View, ActivityIndicator } from 'react-native';

import YearPixel from '../../components/YearPixel/YearPixel';
import Shadow from '../../components/Shadow/Shadow';

import styles from './styles';
import colors from '../../styles/colors';

// import useInfoUser from '../../hooks/useInfoUser';
import useYear from '../../hooks/useYear';
import useMood from '../../hooks/useMood';

const userId = 1;
const year = 2024;

const YearScreen = () => {
  const { Pixel, loading: loadingYear, error: errorYear } = useYear(userId, year);
  const { moods, loading: loadingMoods, error: errorMoods } = useMood();

  if (loadingYear || loadingMoods) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  if (errorYear || errorMoods) {
    return <Text style={styles.errorText}>Error: {errorYear?.message || errorMoods?.message}</Text>;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>My Year in pixel</Text>
        <View style={styles.Moods}>
            <View style={styles.MoodsContainer}>
              <View style={styles.AllMoods}>
                {moods.map((mood, index) => (
                    <View key={index} style={styles.InfoColors}>
                        <View style={[styles.grid, { backgroundColor: mood.color }]}></View>
                        <Text style={styles.TextMood}>{mood.name}</Text>
                    </View>
                ))}
              </View>
            </View>
            <Shadow size="Normal" color={colors.Black} borderRadius={24}/>
        </View>

        <View>
          <View style={styles.YearContainer}>
            <YearPixel year={2024} data={Pixel}/>
          </View>
          <Shadow size="Normal" color={colors.Black} borderRadius={24}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default YearScreen;