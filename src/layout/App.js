import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Layout from './Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
