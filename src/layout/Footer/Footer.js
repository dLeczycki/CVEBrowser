import React, { useContext } from 'react';
import { GridItem } from '@chakra-ui/react';
import { ThemeContext } from '../../context/ThemeContext';

const Footer = (layoutProps) => {
  const { suplementaryColor, whiteOnly } = useContext(ThemeContext);

  return (
    <GridItem
      as="footer"
      {...layoutProps}
      lineHeight="70px"
      textAlign="center"
      bgColor={suplementaryColor}
      color={whiteOnly}
    >
      &copy; Daniel Łęczycki 2021

    </GridItem>
  );
};

export default Footer;
