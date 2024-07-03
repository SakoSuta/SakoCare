import { useState, useEffect } from 'react';
import api from '../services/api';

const activityIcons = {
    1: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    2: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    3: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    4: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    5: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    6: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    7: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    8: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    9: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
    10: {
        active: require('../assets/icons/Tabs_Nav/Home/Home.png'),
        desactive: require('../assets/icons/Tabs_Nav/Home/Home-focused.png')
    },
};

const useActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const response = await api.get('/activities');
        console.log('Activities fetched successfully:', response.data);
        const activitiesWithIcons = response.data.map(activity => ({
          ...activity,
          iconActive: activityIcons[activity.id]?.active,
          iconDesactive: activityIcons[activity.id]?.desactive,
        }));
        setActivities(activitiesWithIcons);
      } catch (err) {
        setError(err);
        console.error('Error fetching activities:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return { activities, loading, error };
};

export default useActivities;
