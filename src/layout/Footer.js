import React from 'react';
import { GridItem, useColorModeValue } from '@chakra-ui/react';

const Footer = (layoutProps) => {
  const bgColor = useColorModeValue('blue.400', 'blue.700');
  const color = useColorModeValue('white', 'white');

  return (
    <GridItem
      as="footer"
      {...layoutProps}
      lineHeight="70px"
      textAlign="center"
      bgColor={bgColor}
      color={color}
    >
      &copy; Daniel Łęczycki 2021

    </GridItem>
  );
};

export default Footer;
