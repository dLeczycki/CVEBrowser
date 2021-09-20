import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { SettingsContext } from '../context/SettingsContext';

const SuccessButton = (props) => {
  const { suplementaryColor, suplementaryColorHover, whiteOnlyColor } = useContext(SettingsContext);
  const { children } = props;
  return (
    <Button
      bgColor={suplementaryColor}
      color={whiteOnlyColor}
      _hover={{
        background: suplementaryColorHover,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SuccessButton;
