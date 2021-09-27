import React, { useContext } from 'react';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BulletinContext } from '../../context/BulletinContext';

import PrimaryButton from '../../common/PrimaryButton';

import DocumentGenerator from '../../helpers/documentGenerator';

const GenerateBulletinButton = ({ ...style }) => {
  const { t } = useTranslation();
  const generateBulletinT = t('bulletin-generator.generate-bulletin');
  const generatedT = t('bulletin-generator.generated');
  const bulletinIsEmptyT = t('bulletin-generator.is-empty');

  const toast = useToast();

  const { isBulletinEmpty, bulletinCveList } = useContext(BulletinContext);

  const generateBulletin = () => {
    const translations = {
      publishedDateT: t('cve-search-results.publish-date'),
      lastModificationDateT: t('cve-search-results.last-modification-date'),
      referencesT: t('cve-search-results.references'),
      descriptionT: t('cve-search-results.description'),
      severityT: {
        critical: t('cve-search-results.critical'),
        high: t('cve-search-results.high'),
        medium: t('cve-search-results.medium'),
        low: t('cve-search-results.low'),
        not_supplied: t('cve-search-results.not_supplied'),
      },
    };

    const bulletin = DocumentGenerator.generateBulletin(bulletinCveList, translations);
    const bulletinFileName = `${t('bulletin-generator.bulletin-filename')}.docx`;
    DocumentGenerator.saveDocumentToFile(bulletin, bulletinFileName);
  };

  const handleOnClick = async () => {
    if (isBulletinEmpty()) {
      toast({
        title: `${bulletinIsEmptyT}!`,
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    } else {
      await generateBulletin();
      toast({
        title: `${generatedT}!`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <PrimaryButton {...style} onClick={handleOnClick}>
      {generateBulletinT}
    </PrimaryButton>
  );
};

export default GenerateBulletinButton;
