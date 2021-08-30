import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

import NavButton from '../utils/NavButton';

const BulletinButton = (props) => (
  <NavButton
    aria-label="Go to Bulletin Page"
    icon={<FaFileAlt />}
    {...props}
  />
);

export default BulletinButton;
