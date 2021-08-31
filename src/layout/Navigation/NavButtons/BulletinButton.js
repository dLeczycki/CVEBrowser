import React from 'react';
import { useHistory } from 'react-router-dom';
import { BulletinIcon } from '../../../common/Icons';

import NavButton from './NavButton';

const BulletinButton = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/bulletin-generator');
  };

  return (
    <NavButton
      aria-label="Go to Bulletin Page"
      icon={<BulletinIcon />}
      onClick={handleClick}
      {...props}
    />
  );
};

export default BulletinButton;
