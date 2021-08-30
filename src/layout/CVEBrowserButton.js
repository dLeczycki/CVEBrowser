import React from 'react';
import { FaSearchengin } from 'react-icons/fa';

import NavButton from '../utils/NavButton';

const CVEBrowserButton = (props) => (
  <NavButton
    aria-label="Go to CVEBrowser Page"
    icon={<FaSearchengin />}
    {...props}
  />
);

export default CVEBrowserButton;
