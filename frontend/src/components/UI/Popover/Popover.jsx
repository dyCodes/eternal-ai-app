import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { BiCross } from 'react-icons/bi';
import { FaMixer } from 'react-icons/fa6';
import styles from './styles.module.css';
import { MdClose } from 'react-icons/md';

const PopoverContent = ({
  children,
  className,
  showCloseIcon,
  showArrowIcon = true,
}) => {
  return (
    <Popover.Portal>
      <Popover.Content
        className={`p-4 ${styles.PopoverContent} ${className}`}
        sideOffset={5}
      >
        {children}

        {showCloseIcon && (
          <Popover.Close className={styles.PopoverClose} aria-label='Close'>
            <MdClose />
          </Popover.Close>
        )}

        {showArrowIcon && <Popover.Arrow className={styles.PopoverArrow} />}
      </Popover.Content>
    </Popover.Portal>
  );
};

export default PopoverContent;
