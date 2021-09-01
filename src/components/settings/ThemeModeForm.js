import React from 'react';
import {
  Flex, FormLabel,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ThemeModeSwitcher from './ThemeModeSwitcher';

const ThemeModeForm = () => {
  const { t } = useTranslation();
  return (
    <Flex justifyContent="center" alignItems="center" pt={3}>
      <FormLabel htmlFor="theme-mode" mb="0">
        {`${t('common.theme')}:`}
      </FormLabel>
      <ThemeModeSwitcher id="theme-mode" />
    </Flex>
  );
};

export default ThemeModeForm;
