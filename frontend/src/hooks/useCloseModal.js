import { useEffect } from 'react';

/**
 * A custom React hook that handles closing a modal when the escape key is pressed.
 *
 * @function useCloseModal
 * @param {Function} closeModal - A function to close the modal.
 * @returns {null} Returns null. The hook does not return any value.
 *
 * @example
 * import React from 'react';
 * import useCloseModal from './useCloseModal';
 *
 * const MyComponent = () => {
 *   const closeModal = () => {
 *     // Implement modal closing logic here
 *   };
 *
 *   useCloseModal(closeModal);
 *
 *   return (
 *     // Render modal content here
 *   );
 * };
 */
export default function useCloseModal(closeModal) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' || event.key === ' ') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return null;
}
