import React, { Suspense } from 'react';
import { GridItem } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import CVESearchPage from '../pages/CVESearchPage';
import CVEDetailsPage from '../pages/CVEDetailsPage';
import CVESearchResultsPage from '../pages/CVESearchResultsPage';
import BulletinGeneratorPage from '../pages/BulletinGeneratorPage';
import CVSSCalculatorPage from '../pages/CVSSCalculatorPage';
import SettingsPage from '../pages/SettingsPage';
import NotFoundPage from '../pages/NotFoundPage';

import Spinner from '../common/Spinner';

const Page = (props) => (
  <GridItem as="main" {...props} p={2}>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route component={CVESearchPage} path="/" exact />
        <Route component={CVESearchPage} path="/cve-search" exact />
        <Route component={CVESearchResultsPage} path="/cve-search/results/:page?" />
        <Route component={CVEDetailsPage} path="/cve-details/:cveId" />
        <Route component={BulletinGeneratorPage} path="/bulletin-generator" />
        <Route component={CVSSCalculatorPage} path="/cvss-calculator" />
        <Route component={SettingsPage} path="/settings" />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </GridItem>
);

export default Page;
