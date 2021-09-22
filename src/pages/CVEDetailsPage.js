import React, { useState, useEffect, useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Box, Grid, Flex, Heading, Text, Link, List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { API_CVE } from '../constants/API';
import { SettingsContext } from '../context/SettingsContext';

import Header from '../common/Header';
import { EyeIcon, InfoIcon } from '../common/Icons';
import Spinner from '../common/Spinner';
import { parseCveServerResponse } from '../helpers/utils';
import BulletinButtonsPanel from '../components/cve-search-results/BulletinButtonsPanel';

const CVEDetailsPage = () => {
  const { t } = useTranslation();
  const publishedDateT = t('cve-search-results.publish-date');
  const lastModificationDateT = t('cve-search-results.last-modification-date');
  const referencesT = t('cve-search-results.references');
  const descriptionT = t('cve-search-results.description');
  const severityT = {
    critical: t('cve-search-results.critical'),
    high: t('cve-search-results.high'),
    medium: t('cve-search-results.medium'),
    low: t('cve-search-results.low'),
    not_supplied: t('cve-search-results.not_supplied'),
  };
  const severityDetailsT = t('cvss-calculator.severity-details');
  const attackVectorT = t('cvss-calculator.attack-vector');
  const privilegesRequiredT = t('cvss-calculator.privileges-required');
  const scopeT = t('cvss-calculator.scope');
  const attackComplexityT = t('cvss-calculator.attack-complexity');
  const userInteractionT = t('cvss-calculator.user-interaction');
  const confidentialityImpactT = t('cvss-calculator.confidentiality-impact');
  const integrityImpactT = t('cvss-calculator.integrity-impact');
  const availabilityImpactT = t('cvss-calculator.availability-impact');

  const { vulnerabilityColor } = useContext(SettingsContext);
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const { cveId } = useParams();

  const createTextWithTitle = (title, text) => (
    <Text as="p">
      <Text display="inline-block">{`${title}: `}</Text>
      <Text display="inline-block" ml={4} fontWeight="bold">{`${text}`}</Text>
    </Text>
  );

  const createContent = (cve) => {
    if (cve === undefined) return null;
    const { bgColor, color } = vulnerabilityColor[cve.cvssV3Metric.baseSeverity];
    const references = cve.references.map((reference) => (
      <ListItem
        key={reference}
        ml={1}
        p={1}
      >
        <ListIcon as={InfoIcon} />
        <Link
          href={reference}
          target="_blank"
          rel="noopener noreferrer"
          isExternal
        >
          {reference}
        </Link>
      </ListItem>
    ));
    const jsx = (
      <>
        <Box
          as="section"
          p={2}
        >
          <Heading as="h2">
            <Text color={color} bgColor={bgColor} textAlign="center" py={2}>
              {`${cve.cvssV3Metric.baseScore} ${severityT[cve.cvssV3Metric.baseSeverity.toLowerCase()].toUpperCase()}`}
            </Text>
          </Heading>
          <Flex flexDirection="column" justifyContent="flex-start" py={4}>
            {createTextWithTitle(publishedDateT, cve.publishedDate)}
            {createTextWithTitle(lastModificationDateT, cve.lastModifiedDate)}
          </Flex>
        </Box>
        <Box
          as="section"
          p={2}
          mb={2}
        >
          <Heading as="h2">
            {severityDetailsT}
          </Heading>
          <Grid mt={2} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={2}>
            {createTextWithTitle(attackVectorT, cve.cvssV3Metric.attackVector)}
            {createTextWithTitle(attackComplexityT, cve.cvssV3Metric.attackComplexity)}
            {createTextWithTitle(privilegesRequiredT, cve.cvssV3Metric.privilegesRequired)}
            {createTextWithTitle(userInteractionT, cve.cvssV3Metric.userInteraction)}
            {createTextWithTitle(scopeT, cve.cvssV3Metric.scope)}
            {createTextWithTitle(confidentialityImpactT, cve.cvssV3Metric.confidentialityImpact)}
            {createTextWithTitle(integrityImpactT, cve.cvssV3Metric.integrityImpact)}
            {createTextWithTitle(availabilityImpactT, cve.cvssV3Metric.availabilityImpact)}
          </Grid>
        </Box>
        <Box
          as="section"
          p={2}
          mb={2}
        >
          <Heading as="h2">{descriptionT}</Heading>
          <Text>{cve.description}</Text>
        </Box>
        <Box
          as="section"
          p={2}
          mb={2}
        >
          <Heading as="h2">{referencesT}</Heading>
          <List>
            {references}
          </List>
          <BulletinButtonsPanel
            cve={cve}
            direction="row"
            justifyContent="space-around"
            mt={4}
          />
        </Box>
      </>
    );
    return jsx;
  };

  useEffect(() => {
    const fetchCve = async () => {
      setIsLoading(true);

      if (state === undefined) {
        const response = await fetch(`${API_CVE}${cveId}`);
        const responseJSON = await response.json();

        const [searchedCVE] = parseCveServerResponse(responseJSON)[0];
        setContent(createContent(searchedCVE));
      } else {
        setContent(createContent(state));
      }

      setIsLoading(false);
    };

    fetchCve();
  }, []);

  return (
    <Box as="article">
      <Header title={cveId} icon={<EyeIcon />} />
      {isLoading ? <Spinner /> : content}
    </Box>
  );
};

export default CVEDetailsPage;
