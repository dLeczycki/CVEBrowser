import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { SettingsIcon } from '../common/Icons';
import Header from '../common/Header';
import ThemeModeForm from '../components/settings/ThemeModeForm';
import LanguageForm from '../components/settings/LanguageForm';

const SettingsPage = () => {
  const { t } = useTranslation();
  const titleT = t('settings.title');
  return (
    <Box as="article">
      <Header title={titleT} icon={<SettingsIcon />} />
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
};

export default SettingsPage;
