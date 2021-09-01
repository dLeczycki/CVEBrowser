/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Flex, FormLabel, Select,
} from '@chakra-ui/react';
import { SettingsContext } from '../../context/SettingsContext';

const LanguageForm = () => {
  const { language, setLanguage } = useContext(SettingsContext);
  const { t, i18n } = useTranslation();

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Flex justifyContent="center" alignItems="center" pt={3}>
      <FormLabel htmlFor="language" mb="0">
        {`${t('common.language')}:`}
      </FormLabel>
      <Select value={language} onChange={handleChange}>
        <option value="en-US">English</option>
        <option value="pl-PL">Polski</option>
      </Select>
    </Flex>
  );
};

export default LanguageForm;
