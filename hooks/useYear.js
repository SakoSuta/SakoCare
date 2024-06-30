import { useState, useEffect } from 'react';
import api from '../services/api';

const useYear = (userId, year) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/user/emotion-diary/${userId}/year/${year}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, year]);

  return { data, loading, error };
};

export default useYear;
