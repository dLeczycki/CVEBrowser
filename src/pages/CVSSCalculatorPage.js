import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CVSSCalculatorIcon } from '../common/Icons';
import Header from '../common/Header';

const CVSSCalculatorPage = () => {
  const { t } = useTranslation();
  const titleT = t('cvss-calculator.title');
  return (
    <Box as="article">
      <Header title={titleT} icon={<CVSSCalculatorIcon />} />
    </Box>
  );
};

export default CVSSCalculatorPage;
