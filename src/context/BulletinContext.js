import React, { createContext, useState } from 'react';

export const BulletinContext = createContext();

const BulletinProvider = ({ children }) => {
  const [bulletinCveList, setBulletinCveList] = useState([]);

  const addCveToBulletin = (newCve) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === newCve.cveId);
    if (index === -1) {
      setBulletinCveList((prev) => [...prev, newCve]);
      return true;
    }
    return false;
  };

  const removeCveFromBulletin = (cveToRemove) => {
    const index = bulletinCveList.findIndex((cve) => cve.cveId === cveToRemove.cveId);

    if (index !== -1) {
      setBulletinCveList((prev) => prev.filter((cve) => cve.cveId !== cveToRemove.cveId));
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
