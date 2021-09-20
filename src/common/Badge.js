import React, { useContext } from 'react';
import { Badge as ChakraBadge, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { SettingsContext } from '../context/SettingsContext';

const Badge = ({ cvssV3Metric, ...style }) => {
  const { t } = useTranslation();

  const { vulnerabilityColor } = useContext(SettingsContext);

  let badge;
  if (cvssV3Metric) {
    const { bgColor, color } = vulnerabilityColor[cvssV3Metric.baseSeverity];
    const severityT = t(`cve-search-results.${cvssV3Metric.baseSeverity.toLowerCase()}`);
    badge = (
      <ChakraBadge bgColor={bgColor} color={color}>
        {cvssV3Metric.baseScore}
        {' '}
        {severityT}
      </ChakraBadge>
    );
  } else {
    const notSuppliedT = t('cve-search-results.not-supplied');
    badge = (<ChakraBadge>{notSuppliedT}</ChakraBadge>);
  }

  return (
    <Flex alignItems="center" {...style}>
      <Text fontSize="sm" mr={2}>
        CVSS v3:
      </Text>
      {badge}
    </Flex>
  );
};

export default Badge;
