/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { useColorModeValue } from '@chakra-ui/react';
import { getPLAINFromLocalStorage } from '../helpers/localStorage';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [language, setLanguage] = useState('');
  const suplementaryColor = useColorModeValue('blue.400', 'blue.700');
  const suplementaryColorHover = useColorModeValue('blue.500', 'blue.800');
  const errorColor = useColorModeValue('red.400', 'red.700');
  const errorColorHover = useColorModeValue('red.500', 'red.800');
  const whiteOnlyColor = useColorModeValue('white', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const vulnerabilityColor = {
    CRITICAL: { bgColor: 'black', color: 'white' },
    HIGH: { bgColor: 'red.500', color: 'black' },
    MEDIUM: { bgColor: 'yellow.500', color: 'black' },
    LOW: { bgColor: 'yellow.300', color: 'black' },
    NOT_SUPPLIED: { bgColor: 'gray.100', color: 'black' },
  };

  useEffect(() => {
    const languageInLocalStorage = getPLAINFromLocalStorage('i18nextLng');
    // eslint-disable-next-line no-unused-expressions
    languageInLocalStorage !== null ? setLanguage(languageInLocalStorage) : setLanguage('en-US');
  }, []);

  return (
    <SettingsContext.Provider value={{
      suplementaryColor,
      suplementaryColorHover,
      errorColor,
      errorColorHover,
      whiteOnlyColor,
      vulnerabilityColor,
      bgColor,
      language,
      setLanguage,
    }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
