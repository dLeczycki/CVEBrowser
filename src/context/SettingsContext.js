/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { getPLAINFromLocalStorage } from '../helpers/LocalStorage';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const suplementaryColor = useColorModeValue('blue.400', 'blue.700');
  const whiteOnlyColor = useColorModeValue('white', 'white');

  useEffect(() => {
    const languageInLocalStorage = getPLAINFromLocalStorage('i18nextLng');
    // eslint-disable-next-line no-unused-expressions
    languageInLocalStorage !== null ? setLanguage(languageInLocalStorage) : setLanguage('en-US');
  }, []);

  return (
    <SettingsContext.Provider value={{
      suplementaryColor,
      whiteOnlyColor,
      language,
      setLanguage,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
