import { Card } from './styles';

/**
 * A function to render a doctor's card with their information.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.id - The unique identifier of the doctor.
 * @param {string} props.name - The name of the doctor.
 * @param {string} props.image - The URL of the doctor's image.
 * @param {number} props.rate - The doctor's rating.
 * @param {number} props.experience - The doctor's years of experience.
 * @param {number} props.ratings - The total number of ratings for the doctor.
 * @param {function} props.toggleModal - A function to toggle the modal for the doctor's details.
 *
 * @returns {JSX.Element} - A JSX element representing the doctor's card.
 */
function DoctorCard({
  id,
  name,
  image,
  rate,
  experience,
  ratings,
  toggleModal,
}) {
  return (
    <Card $image={image} onClick={() => toggleModal(id)} tabIndex={0}>
      <div className='image-banner' />
      <div className='doctor-info'>
        <p className='rate'>{rate}</p>
        <p className='name'>{name}</p>
        <div>
          <p>
            <span>{experience} Years Experience</span>
            <span className='bar'>|</span>
            <span>Ratings {ratings}</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
export default DoctorCard;
