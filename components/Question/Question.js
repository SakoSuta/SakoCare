import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Shadow from '../Shadow/Shadow';

import Very_Sad from '../../assets/images/moods/Very_Sad.png';
import Sad from '../../assets/images/moods/Sad.png';
import Neutral from '../../assets/images/moods/Neutre.png';
import Happy from '../../assets/images/moods/Smile.png';
import Very_Happy from '../../assets/images/moods/Big_Smile.png';

import colors from '../../styles/colors';
import styles from './styles';

const MoodSelector = () => {
    const [selectedMood, setSelectedMood] = useState(null);

    const handlePress = (mood) => {
      setSelectedMood(mood);
    };
  
    const getMoodStyle = (mood) => (
      selectedMood && selectedMood !== mood ? { ...styles.MoodsIcone, opacity: 0.3 } : styles.MoodsIcone
    );
  
    return (
      <View>
          <View style={styles.MoodsContainer}>
              <View style={styles.AllMoods}>
                  <TouchableOpacity onPress={() => handlePress('Very_Sad')}>
                      <Image source={Very_Sad} style={getMoodStyle('Very_Sad')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handlePress('Sad')}>
                      <Image source={Sad} style={getMoodStyle('Sad')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handlePress('Neutral')}>
                      <Image source={Neutral} style={getMoodStyle('Neutral')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handlePress('Happy')}>
                      <Image source={Happy} style={getMoodStyle('Happy')} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handlePress('Very_Happy')}>
                      <Image source={Very_Happy} style={getMoodStyle('Very_Happy')} />
                  </TouchableOpacity>
              </View>
          </View>
          <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
      </View>
    );
};

const EnergySelector = () => {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const circleStyles = (level) => ({
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: selectedLevel === level ? colors.primary : colors.placeholder,
        margin: 8
    });

    return (
        <View>
            <View style={styles.EnergyContainer}>
                <Text style={styles.EnergyLabel}>Lot of energy</Text>
                <View style={styles.EnergylevelContainer}>
                    {[1, 2, 3, 4, 5].map((level) => (
                    <TouchableOpacity key={level} onPress={() => setSelectedLevel(level)}>
                        <View style={circleStyles(level)} />
                    </TouchableOpacity>
                    ))}
                </View>
                <Text style={styles.EnergyLabel}>No energy</Text>
            </View>
            <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
        </View>
    );
};

const Question = ( type ) => {
    return (
        <View style={styles.container}>
            {type === 'moods' ? <MoodSelector /> : <EnergySelector /> }
        </View>
    );
};

export default Question;
