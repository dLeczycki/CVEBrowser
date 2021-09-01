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
  const title = t('common.settings');
  return (
    <Box as="article">
      <Header title={title} icon={<SettingsIcon />} />
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
