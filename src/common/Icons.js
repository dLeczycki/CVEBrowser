import React from 'react';
import {
  FaMoon, FaSun, FaFileAlt, FaSearchengin, FaCog, FaCalculator,
} from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

export const LightModeIcon = (props) => (<Icon as={FaSun} {...props} />);
export const DarkModeIcon = (props) => (<Icon as={FaMoon} {...props} />);
export const CVEBrowserIcon = (props) => (<Icon as={FaSearchengin} {...props} />);
export const SettingsIcon = (props) => (<Icon as={FaCog} {...props} />);
export const BulletinIcon = (props) => (<Icon as={FaFileAlt} {...props} />);
export const CVSSCalculatorIcon = (props) => (<Icon as={FaCalculator} {...props} />);
