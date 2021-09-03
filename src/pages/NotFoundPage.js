import React from 'react';
import { Box, Center } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Header from '../common/Header';
import { BanIcon } from '../common/Icons';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const titleT = t('not-found-page.title');
  const explanationT = t('not-found-page.explanation');

  return (
    <Box as="article">
      <Header title={titleT} icon={<BanIcon />} />
      <Center as="section">{explanationT}</Center>
    </Box>
  );
};

export default NotFoundPage;
