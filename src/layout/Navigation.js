import React from 'react';
import { GridItem, Flex, useColorModeValue } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../utils/ColorModeSwitcher';
import CVEBrowserButton from './CVEBrowserButton';
import CalculatorButton from './Calculator';
import BulletinButton from './BulletinButton';
import SettingsButton from './SettingsButton';

const Navigation = (layoutProps) => {
  const borderColor = useColorModeValue('blue.400', 'blue.700');

  return (
    <GridItem as="nav" {...layoutProps} borderRight="2px" borderColor={borderColor}>
      <Flex
        as="ul"
        flexDirection={['row', 'row', 'column']}
        justifyContent={['space-around', 'space-around', 'flex-start']}
        alignItems={['center', 'center', 'center']}
        alignContent="center"
        py={1}
        height="100%"
      >
        <ColorModeSwitcher />
        <CVEBrowserButton />
        <CalculatorButton />
        <BulletinButton />
        <SettingsButton />
      </Flex>
    </GridItem>
  );
};

export default Navigation;
