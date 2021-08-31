import React from 'react';
import {
  Heading, Flex, Divider,
} from '@chakra-ui/react';

const Header = ({ title, icon }) => (
  <>
    <Flex as="header" py={2} justifyContent="center" alignItems="center" fontSize="4xl">
      {icon}
      <Heading as="h1" ml={3}>
        {title}
      </Heading>
    </Flex>
    <Divider />
  </>
);

export default Header;
