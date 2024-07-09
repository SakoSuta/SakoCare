import { useState, useEffect } from 'react';
import api from '../services/api';

const resourceImage = {
    1: {
        image: require('../assets/images/Exemple.png'),
    },
    2: {
        image: require('../assets/images/Exemple.png'),
    },
    3: {
        image: require('../assets/images/Exemple.png'),
    },
    4: {
        image: require('../assets/images/Exemple.png'),
    },
    5: {
        image: require('../assets/images/Exemple.png'),
    },
    6: {
        image: require('../assets/images/Exemple.png'),
    },
    7: {
        image: require('../assets/images/Exemple.png'),
    },
    8: {
        image: require('../assets/images/Exemple.png'),
    },
    9: {
        image: require('../assets/images/Exemple.png'),
    },
    10: {
        image: require('../assets/images/Exemple.png'),
    },
};

const useResources = (userID) => {
  const [resources, setResources] = useState([]);
  const [UserResources, setUserResources] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const response = await api.get('/resources');
        console.log('Resources fetched successfully:', response.data);
        const ResourceWithImages = response.data.map(resource => ({
          ...resource,
          image: resourceImage[resource.id]?.image,
        }));
        setResources(ResourceWithImages);
      } catch (err) {
        setError(err);
        console.error('Error fetching resources:', err);
      } finally {
        setLoading(false);
      }
    };

    const fetchUserResources = async (userID) => {
      setLoading(true);
      try {
        const response = await api.get(`/user/user-resources/${userID}`);
        console.log('User resources fetched successfully:', response.data);
        const ResourceWithImages = response.data.map(resource => ({
          ...resource.resource,
          image: resourceImage[resource.id]?.image,
        }));
        setUserResources(ResourceWithImages);
      } catch (err) {
        setError(err);
        console.error('Error fetching user resources:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserResources(userID);
    fetchResources();
  }, [userID]);

  return { resources, UserResources, loading, error };
};

export default useResources;
