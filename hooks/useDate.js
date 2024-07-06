import { useMemo } from 'react';

const useDate = () => {
  const getWeekDates = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return weekDays.map((day, index) => {
      const date = new Date(today);
      date.setDate(startOfWeek + index);
      return { day, date: date.toISOString().split('T')[0] };
    });
  }, []);

  const getWeekStartDate = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startOfWeek = today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
    const startDate = new Date(today);
    startDate.setDate(startOfWeek);
    return startDate.toISOString().split('T')[0];
  }, []);

  return { getWeekDates, getWeekStartDate };
};

export default useDate;
