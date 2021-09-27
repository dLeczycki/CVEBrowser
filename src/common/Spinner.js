import React, { useContext } from 'react';
import { Flex, Spinner as ChakraSpinner } from '@chakra-ui/react';
import { SettingsContext } from '../context/SettingsContext';

const Spinner = () => {
  const { primaryColor } = useContext(SettingsContext);

  return (
    <Flex height="100%" justifyContent="center" alignItems="center" p={5}>
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        color={primaryColor}
        size="xl"
      />
    </Flex>
  );
};

export default Spinner;
