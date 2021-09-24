import React, { createContext, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { BULLETIN } from '../constants/strings';

export const BulletinContext = createContext();

const BulletinProvider = ({ children }) => {
  const [bulletinCveList, setBulletinCveList] = useState([]);

  const addCveToBulletin = (newCve) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === newCve.cveId);
    if (index === -1) {
      setBulletinCveList((prev) => {
        const newBulletinCveList = [...prev, newCve];
        return newBulletinCveList;
      });
      return true;
    }
    return false;
  };

  const removeCveFromBulletin = (cveToRemove) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === cveToRemove.cveId);

    if (index !== -1) {
      setBulletinCveList((prev) => {
        const newBulletinCveList = prev.filter((cve) => cve.cveId !== cveToRemove.cveId);
        return newBulletinCveList;
      });
      return true;
    }

    return false;
  };

  const clearBulletin = () => {
    setBulletinCveList([]);
  };

  const isBulletinEmpty = () => {
    if (bulletinCveList.length === 0) return true;
    return false;
  };

  const isCveInBulletin = (newCve) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === newCve.cveId);
    if (index === -1) return false;
    return true;
  };

  useLocalStorage(bulletinCveList, setBulletinCveList, BULLETIN, []);

  return (
    <BulletinContext.Provider
      value={{
        bulletinCveList,
        addCveToBulletin,
        removeCveFromBulletin,
        clearBulletin,
        isCveInBulletin,
        isBulletinEmpty,
      }}
    >
      {children}
    </BulletinContext.Provider>
  );
};

export default BulletinProvider;
