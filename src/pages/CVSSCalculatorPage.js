import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CVSSCalculatorIcon } from '../common/Icons';
import Header from '../common/Header';

const CVSSCalculatorPage = () => {
  const { t } = useTranslation();
  const title = t('common.cvss-calculator');
  return (
    <Box as="article">
      <Header title={title} icon={<CVSSCalculatorIcon />} />
    </Box>
  );
};

export default CVSSCalculatorPage;
