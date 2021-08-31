import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import { CVSSCalculatorIcon } from '../common/Icons';
import Header from '../common/Header';

const CVSSCalculatorPage = () => (
  <Box as="article">
    <Header title="CVSS Calculator" icon={<CVSSCalculatorIcon />} />
  </Box>
);

export default CVSSCalculatorPage;
