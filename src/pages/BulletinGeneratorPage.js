import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Header from '../common/Header';
import { BulletinIcon } from '../common/Icons';

const BulletinGenerator = () => {
  const { t } = useTranslation();
  const title = t('common.bulletin-generator');
  return (
    <Box as="article">
      <Header title={title} icon={<BulletinIcon />} />
    </Box>
  );
};

export default BulletinGenerator;
