import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import Shadow from '../Shadow/Shadow';

import colors from '../../styles/colors';
import styles from './styles';

import { useSyncIcon } from '../../hooks/useSyncIcon';

// const { moods } = useSyncIcon();

const moods = [
    { id: 1, name: 'Very_Sad', icon: require('../../assets/images/moods/Very_Sad.png') },
    { id: 2, name: 'Sad', icon: require('../../assets/images/moods/Sad.png') },
    { id: 3, name: 'Neutral', icon: require('../../assets/images/moods/Neutre.png') },
    { id: 4, name: 'Happy', icon: require('../../assets/images/moods/Smile.png') },
    { id: 5, name: 'Very_Happy', icon: require('../../assets/images/moods/Big_Smile.png') },
];

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
          <Text style={styles.TypeTitle}>How do you feel today?</Text>
          <View>
              <View style={styles.MoodsContainer}>
                <View style={styles.AllMoods}>
                    {moods.map(mood => (
                    <TouchableOpacity key={mood.id} onPress={() => handlePress(mood.name)}>
                        <Image source={mood.icon} style={getMoodStyle(mood.name)} />
                    </TouchableOpacity>
                    ))}
                </View>
              </View>
              <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
          </View>
      </View>
    );
};

const LevelSelector = ({ title, levels, onSelectLevel, positive, negative }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);

    const handlePress = (level) => {
        setSelectedLevel(level);
        onSelectLevel(level);
    };

    const circleStyles = (level) => ({
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: selectedLevel === level ? colors.primary : colors.placeholder,
        margin: 8
    });

    return (
        <View>
            <Text style={styles.TypeTitle}>{title}</Text>
            <View>
                <View style={styles.LevelContainer}>
                    <Text style={styles.LevelLabel}>{positive}</Text>
                    <View style={styles.LevelSelectorContainer}>
                        {levels.map((level) => (
                            <TouchableOpacity key={level} onPress={() => handlePress(level)}>
                                <View style={circleStyles(level)} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <Text style={styles.LevelLabel}>{negative}</Text>
                </View>
                <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
            </View>
        </View>
    );
};

const EnergyLevel = () => {
    const handleSelection = (level) => {
        console.log('Selected level:', level);
    }
    return (
        <LevelSelector
        title="How much energy do you have?" 
        levels={[1, 2, 3, 4, 5]}
        onSelectLevel={handleSelection}
        positive="Lot of energy"
        negative="No energy"
        />
    );
};

const StressLevel = () => {
    const handleSelection = (level) => {
        console.log('Selected level:', level);
    }
    return (
        <LevelSelector
        title="How stressed are you?" 
        levels={[1, 2, 3, 4, 5]}
        onSelectLevel={handleSelection}
        positive="Not stressed"
        negative="Very stressed"
        />
    );
};

const SocialLevel = () => {
    const handleSelection = (level) => {
        console.log('Selected level:', level);
    }
    return (
        <LevelSelector
        title="How social are you?" 
        levels={[1, 2, 3, 4, 5]}
        onSelectLevel={handleSelection}
        positive="Not social"
        negative="Very social"
        />
    );
}

const ActivitySelector = () => {
    const [selectedActivities, setSelectedActivities] = useState([]);
      
    const handlePress = (activity) => {
        if (selectedActivities.includes(activity.id)) {
            setSelectedActivities(selectedActivities.filter(id => id !== activity.id));
        } else {
            setSelectedActivities([...selectedActivities, activity.id]);
        }
    };
    return (
        <View>
          <Text style={styles.TypeTitle}>Did you do a particular activity?</Text>
          <View>
              <View style={styles.ActivityContainer}> 
                {activities.map((activity) => (
                <TouchableOpacity
                    key={activity.id}
                    style={styles.activity}
                    onPress={() => handlePress(activity)}
                >
                    <View 
                    style={[ styles.ActivityIconeContainer, { backgroundColor: selectedActivities.includes(activity.id) ? colors.primary : colors.backgroundColor} ]}>
                    <Image 
                        source={selectedActivities.includes(activity.id) ? activity.iconDesactive : activity.iconActive}
                        style={styles.ActivityIcone}
                    />
                    </View>
                    <Text style={styles.ActivityLabel}>{activity.label}</Text>
                </TouchableOpacity>
                ))}
              </View>
              <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
          </View>
      </View>
    );
};

const TimeInput = ({title}) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
  
    // Fonctions pour valider les entrées
    const handleHoursInput = (text) => {
      if (/^[0-9]+$/.test(text) && parseInt(text, 10) <= 23) {
        setHours(text);
      }
    };
  
    const handleMinutesInput = (text) => {
      if (/^[0-9]+$/.test(text) && parseInt(text, 10) <= 59) {
        setMinutes(text);
      }
    };
  
    return (
      <View>
          <Text style={styles.TypeTitle}>{title}</Text>
          <View>
              <View style={styles.SleepContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={handleHoursInput}
                  value={hours}
                  keyboardType="number-pad"
                  maxLength={2}
                  placeholder="00"
                />
                <Text style={styles.label}>h</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleMinutesInput}
                  value={minutes}
                  keyboardType="number-pad"
                  maxLength={2}
                  placeholder="00"
                />
                <Text style={styles.label}>min</Text>
              </View>
              <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
          </View>
      </View>
    );
};

const SleepIndicator = () => {
    return (
        <TimeInput
        title="How long did you sleep?"
        />
    );
}

const ExerciceIndicator = () => {
    return (
        <TimeInput
        title="How long did you exercise?"
        />
    );
}

const activities = [
    { id: 1, label: 'Commencer tôt', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 2, label: 'Faire une liste', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 3, label: 'Concentration', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 4, label: 'Faire une pause', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 5, label: 'Manger', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
  ];

const Question = ({ type }) => {
    return (
        <View style={styles.container}>
            {type === 'moods' ? <MoodSelector /> : type === 'energy' ? <EnergyLevel /> : type === 'stress' ? <StressLevel /> : type === 'social' ? <SocialLevel /> : type === 'activity' ? <ActivitySelector /> : type === 'sleep' ? <SleepIndicator /> : type === 'exercice' ? <ExerciceIndicator /> : null}
        </View>
    );
};

export default Question;
