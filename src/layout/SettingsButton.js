import React from 'react';
import { FaCog } from 'react-icons/fa';

import NavButton from '../utils/NavButton';

const SettingsButton = (props) => (
  <NavButton
    aria-label="Go to Settings Page"
    icon={<FaCog />}
    marginTop={[null, null, 'auto']}
    {...props}
  />
);

export default SettingsButton;
