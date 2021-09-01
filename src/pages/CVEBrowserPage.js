import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CVEBrowserIcon } from '../common/Icons';
import Header from '../common/Header';

const CVEBrowserPage = () => {
  const { t } = useTranslation();
  const title = t('common.cve-browser');
  return (
    <Box as="article">
      <Header title={title} icon={<CVEBrowserIcon />} />
    </Box>
  );
};

export default CVEBrowserPage;
