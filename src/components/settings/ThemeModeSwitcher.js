import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { LightModeIcon, DarkModeIcon } from '../../common/Icons';

const ThemeModeSwitcher = (props) => {
  const { t } = useTranslation();

  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(DarkModeIcon, LightModeIcon);
  const text = useColorModeValue(t('settings.theme.dark'), t('settings.theme.light'));

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
