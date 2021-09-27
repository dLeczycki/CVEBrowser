import React, { useContext } from 'react';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { BulletinContext } from '../../context/BulletinContext';

import SecondaryButton from '../../common/SecondaryButton';

const GenerateBulletinButton = ({ ...style }) => {
  const { t } = useTranslation();
  const refreshbulletinT = t('bulletin-generator.refresh-bulletin');
  const refreshedT = t('bulletin-generator.refreshed');
  const errorRefreshingT = t('bulletin-generator.error-refreshing');
  const bulletinIsEmptyT = t('bulletin-generator.is-empty');

  const toast = useToast();

  const { isBulletinEmpty, refreshBulletin } = useContext(BulletinContext);

  const handleOnClick = async () => {
    if (isBulletinEmpty()) {
      toast({
        title: `${bulletinIsEmptyT}!`,
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    } else {
      try {
        await refreshBulletin();
        toast({
          title: `${refreshedT}!`,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      } catch (err) {
        toast({
          title: `${errorRefreshingT}!`,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <SecondaryButton {...style} onClick={handleOnClick}>
      {refreshbulletinT}
    </SecondaryButton>
  );
};

export default GenerateBulletinButton;
