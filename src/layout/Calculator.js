import React from 'react';
import { FaCalculator } from 'react-icons/fa';

import NavButton from '../utils/NavButton';

const CalculatorButton = (props) => (
  <NavButton
    aria-label="Go to Calculator Page"
    icon={<FaCalculator />}
    {...props}
  />
);

export default CalculatorButton;
