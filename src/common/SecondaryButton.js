import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { SettingsContext } from '../context/SettingsContext';

const SecondaryButton = (props) => {
  const { secondaryColor, secondaryColorHover, whiteOnlyColor } = useContext(SettingsContext);
  const { children } = props;
  return (
    <Button
      bgColor={secondaryColor}
      color={whiteOnlyColor}
      _hover={{
        background: secondaryColorHover,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
