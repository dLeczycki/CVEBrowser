import React from 'react';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { LightModeIcon, DarkModeIcon } from '../../common/Icons';

const ThemeModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('Dark', 'Light');
  const SwitchIcon = useColorModeValue(DarkModeIcon, LightModeIcon);

  return (
    <Button
      display="flex"
      alignItems="center"
      marginTop="unset"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      {...props}
    >
      {text}
      {' '}
      <SwitchIcon marginLeft={1} />
    </Button>
  );
};

export default ThemeModeSwitcher;
