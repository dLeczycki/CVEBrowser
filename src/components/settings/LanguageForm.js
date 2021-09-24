/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Flex, FormLabel, Select,
} from '@chakra-ui/react';
import { SettingsContext } from '../../context/SettingsContext';
import { EN_US_LOCALES, PL_PL_LOCALES } from '../../constants/strings';

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
        {`${t('settings.language')}:`}
      </FormLabel>
      <Select value={language} onChange={handleChange}>
        <option value={EN_US_LOCALES}>English</option>
        <option value={PL_PL_LOCALES}>Polski</option>
      </Select>
    </Flex>
  );
};

export default LanguageForm;
