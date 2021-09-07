import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Box,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { API_KEY } from '../constants/API';
import Header from '../common/Header';
import { CVESearchIcon } from '../common/Icons';
import Spinner from '../common/Spinner';
import CVEList from '../components/cve-search-results/CVEList';
import Pager from '../components/cve-search-results/Pager';

import { parseDate } from '../helpers/dateParser';

const CVESearchResultsPage = () => {
  const { t } = useTranslation();
  const titleT = t('cve-search-results.title');

  const history = useHistory();
  const { state } = history.location;
  const page = Number(useParams().page);

  const [queryResult, setQueryResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (!state) history.push('/cve-search');

  const createRequestURL = () => {
    let requestURL = `${API_KEY}`;

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
      const requestURL = createRequestURL();

      const response = await fetch(requestURL);
      const responseJSON = await response.json();

      setQueryResult(responseJSON);
      setIsLoading(false);
    };

    fetchCVEList();
  }, [page]);

  return (
    <Box as="article">
      <Header title={titleT} icon={<CVESearchIcon />} />
      {isLoading ? <Spinner /> : (
        <>
          <CVEList queryResult={queryResult} />
        </>
      )}
      <Pager searchParams={state} totalResults={queryResult.totalResults} page={page} />
    </Box>
  );
};

export default CVESearchResultsPage;
