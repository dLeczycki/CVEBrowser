import React, { Suspense } from 'react';
import { GridItem, Spinner, Flex } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';
import CVEBrowserPage from '../pages/CVEBrowserPage';
import BulletinGeneratorPage from '../pages/BulletinGeneratorPage';
import CVSSCalculatorPage from '../pages/CVSSCalculatorPage';
import SettingsPage from '../pages/SettingsPage';

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
          <Route component={CVEBrowserPage} path="/" exact />
          <Route component={CVEBrowserPage} path="/cve-browser" />
          <Route component={BulletinGeneratorPage} path="/bulletin-generator" />
          <Route component={CVSSCalculatorPage} path="/cvss-calculator" />
          <Route component={SettingsPage} path="/settings" />
        </Switch>
      </Suspense>
    </GridItem>
  );
};

export default Page;
