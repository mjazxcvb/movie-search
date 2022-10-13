import {catchError} from '../utils/catchError';

const useStorage = () => {
  const setItem = async (key: string, value: any) => {
    try {
      await localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      catchError(e);
    }
  };

  const getItem = async (key: string, def: any) => {
    try {
      const value = await localStorage.getItem(key);
      return value !== null ? JSON.parse(value) : def;
    } catch (e) {
      catchError(e);
    }
  };

  const removeItem = async (key: string) => {
    try {
      await localStorage.removeItem(key);
    } catch (e) {
      catchError(e);
    }
  };

  return {
    setItem,
    getItem,
    removeItem,
  };
};

export default useStorage;