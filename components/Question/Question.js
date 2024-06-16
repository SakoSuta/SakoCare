import React, { useState, useEffect } from 'react';
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

const MoodSelector = ({ value, onSelect }) => {
    const [selectedMood, setSelectedMood] = useState(value);

    useEffect(() => {
        setSelectedMood(value);
    }, [value]);

    const handlePress = (mood) => {
      setSelectedMood(mood);
      onSelect(mood);
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
                    <TouchableOpacity key={mood.id} onPress={() => handlePress(mood.id)}>
                        <Image source={mood.icon} style={getMoodStyle(mood.id)} />
                    </TouchableOpacity>
                    ))}
                </View>
              </View>
              <Shadow size="Normal" color={colors.primary} borderRadius={24}/>
          </View>
      </View>
    );
};

const LevelSelector = ({ title, levels, onSelectLevel, positive, negative, value }) => {
    const [selectedLevel, setSelectedLevel] = useState(value);

    useEffect(() => {
        setSelectedLevel(value);
    }, [value]);

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

const ActivitySelector = ({ value, onSelect }) => {
    const [selectedActivities, setSelectedActivities] = useState(value || []);

    useEffect(() => {
        setSelectedActivities(value || []);
    }, [value]);
      
    const handlePress = (activity) => {
        if (selectedActivities.includes(activity.id)) {
            setSelectedActivities(selectedActivities.filter(id => id !== activity.id));
        } else {
            setSelectedActivities([...selectedActivities, activity.id]);
            onSelect(selectedActivities);
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

const TimeInput = ({ title, onSelect, value }) => {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');

    useEffect(() => {
        if (value !== null && value !== undefined) {
          const totalMinutes = value * 60;
          setHours(Math.floor(totalMinutes / 60).toString());
          setMinutes((totalMinutes % 60).toString());
        } else {
          setHours('');
          setMinutes('');
        }
      }, [value]);
    
      const validateTime = (hours, minutes) => {
        const totalMinutes = (parseInt(hours, 10) || 0) * 60 + (parseInt(minutes, 10) || 0);
        return totalMinutes <= 1440;
      };
    
      const handleHoursInput = (text) => {
        if (/^[0-9]*$/.test(text)) {
          const hoursValue = parseInt(text, 10) || 0;
          const minutesValue = parseInt(minutes, 10) || 0;
          if (hoursValue <= 23 && validateTime(hoursValue, minutesValue)) {
            setHours(text);
            onSelect(hoursValue + minutesValue / 60);
          } else if (text === '') {
            setHours('');
            onSelect(minutesValue / 60);
          }
        }
      };
    
      const handleMinutesInput = (text) => {
        if (/^[0-9]*$/.test(text)) {
          setMinutes(text);
          const minutesValue = parseInt(text, 10) || 0;
          const hoursValue = parseInt(hours, 10) || 0;
          if (validateTime(hoursValue, minutesValue)) {
            onSelect(hoursValue + minutesValue / 60);
          } else {
            onSelect(24);
          }
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

const SleepIndicator = ({ onSelect, value }) => {
    return <TimeInput title="How long did you sleep?" value={value} onSelect={onSelect} />;
};
  
const ExerciceIndicator = ({ onSelect, value }) => {
    return <TimeInput title="How long did you exercise?" value={value} onSelect={onSelect} />;
};

const Description = ({ title, value, onChange }) => {
  return (
    <View>
      <Text style={styles.TypeTitle}>{title}</Text>
      <View>
          <View style={styles.DescriptionContainer}>
              <TextInput
                style={styles.DescriptionInput}
                multiline={true}
                numberOfLines={10}
                onChangeText={onChange}
                value={value}
                placeholder="Enter description"
              />
          </View>
          <Shadow size="Normal" color={colors.primary} borderRadius={24} />
      </View>
    </View>
  );
};

const activities = [
    { id: 1, label: 'Commencer tôt', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 2, label: 'Faire une liste', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 3, label: 'Concentration', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 4, label: 'Faire une pause', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
    { id: 5, label: 'Manger', iconActive: require('../../assets/icons/Tabs_Nav/Home/Home.png'), iconDesactive: require('../../assets/icons/Tabs_Nav/Home/Home-focused.png')},
  ];

  const Question = ({ type, value, onSelect, onChange }) => {
    if (type === 'moods') return <MoodSelector value={value} onSelect={onSelect} />;
    if (type === 'energy') return <LevelSelector title="How much energy do you have?" levels={[1, 2, 3, 4, 5]} value={value} onSelectLevel={onSelect} positive="Lot of energy" negative="No energy" />;
    if (type === 'stress') return <LevelSelector title="How stressed are you?" levels={[1, 2, 3, 4, 5]} value={value} onSelectLevel={onSelect} positive="Not stressed" negative="Very stressed" />;
    if (type === 'social') return <LevelSelector title="How social are you?" levels={[1, 2, 3, 4, 5]} value={value} onSelectLevel={onSelect} positive="Not social" negative="Very social" />;
    if (type === 'activity') return <ActivitySelector value={value} onSelect={onSelect} />;
    if (type === 'sleep') return <SleepIndicator value={value} onSelect={onSelect} />;
    if (type === 'exercice') return <ExerciceIndicator value={value} onSelect={onSelect} />;
    if (type === 'description') return <Description title="Description" value={value} onChange={onChange} />;
    return null;
  };
  
  export default Question;
  
