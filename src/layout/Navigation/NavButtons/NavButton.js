import React from 'react';
import { IconButton } from '@chakra-ui/react';

const NavButton = (props) => (
  <IconButton
    size="lg"
    fontSize={['3xl', '3xl', 'xl', 'xl', '2xl']}
    marginTop={[null, null, '1em']}
    variant="ghost"
    color="current"
    {...props}
  />
);

export default NavButton;
