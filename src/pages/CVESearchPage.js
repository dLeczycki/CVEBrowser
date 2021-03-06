import React, { useState } from 'react';
import {
  Box,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { CVESearchIcon } from '../common/Icons';
import Header from '../common/Header';

import SearchCVEButton from '../components/cve-search/SearchCVEButton';
import PublishedDateFilter from '../components/cve-search/PublishedDateFilter';
import ModifiedDateFilter from '../components/cve-search/ModifiedDateFilter';
import PageSizeFilter from '../components/cve-search/PageSizeFilter';
import KeywordsFilter from '../components/cve-search/KeywordsFilter';
import SingleCVEFilter from '../components/cve-search/SingleCVEFilter';

import { useLocalStorage } from '../hooks/useLocalStorage';

import {
  KEYWORDS, PAGE_SIZE, CVE,
} from '../constants/strings';

const CVESearchPage = () => {
  const { t } = useTranslation();
  const titleT = t('cve-search.title');
  const filtersT = t('cve-search.filters');

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
  const [cveId, setCVEId] = useState('');

  useLocalStorage(keywords, setKeywords, KEYWORDS);
  useLocalStorage(pageSize, setPageSize, PAGE_SIZE);
  useLocalStorage(cveId, setCVEId, CVE);

  return (
    <Box as="article">
      <Header title={titleT} icon={<CVESearchIcon />} />
      <SearchCVEButton
        searchParams={{
          publishedDateRange, modifiedDateRange, pageSize, keywords, cveId,
        }}
        display="block"
        mx="auto"
        my={[10, 10, 4]}
        p={4}
        width={['80%', '80%', '500px']}
        height="auto"
        fontSize="2xl"
        variant="solid"
      />
      <Heading as="h2" mt={[12]} mb={[6, 6, 4]} textAlign={['center']}>{filtersT}</Heading>
      <Flex as="section" flexWrap="wrap" justifyContent="space-around">
        <PublishedDateFilter
          publishedDateRange={publishedDateRange}
          setPublishedDateRange={setPublishedDateRange}
          flexBasis={['100%', '100%', '50%']}
          p={1}
        />
        <ModifiedDateFilter
          modifiedDateRange={modifiedDateRange}
          setModifiedDateRange={setModifiedDateRange}
          flexBasis={['100%', '100%', '50%']}
          mt={[6, 6, 0]}
          p={1}
        />
        <PageSizeFilter
          pageSize={pageSize}
          setPageSize={setPageSize}
          flexBasis={['100%', '100%', '50%']}
          mt={[6, 6, 20]}
          p={2}
        />
        <KeywordsFilter
          keywords={keywords}
          setKeywords={setKeywords}
          flexBasis={['100%', '100%', '50%']}
          mt={[6, 6, 20]}
          p={2}
        />
        <SingleCVEFilter
          cveId={cveId}
          setCVEId={setCVEId}
          flexBasis={['100%', '100%', '50%']}
          mt={6}
          p={2}
        />
      </Flex>
    </Box>
  );
};

export default CVESearchPage;
