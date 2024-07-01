import { useState, useEffect } from 'react';
import api from '../services/api';

const useYear = (userId, year) => {
  const [data, setData] = useState({ raw: [], formatted: {} });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get(`/user/emotion-diary/${userId}/year/${year}`);
        const rawData = response.data;
        const formattedData = transformData(rawData);
        setData({ raw: rawData, formatted: formattedData });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, year]);

  const transformData = (rawData) => {
    const dataMap = {};
    if (Array.isArray(rawData)) {
      rawData.forEach(entry => {
        if (entry.entry_date && entry.mood && entry.mood.color) {
          const dateKey = entry.entry_date.split('T')[0];
          dataMap[dateKey] = entry.mood.color;
        }
      });
    }
    return dataMap;
  };

  return { data: data.raw, Pixel: data.formatted, loading, error };
};

export default useYear;
