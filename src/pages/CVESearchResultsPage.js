import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import Header from '../common/Header';
import { CVESearchIcon } from '../common/Icons';

const CVESearchResultsPage = (props) => {
  const { t } = useTranslation();
  const titleT = t('cve-search-results.title');

  return (<Box as="article"><Header title={titleT} icon={<CVESearchIcon />} /></Box>);
};

export default CVESearchResultsPage;
