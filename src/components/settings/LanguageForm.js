import React from 'react';
import {
  Flex, FormLabel, Select,
} from '@chakra-ui/react';

const LanguageForm = () => (
  <Flex justifyContent="center" alignItems="center" pt={3}>
    <FormLabel htmlFor="language" mb="0">
      Language
    </FormLabel>
    <Select>
      <option value="en">English</option>
      <option value="pl">Polski</option>
    </Select>
  </Flex>
);

export default LanguageForm;
