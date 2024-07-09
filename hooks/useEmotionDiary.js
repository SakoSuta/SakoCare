import { useCallback } from 'react';
import api from '../services/api';

const useEmotionDiary = () => {
  const getEntryByDate = useCallback(async (userID, date) => {
    const response = await api.get(`user/emotion-diary/${userID}/by-date`, { params: { date } });
    console.log('userID:', userID, 'date:', date)
    return response.data[0];
  }, []);

  const getEntriesByWeek = useCallback(async (userID, weekStartDate) => {
    try {
      const response = await api.get(`user/emotion-diary/${userID}/week/${weekStartDate}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching entries by week:', error);
      throw error;
    }
  }, []);

  const getEntriesByMonth = useCallback(async (userID, monthStartDate) => {
    try {
      const response = await api.get(`user/emotion-diary/${userID}/month/${monthStartDate}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching entries by month:', error);
      throw error;
    }
  }, []);

  const createEntry = useCallback(async (entryData) => {
    try {
      const response = await api.post('/emotion-diary', entryData);
      return response.data;
    } catch (error) {
      console.error('Error creating entry:', error);
      throw error;
    }
  }, []);

  const updateEntry = useCallback(async (entryID, entryData) => {
    try {
      const response = await api.patch(`/emotion-diary/${entryID}`, entryData);
      return response.data;
    } catch (error) {
      console.error('Error updating entry:', error);
      throw error;
    }
  }, []);

  const deleteEntry = useCallback(async (entryID) => {
    try {
      const response = await api.delete(`/emotion-diary/${entryID}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting entry:', error);
      throw error;
    }
  }, []);

  return {
    getEntryByDate,
    getEntriesByWeek,
    getEntriesByMonth,
    createEntry,
    updateEntry,
    deleteEntry,
  };
};

export default useEmotionDiary;
