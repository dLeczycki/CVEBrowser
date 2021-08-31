import React from 'react';
import {
  Box,
} from '@chakra-ui/react';
import Header from '../common/Header';
import { BulletinIcon } from '../common/Icons';

const BulletinGenerator = () => (
  <Box as="article">
    <Header title="Bulletin Generator" icon={<BulletinIcon />} />
  </Box>
);

export default BulletinGenerator;
