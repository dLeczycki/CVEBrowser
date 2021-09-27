import React, { useContext } from 'react';
import { GridItem, Flex } from '@chakra-ui/react';

import CVESearchButton from './NavButtons/CVESearchButton';
import CVSSCalculatorButton from './NavButtons/CVSSCalculatorButton';
import BulletinButton from './NavButtons/BulletinButton';
import SettingsButton from './NavButtons/SettingsButton';
import { SettingsContext } from '../../context/SettingsContext';

const NavBar = (layoutProps) => {
  const { primaryColor, bgColor } = useContext(SettingsContext);

  return (
    <GridItem
      as="nav"
      borderTop={['4px', '4px', '0']}
      borderRight={['0', '0', '2px']}
      borderColor={[primaryColor, primaryColor, primaryColor]}
      backgroundColor={bgColor}
      zIndex={2}
      {...layoutProps}
    >
      <Flex
        as="ul"
        flexDirection={['row', 'row', 'column']}
        justifyContent={['space-around', 'space-around', 'flex-start']}
        alignItems={['center', 'center', 'center']}
        alignContent="center"
        py={1}
        height="100%"
      >
        <CVESearchButton />
        <CVSSCalculatorButton />
        <BulletinButton />
        <SettingsButton />
      </Flex>
    </GridItem>
  );
};

export default NavBar;
