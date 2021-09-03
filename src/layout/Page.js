import React, { Suspense } from 'react';
import { GridItem, Spinner, Flex } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import CVESearchPage from '../pages/CVESearchPage';
import BulletinGeneratorPage from '../pages/BulletinGeneratorPage';
import CVSSCalculatorPage from '../pages/CVSSCalculatorPage';
import SettingsPage from '../pages/SettingsPage';
import CVESearchResultsPage from '../pages/CVESearchResultsPage';
import NotFoundPage from '../pages/NotFoundPage';

const Page = (props) => {
  const spinner = (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
  return (
    <GridItem as="main" {...props} p={2}>
      <Suspense fallback={spinner}>
        <Switch>
          <Route component={CVESearchPage} path="/" exact />
          <Route component={CVESearchPage} path="/cve-search" exact />
          <Route component={CVESearchResultsPage} path="/cve-search/results" />
          <Route component={BulletinGeneratorPage} path="/bulletin-generator" />
          <Route component={CVSSCalculatorPage} path="/cvss-calculator" />
          <Route component={SettingsPage} path="/settings" />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </GridItem>
  );
};

export default Page;
