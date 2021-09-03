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
      <SearchCVEButton
        searchParams={{
          publishedDateRange, modifiedDateRange, pageSize, keywords,
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
      <Heading as="h2" mt={[12, 12, 6]} mb={[6, 6, 4]} pl={[0, 0, 2]} textAlign={['center', 'center', 'left']}>{filtersT}</Heading>
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
      </Flex>
    </Box>
  );
};

export default CVEBrowserPage;
