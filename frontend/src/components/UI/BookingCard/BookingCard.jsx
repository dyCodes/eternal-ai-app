import Link from 'next/link';
import { Card } from './styles';
import { Calendar, World } from '@/components';

/**
 * A function to render a booking card component.
 * Depending on the `id` prop, it renders a different type of card.
 * If `id` is 'book', it renders a card with a link to the booking appointments page.
 * Otherwise, it renders a card with an onClick event handler that triggers the `toggleModal` function.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.id - The unique identifier for the card.
 * @param {string} props.title - The title of the card.
 * @param {string} props.caption - The caption of the card.
 * @param {string} props.description - The description of the card.
 * @param {string} props.image - The image URL for the card.
 * @param {function} props.toggleModal - A function to toggle the modal.
 *
 * @returns {JSX.Element} - The rendered booking card component.
 */
function BookingCard({ id, title, caption, description, image, toggleModal }) {
  return (
    <>
      {id === 'book' ? (
        <Link href='/booking/appointments'>
          <Card $id={id} $image={image}>
            <div className='info-box'>
              <h5>{title}</h5>
              <div className='info-details'>
                <div className='svg-box'>
                  <Calendar />
                </div>
                <div>
                  <p className='caption'>{caption}</p>
                  <p className='description'>{description}</p>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ) : (
        <Card $id={id} $image={image} onClick={toggleModal}>
          <div className='info-box'>
            <h5>{title}</h5>
            <div className='info-details'>
              <div className='svg-box'>
                <World />
              </div>
              <div>
                <p className='caption'>{caption}</p>
                <p className='description'>{description}</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

export default BookingCard;
