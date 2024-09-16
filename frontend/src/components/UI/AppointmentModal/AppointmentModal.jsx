import { BackDrop, StyledModal } from './styles';
import { CiStar } from 'react-icons/ci';
import { FaPeopleGroup, FaPersonWalking } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { LineBar, ReportUploadBox } from '@/components';
import { appointmentHelpText } from '@/constants';
import Link from 'next/link';
import { useState } from 'react';

/**
 * AppointmentModal is a component that displays a modal with doctor's information and allows users to book an appointment.
 *
 * @param {Object} props - The component's props.
 * @param {Function} props.onCloseModal - A function to close the modal.
 * @param {Object} props.selectedDoctor - An object containing doctor's information.
 * @param {string} props.selectedDoctor.name - The doctor's name.
 * @param {number} props.selectedDoctor.ratings - The doctor's ratings.
 * @param {string} props.selectedDoctor.rate - The doctor's rate.
 * @param {number} props.selectedDoctor.experience - The doctor's experience in years.
 * @param {number} props.selectedDoctor.total_patients - The total number of patients the doctor has.
 * @param {number} props.selectedDoctor.total_reviews - The total number of reviews for the doctor.
 * @param {string} props.selectedDoctor.about - A brief description about the doctor.
 * @param {string} props.selectedDoctor.image - The URL of the doctor's image.
 *
 * @returns {JSX.Element} - The AppointmentModal component.
 */
function AppointmentModal({ onCloseModal, selectedDoctor }) {
  const [documentFile, setDocumentFile] = useState('');

  /**
   * Handles the booking of an appointment.
   * Displays a toast message if no document is uploaded, otherwise closes the modal and resets the document file.
   */
  const handleBookAppointment = () => {
    if (!documentFile) {
      toast.error('Please upload document for appointment');
      return;
    }
    toast.success('Booked successfully');
    setDocumentFile('');
    onCloseModal();
  };

  /**
   * Handles the upload of a document.
   * Updates the document file state with the name of the uploaded file.
   *
   * @param {Object} file - The uploaded file.
   */
  const handleUpload = (file) => {
    setDocumentFile(file.name);
  };

  return (
    <>
      <BackDrop onClick={onCloseModal} />
      <StyledModal $image={selectedDoctor.image}>
        <div className='heading'>
          <div className='image'></div>

          <div className='heading-info'>
            <div>
              <p className='name'>{selectedDoctor.name}</p>
              <p className='ratings'>Ratings {selectedDoctor.ratings}</p>
            </div>

            <p className='rate'>{selectedDoctor.rate}</p>
          </div>
        </div>

        <div className='metric-box'>
          <div className='metrics'>
            <div>
              <p>
                <FaPersonWalking className='experience' />
                <span>{selectedDoctor.experience} Years</span>
              </p>
              <p className='label'>Experience</p>
            </div>
            <LineBar className='line-bar' />
            <div>
              <p>
                <FaPeopleGroup className='patients' />
                <span>{selectedDoctor.total_patients}</span>
              </p>
              <p className='label'>Total Patients</p>
            </div>

            <LineBar className='line-bar' />
            <div>
              <p>
                <CiStar className='reviews' />
                <span>{selectedDoctor.total_reviews}</span>
              </p>
              <p className='label'>Reviews</p>
            </div>
          </div>
        </div>

        <div className='user-bio'>
          <nav>
            <ul>
              <li>About</li>
              <li>Schedules</li>
              <li>Experience</li>
              <li>Reviews</li>
            </ul>
          </nav>

          <div className='about'>{selectedDoctor.about}</div>

          <ReportUploadBox
            modalType='appointment'
            helpText={appointmentHelpText}
            onChange={(file) => handleUpload(file)}
            documentFile={documentFile}
          />

          <button className='confirm' onClick={handleBookAppointment}>
            Book Appointment
          </button>
        </div>
      </StyledModal>
    </>
  );
}

export default AppointmentModal;
