import React from 'react';
import { useHistory } from 'react-router-dom';
import { CVESearchIcon } from '../../../common/Icons';

import NavButton from './NavButton';

const CVESearchButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <NavButton
      aria-label="Go to CVEBrowser Page"
      icon={<CVESearchIcon />}
      onClick={handleClick}
      {...props}
    />
  );
};

export default CVESearchButton;
