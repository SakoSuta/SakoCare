import { useState } from 'react';
import api from '../services/api';

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

const useSyncIcon = () => {
    const [moods, setMoods] = useState([]);

    useEffect(() => {
      const fetchMoods = async () => {
        try {
          const response = await api.get('/moods');
          const moodsWithIcons = response.data.map(mood => ({
            ...mood,
            icon: moodIcons[mood.name] || NeutralIcon,
          }));
          setMoods(moodsWithIcons);
        } catch (err) {
          console.error('Error fetching moods:', err);
        }
      };
  
      fetchMoods();
    }, []);
    console.log('moods', moods);

  return { moods };
};

export default useSyncIcon;