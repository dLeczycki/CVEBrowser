import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { CVEBrowserIcon } from '../common/Icons';
import Header from '../common/Header';

const CVEBrowserPage = () => (
  <Box as="article">
    <Header title="CVE Browser" icon={<CVEBrowserIcon />} />
  </Box>
);

export default CVEBrowserPage;
