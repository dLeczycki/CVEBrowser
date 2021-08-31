import React from 'react';
import {
  Flex, FormLabel,
} from '@chakra-ui/react';
import ThemeModeSwitcher from './ThemeModeSwitcher';

const ThemeModeForm = () => (
  <Flex justifyContent="center" alignItems="center" pt={3}>
    <FormLabel htmlFor="theme-mode" mb="0">
      Theme:
    </FormLabel>
    <ThemeModeSwitcher id="theme-mode" />
  </Flex>
);

export default ThemeModeForm;
