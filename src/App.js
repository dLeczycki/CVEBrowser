import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';

import SettingsProvider from './context/SettingsContext';
import NavBar from './layout/Navigation/NavBar/NavBar';
import Page from './layout/Page/Page';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <Router>
          <Grid
            minH="100vh"
            fontSize="xl"
            templateColumns={['1fr', '1fr', '70px 1fr']}
            templateRows={['1fr 140px', '1fr 140px', '1fr 70px']}
          >
            <NavBar
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
        </Router>
      </SettingsProvider>
    </ChakraProvider>
  );
}

export default App;
