import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CVEBrowserIcon } from '../common/Icons';
import Header from '../common/Header';

import SearchCVEButton from '../components/cve-browser/SearchCVEButton';
import PublishedDateFilter from '../components/cve-browser/PublishedDateFilter';
import ModifiedDateFilter from '../components/cve-browser/ModifiedDateFilter';
import PageSizeFilter from '../components/cve-browser/PageSizeFilter';
import KeywordsFilter from '../components/cve-browser/KeywordsFilter';

const CVEBrowserPage = () => {
  const { t } = useTranslation();
  const titleT = t('cve-browser.title');
  const filtersT = t('cve-browser.filters');

  const [publishedDateRange, setPublishedDateRange] = useState({
    startDate: '',
    endDate: '',
  });
  const [modifiedDateRange, setModifiedDateRange] = useState({
    startDate: '',
    endDate: '',
  });
  const [pageSize, setPageSize] = useState(20);
  const [keywords, setKeywords] = useState([]);

  return (
    <Box as="article">
      <Header title={titleT} icon={<CVEBrowserIcon />} />
      <SearchCVEButton searchParams={{
        publishedDateRange, modifiedDateRange, pageSize, keywords,
      }}
      />
      <Heading as="h2" my={4}>{filtersT}</Heading>
      <Flex as="section" flexWrap="wrap" justifyContent="space-around">
        <PublishedDateFilter
          publishedDateRange={publishedDateRange}
          setPublishedDateRange={setPublishedDateRange}
          flexBasis={['100%', '100%', '50%']}
          mt={6}
        />
        <ModifiedDateFilter
          modifiedDateRange={modifiedDateRange}
          setModifiedDateRange={setModifiedDateRange}
          flexBasis={['100%', '100%', '50%']}
          mt={6}
        />
        <PageSizeFilter
          pageSize={pageSize}
          setPageSize={setPageSize}
          flexBasis={['100%', '100%', '50%']}
          mt={6}
        />
        <KeywordsFilter
          keywords={keywords}
          setKeywords={setKeywords}
          flexBasis={['100%', '100%', '50%']}
          mt={6}
        />
      </Flex>
    </Box>
  );
};

export default CVEBrowserPage;
