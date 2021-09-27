import React, { useContext } from 'react';
import {
  Box,
  Center,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BulletinContext } from '../context/BulletinContext';

import Header from '../common/Header';
import { BulletinIcon } from '../common/Icons';

import CVEList from '../components/cve-search-results/CVEList';
import GenerateBulletinButton from '../components/bulletin-generator/GenerateBulletinButton';
import ClearBulletinButton from '../components/bulletin-generator/ClearBulletinButton';
import RefreshBulletinButton from '../components/bulletin-generator/RefreshBulletinButton';

const BulletinGenerator = () => {
  const { t } = useTranslation();
  const titleT = t('bulletin-generator.title');

  const { bulletinCveList } = useContext(BulletinContext);

  return (
    <Box as="article">
      <Header title={titleT} icon={<BulletinIcon />} />
      <Center as="section" p={2} flexDirection={['column', 'column', 'row']}>
        <GenerateBulletinButton
          display="block"
          mx="auto"
          py={4}
          width={['80%', '80%', '30%', '30%']}
          height="auto"
          fontSize={['xl', '2xl', 'xl', '2xl']}
        />
        <ClearBulletinButton
          display="block"
          mx={[0, 0, 2]}
          my={[4, 4, 0]}
          py={4}
          width={['80%', '80%', '30%', '30%']}
          height="auto"
          fontSize={['xl', '2xl', 'xl', '2xl']}
        />
        <RefreshBulletinButton
          display="block"
          mx={[0, 0, 'auto']}
          py={4}
          width={['80%', '80%', '30%', '30%']}
          height="auto"
          fontSize={['xl', '2xl', 'xl', '2xl']}
        />
      </Center>
      <CVEList cveList={bulletinCveList} />
    </Box>
  );
};

export default BulletinGenerator;
