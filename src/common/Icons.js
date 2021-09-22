import React from 'react';
import {
  FaMoon,
  FaSun,
  FaFileAlt,
  FaEye,
  FaSearchengin,
  FaCog,
  FaCalculator,
  FaExclamationTriangle,
  FaInfoCircle,
  FaPlus,
  FaTimes,
  FaBug,
  FaBan,
} from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

export const LightModeIcon = (props) => (<Icon as={FaSun} {...props} />);
export const DarkModeIcon = (props) => (<Icon as={FaMoon} {...props} />);
export const CVESearchIcon = (props) => (<Icon as={FaSearchengin} {...props} />);
export const SettingsIcon = (props) => (<Icon as={FaCog} {...props} />);
export const BulletinIcon = (props) => (<Icon as={FaFileAlt} {...props} />);
export const CVSSCalculatorIcon = (props) => (<Icon as={FaCalculator} {...props} />);
export const ErrorIcon = (props) => (<Icon as={FaExclamationTriangle} {...props} />);
export const InfoIcon = (props) => (<Icon as={FaInfoCircle} {...props} />);
export const PlusIcon = (props) => (<Icon as={FaPlus} {...props} />);
export const TimesIcon = (props) => (<Icon as={FaTimes} {...props} />);
export const VulnerabilityIcon = (props) => (<Icon as={FaBug} {...props} />);
export const BanIcon = (props) => (<Icon as={FaBan} {...props} />);
export const EyeIcon = (props) => (<Icon as={FaEye} {...props} />);
