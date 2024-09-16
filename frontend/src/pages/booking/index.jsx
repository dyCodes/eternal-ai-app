import { useState } from 'react';
import { useCloseModal } from '@/hooks';
import { CaseStudyModal, Container } from '@/components';
import { BookingCard } from '@/components';
import { bookingData } from '@/constants';
import { Section } from '@/styles/bookings.styled';

/**
 * The Booking component is responsible for displaying a list of booking cards and managing the case study modal.
 *
 * @returns {JSX.Element} - The JSX representation of the Booking component.
 */
function Booking() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  /**
   * Toggles the modal's visibility state.
   */
  function toggleModal() {
    setModalIsOpen((prev) => !prev);
  }

  /**
   * Closes the modal by setting its visibility state to false.
   */
  function closeModal() {
    setModalIsOpen(false);
  }

  // Hook to close the modal when the user presses the 'Escape' or 'Space' key
  useCloseModal(closeModal);

  return (
    <Container>
      <Section>
        {bookingData.map((booking) => (
          <BookingCard
            key={booking.id}
            {...booking}
            toggleModal={toggleModal}
          />
        ))}
      </Section>
      {modalIsOpen && <CaseStudyModal onCloseModal={closeModal} />}
    </Container>
  );
}
export default Booking;
