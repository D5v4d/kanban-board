import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // Инициализация состояния
  const initializeState = () => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : initialValue;
    } catch (error) {
      console.error("Ошибка при чтении данных из localStorage:", error);
      return initialValue;
    }
  };

  const [state, setState] = useState(initializeState);

  // Сохранение данных в localStorage при изменении состояния
  useEffect(() => {
    if (typeof state === "object" && state !== null) {
      localStorage.setItem(key, JSON.stringify(state));
    } else {
      console.error("Неверная структура данных для сохранения в localStorage");
    }
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;