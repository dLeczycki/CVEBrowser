import React, { useContext } from 'react';
import { GridItem } from '@chakra-ui/react';
import { SettingsContext } from '../../context/SettingsContext';

const Footer = (layoutProps) => {
  const { suplementaryColor, whiteOnlyColor } = useContext(SettingsContext);

  return (
    <GridItem
      as="footer"
      {...layoutProps}
      lineHeight="70px"
      textAlign="center"
      bgColor={suplementaryColor}
      color={whiteOnlyColor}
    >
      &copy; Daniel Łęczycki 2021

    </GridItem>
  );
};

export default Footer;
