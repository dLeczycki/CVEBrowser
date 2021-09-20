import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';

import { SettingsContext } from '../context/SettingsContext';

const ErrorButton = (props) => {
  const { errorColor, errorColorHover, whiteOnlyColor } = useContext(SettingsContext);
  const { children } = props;
  return (
    <Button
      bgColor={errorColor}
      color={whiteOnlyColor}
      _hover={{
        background: errorColorHover,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ErrorButton;
