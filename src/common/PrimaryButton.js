import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { SettingsContext } from '../context/SettingsContext';

const PrimaryButton = (props) => {
  const { primaryColor, primaryColorHover, whiteOnlyColor } = useContext(SettingsContext);
  const { children } = props;
  return (
    <Button
      bgColor={primaryColor}
      color={whiteOnlyColor}
      _hover={{
        background: primaryColorHover,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
