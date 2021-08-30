import React from 'react';
import {
  Grid,
} from '@chakra-ui/react';

import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

const Layout = () => (
  <Grid
    minH="100vh"
    fontSize="xl"
    templateColumns={['1fr', '1fr', '70px 1fr']}
    templateRows={['1fr 140px', '1fr 140px', '1fr 70px']}
  >
    <Navigation
      rowStart={[null, null, 1]}
      position={['fixed', 'fixed', 'static']}
      bottom={[0, 0, 'unset']}
      left={[0, 0, 'unset']}
      width="100%"
      height={['70px', '70px', '100%']}
    />
    <Page rowStart={1} />
    <Footer colStart={1} colEnd={3} rowStart={2} height="70px" />
  </Grid>
);

export default Layout;
