import React, { useContext } from 'react';
import { GridItem } from '@chakra-ui/react';
import { SettingsContext } from '../context/SettingsContext';

const Footer = (layoutProps) => {
  const { primaryColor, whiteOnlyColor } = useContext(SettingsContext);

  return (
    <GridItem
      as="footer"
      {...layoutProps}
      lineHeight="70px"
      textAlign="center"
      bgColor={primaryColor}
      color={whiteOnlyColor}
    >
      &copy; Daniel Łęczycki 2021

    </GridItem>
  );
};

export default Footer;
