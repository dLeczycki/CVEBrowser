import React from 'react';
import { useHistory } from 'react-router-dom';
import { CVSSCalculatorIcon } from '../../../common/Icons';

import NavButton from './NavButton';

const CVSSCalculatorButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/cvss-calculator');
  };

  return (
    <NavButton
      aria-label="Go to Calculator Page"
      icon={<CVSSCalculatorIcon />}
      onClick={handleClick}
      {...props}
    />
  );
};

export default CVSSCalculatorButton;
