import React, { useContext } from 'react';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BulletinContext } from '../../context/BulletinContext';

import ErrorButton from '../../common/ErrorButton';

const ClearBulletinButton = ({ ...style }) => {
  const { t } = useTranslation();
  const clearButtonT = t('bulletin-generator.clear-bulletin');
  const clearedT = t('bulletin-generator.cleared');
  const bulletinIsEmptyT = t('bulletin-generator.is-empty');

  const toast = useToast();

  const { clearBulletin, isBulletinEmpty } = useContext(BulletinContext);

  const handleOnClick = () => {
    if (isBulletinEmpty()) {
      toast({
        title: `${bulletinIsEmptyT}!`,
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    } else {
      clearBulletin();
      toast({
        title: `${clearedT}!`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <ErrorButton {...style} onClick={handleOnClick}>
      {clearButtonT}
    </ErrorButton>
  );
};

export default ClearBulletinButton;
