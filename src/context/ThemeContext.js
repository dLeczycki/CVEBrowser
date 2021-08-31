import React, { createContext } from 'react';
import { useColorModeValue } from '@chakra-ui/react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const suplementaryColor = useColorModeValue('blue.400', 'blue.700');
  const whiteOnly = useColorModeValue('white', 'white');

  return (
    <ThemeContext.Provider value={{
      suplementaryColor,
      whiteOnly,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
