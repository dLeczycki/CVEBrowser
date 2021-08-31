import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { SettingsIcon } from '../common/Icons';
import Header from '../common/Header';
import ThemeModeForm from '../components/settings/ThemeModeForm';
import LanguageForm from '../components/settings/LanguageForm';

const SettingsPage = () => (
  <Box as="article">
    <Header title="Settings" icon={<SettingsIcon />} />
    <Flex
      as="section"
      p={2}
      flexDirection={['column']}
      alignItems={['center', 'center', 'flex-start']}
    >
      <ThemeModeForm />
      <LanguageForm />
    </Flex>
  </Box>
);

export default SettingsPage;
