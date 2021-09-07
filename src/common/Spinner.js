import React, { useContext } from 'react';
import { Flex, Spinner as ChakraSpinner } from '@chakra-ui/react';
import { SettingsContext } from '../context/SettingsContext';

const Spinner = () => {
  const { suplementaryColor } = useContext(SettingsContext);

  return (
    <Flex height="100%" justifyContent="center" alignItems="center" p={5}>
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        color={suplementaryColor}
        size="xl"
      />
    </Flex>
  );
};

export default Spinner;
