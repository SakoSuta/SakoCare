import { useState, useEffect } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

import VerySadIcon from '../assets/images/moods/Very_Sad.png';
import SadIcon from '../assets/images/moods/Sad.png';
import NeutralIcon from '../assets/images/moods/Neutre.png';
import HappyIcon from '../assets/images/moods/Smile.png';
import VeryHappyIcon from '../assets/images/moods/Big_Smile.png';

const moodIcons = {
  Very_Sad: VerySadIcon,
  Sad: SadIcon,
  Neutral: NeutralIcon,
  Happy: HappyIcon,
  Very_Happy: VeryHappyIcon,
};

const useMood = () => {
  const [moods, setMoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoods = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await api.get('/moods', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const moodsWithIcons = response.data.map(mood => ({
          ...mood,
          icon: moodIcons[mood.name] || NeutralIcon,
        }));
        setMoods(moodsWithIcons);
      } catch (err) {
        setError(err);
        console.error('Error fetching moods:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoods();
  }, []);

  return { moods, loading, error };
};

export default useMood;
