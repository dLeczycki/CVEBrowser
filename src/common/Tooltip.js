import React, { useRef } from 'react';
import {
  Center, Tooltip as ChakraTooltip, useDisclosure, useOutsideClick,
} from '@chakra-ui/react';
import { InfoIcon } from './Icons';

const Tooltip = ({ title, message }) => {
  const tooltip = useRef();
  const { isOpen, onClose, onToggle } = useDisclosure();
  useOutsideClick({
    ref: tooltip,
    handler: () => onClose(),
  });

  return (
    <ChakraTooltip
      label={message}
      fontSize="md"
      isOpen={isOpen}
      hasArrow
      ref={tooltip}
    >
      <Center
        as="strong"
        textAlign="center"
      >
        {title}
        <InfoIcon
          ml={2}
          onClick={onToggle}
          cursor="pointer"
        />
      </Center>
    </ChakraTooltip>
  );
};

export default Tooltip;
