import { GridItem } from '@chakra-ui/react';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CVEBrowserPage from '../../pages/CVEBrowserPage';
import BulletinGeneratorPage from '../../pages/BulletinGeneratorPage';
import CVSSCalculatorPage from '../../pages/CVSSCalculatorPage';
import SettingsPage from '../../pages/SettingsPage';

const Page = (props) => (
  <GridItem as="main" {...props} p={2}>
    <Switch>
      <Route component={CVEBrowserPage} path="/" exact />
      <Route component={CVEBrowserPage} path="/cve-browser" />
      <Route component={BulletinGeneratorPage} path="/bulletin-generator" />
      <Route component={CVSSCalculatorPage} path="/cvss-calculator" />
      <Route component={SettingsPage} path="/settings" />
    </Switch>
  </GridItem>
);

export default Page;
