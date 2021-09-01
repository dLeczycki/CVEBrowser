import React from 'react';
import { GridItem, Flex, useColorModeValue } from '@chakra-ui/react';

import CVEBrowserButton from './NavButtons/CVEBrowserButton';
import CVSSCalculatorButton from './NavButtons/CVSSCalculatorButton';
import BulletinButton from './NavButtons/BulletinButton';
import SettingsButton from './NavButtons/SettingsButton';

const NavBar = (layoutProps) => {
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
        <CVEBrowserButton />
        <CVSSCalculatorButton />
        <BulletinButton />
        <SettingsButton />
      </Flex>
    </GridItem>
  );
};

export default NavBar;
