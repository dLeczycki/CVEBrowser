import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import { BulletinIcon } from '../common/Icons';

const BulletinGenerator = () => {
  const { t } = useTranslation();
  const titleT = t('bulletin-generator.title');
  return (
    <Box as="article">
      <Header title={titleT} icon={<BulletinIcon />} />
    </Box>
  );
};

export default BulletinGenerator;
