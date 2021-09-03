import React, { useContext } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

import { SettingsContext } from '../context/SettingsContext';

const Button = (props) => {
  const { suplementaryColor, suplementaryColorHover, whiteOnlyColor } = useContext(SettingsContext);
  const { children } = props;
  return (
    <ChakraButton
      bgColor={suplementaryColor}
      color={whiteOnlyColor}
      _hover={{
        background: suplementaryColorHover,
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
