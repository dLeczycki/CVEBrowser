import React from 'react';
import { useHistory } from 'react-router-dom';

import { SettingsIcon } from '../../../common/Icons';
import NavButton from './NavButton';

const SettingsButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/settings');
  };

  return (
    <NavButton
      aria-label="Go to Settings Page"
      icon={<SettingsIcon />}
      marginTop={[null, null, 'auto']}
      onClick={handleClick}
      {...props}
    />
  );
};

export default SettingsButton;
