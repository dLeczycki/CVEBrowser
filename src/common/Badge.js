import React from 'react';
import { Badge as ChakraBadge, Text, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Badge = ({ cvssV3Metric, ...style }) => {
  const { t } = useTranslation();

  const badgeColor = {
    CRITICAL: { bgColor: 'black', color: 'white' },
    HIGH: { bgColor: 'red.500', color: 'black' },
    MEDIUM: { bgColor: 'yellow.500', color: 'black' },
    LOW: { bgColor: 'yellow.300', color: 'black' },
  };

  let badge;
  if (cvssV3Metric) {
    const { bgColor, color } = badgeColor[cvssV3Metric.baseSeverity];
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
