import React, { createContext, useEffect, useState } from 'react';

import { saveInLocalStorage, getJSONFromLocalStorage, BULLETIN } from '../helpers/localStorage';

export const BulletinContext = createContext();

const BulletinProvider = ({ children }) => {
  const [bulletinCveList, setBulletinCveList] = useState([]);

  const saveBulletinInLS = (newBulletin) => {
    saveInLocalStorage(BULLETIN, newBulletin);
  };

  const addCveToBulletin = (newCve) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === newCve.cveId);
    if (index === -1) {
      setBulletinCveList((prev) => {
        const newBulletinCveList = [...prev, newCve];
        saveBulletinInLS(newBulletinCveList);
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
        saveBulletinInLS(newBulletinCveList);
        return newBulletinCveList;
      });
      return true;
    }

    return false;
  };

  const clearBulletin = () => {
    setBulletinCveList([]);
    saveBulletinInLS([]);
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

  useEffect(() => {
    const bulletinCveListInLS = getJSONFromLocalStorage(BULLETIN);
    if (!Array.isArray(bulletinCveListInLS)) setBulletinCveList([]);
    else setBulletinCveList(bulletinCveListInLS);
  }, []);

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
