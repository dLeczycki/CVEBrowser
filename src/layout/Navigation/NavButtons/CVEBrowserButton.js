import React from 'react';
import { useHistory } from 'react-router-dom';
import { CVEBrowserIcon } from '../../../common/Icons';

import NavButton from './NavButton';

const CVEBrowserButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <NavButton
      aria-label="Go to CVEBrowser Page"
      icon={<CVEBrowserIcon />}
      onClick={handleClick}
      {...props}
    />
  );
};

export default CVEBrowserButton;
