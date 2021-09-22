import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { API_CVES } from '../constants/API';
import Header from '../common/Header';
import { CVESearchIcon } from '../common/Icons';
import Spinner from '../common/Spinner';
import TotalResults from '../components/cve-search-results/TotalResults';
import CVEList from '../components/cve-search-results/CVEList';
import Pager from '../components/cve-search-results/Pager';

import { parseCveServerResponse, parseDate } from '../helpers/utils';

const CVESearchResultsPage = () => {
  const { t } = useTranslation();
  const titleT = t('cve-search-results.title');
  const errorT = t('cve-search-results.error-fetching-data');

  const history = useHistory();
  const { state } = history.location;
  const page = Number(useParams().page);

  const [cveList, setCveList] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetchingData, setErrorFetchingData] = useState(false);

  if (!state) history.push('/cve-search');

  const createRequestURL = () => {
    let requestURL = `${API_CVES}`;

    const {
      publishedDateRange, modifiedDateRange, pageSize, keywords,
    } = state;

    requestURL += `?resultsPerPage=${pageSize}`;

    if (publishedDateRange.startDate) {
      const date = parseDate(publishedDateRange.startDate);
      requestURL += `&pubStartDate=${date}`;
    }

    if (publishedDateRange.endDate) {
      const date = parseDate(publishedDateRange.endDate);
      requestURL += `&pubEndDate=${date}`;
    }

    if (modifiedDateRange.startDate) {
      const date = parseDate(modifiedDateRange.startDate);
      requestURL += `&modStartDate=${date}`;
    }

    if (modifiedDateRange.endDate) {
      const date = parseDate(modifiedDateRange.endDate);
      requestURL += `&modEndDate=${date}`;
    }

    if (keywords.length > 0) {
      requestURL += '&keyword=';
      keywords.forEach((keyword) => {
        requestURL += `${keyword}+`;
      });
    }

    if (page > 1) {
      const startIndex = pageSize * page - pageSize;
      requestURL += `&startIndex=${startIndex}`;
    }

    return requestURL;
  };

  useEffect(() => {
    const fetchCVEList = async () => {
      setIsLoading(true);

      try {
        const requestURL = createRequestURL();

        const response = await fetch(requestURL);
        const responseJSON = await response.json();

        const [parsedCveList, parsedTotalResults] = parseCveServerResponse(responseJSON);

        setCveList(parsedCveList);
        setTotalResults(parsedTotalResults);
        setErrorFetchingData(false);
      } catch (error) {
        setErrorFetchingData(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCVEList();
  }, [page]);

  let content;
  const results = (
    <Box as="section" height="100%">
      <TotalResults totalResults={totalResults} />
      <CVEList cveList={cveList} />
    </Box>
  );

  if (isLoading) {
    content = <Spinner />;
  } else if (errorFetchingData) {
    content = <Heading as="h2">{errorT}</Heading>;
  } else {
    content = results;
  }

  return (
    <Box as="article">
      <Header title={titleT} icon={<CVESearchIcon />} />
      {content}
      <Pager searchParams={state} totalResults={totalResults} page={page} />
    </Box>
  );
};

export default CVESearchResultsPage;
