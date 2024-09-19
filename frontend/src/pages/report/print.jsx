import { useEffect, useState } from 'react';
import { Container, Photos, ReportInfoWrapper } from '@/components';
import { ReportHeader } from '@/styles/prinReport.styled';
import { SiGooglegemini } from 'react-icons/si';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/context/AuthContext';

/**
 * This function is responsible for rendering the printable report page.
 * It retrieves the report data, user data, and images from local storage,
 * and displays them in a formatted manner.
 *
 * @returns {JSX.Element} - The JSX element representing the printable report page.
 */
function PrintReport() {
  const router = useRouter();
  const [reportData, setReportData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [reportImages, setReportImages] = useState(null);
  const { user } = useAuthContext();

  /**
   * This effect hook retrieves the report data, user data, and images from local storage.
   * If no report data is found, it redirects the user to the home page.
   */
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const storedReportData = localStorage.getItem('reportData');
    const storedReportImages = localStorage.getItem('reportImages');

    if (!storedUserData || !storedReportData) {
      router.push('/'); // Redirect to home page if no report data
    } else {
      const userData = JSON.parse(storedUserData);
      const reportData = JSON.parse(storedReportData);
      const reportImages = JSON.parse(storedReportImages);
      setUserData(userData);
      setReportData(reportData);
      setReportImages(reportImages);
    }
  }, []);

  /**
   * This effect hook triggers the print functionality when the report data and user data are available.
   */
  useEffect(() => {
    if (reportData && userData) {
      // window.print();
    }
  }, [reportData]);

  return (
    <Container>
      <ReportHeader>
        <div>
          <h5>Patient</h5>
          <p>{user?.name || 'N/A'}</p>
        </div>

        <div>
          <h5>Date</h5>
          <p>{userData?.date || 'N/A'}</p>
        </div>

        <div>
          <h5>Generated & Compiled With</h5>
          <p className='gemini'>
            <SiGooglegemini />
            <Link
              href='https://gemini.google.com/'
              target='_blank'
              className='link'
            >
              Gemini
            </Link>
          </p>
        </div>
      </ReportHeader>

      {/* Photos */}
      {reportImages?.length ? (
        <ReportInfoWrapper title='Photo'>
          <div className='flex items-center gap-2 flex-wrap'>
            {reportImages.map((image, index) => (
              <img
                key={index}
                className='block w-[48%] md:w-full max-w-[230px]'
                src={image}
                alt='skin_photo'
              />
            ))}
          </div>
        </ReportInfoWrapper>
      ) : null}

      {/* Symptoms */}
      <ReportInfoWrapper title='Symptoms'>
        <div className='paragraph-box'>
          <h6>Nature of Symptoms</h6>
          <p>{userData?.nature || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Appearance</h6>
          <p>{userData?.appearance || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Duration</h6>
          <p>{userData?.duraion || 'N/A'}</p>
        </div>

        <div className='paragraph-box'>
          <h6>Changes Over Time</h6>
          <p>{userData?.changes || 'N/A'}</p>
        </div>
      </ReportInfoWrapper>

      {/* Personal Information */}
      <ReportInfoWrapper title='Personal Information'>
        <div className='info-grid'>
          <div className='paragraph-box'>
            <h6>Age</h6>
            <p>{userData?.age || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Gender</h6>
            <p>{userData?.gender || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Allergies</h6>
            <p>{userData?.allergies || 'N/A'}</p>
          </div>
          <div className='paragraph-box'>
            <h6>Medications</h6>
            <p>{userData?.medications || 'N/A'}</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Lifestyle */}
      <ReportInfoWrapper title='Lifestyle'>
        <div className='info-grid'>
          <div className='paragraph-box'>
            <h6>Sun Exposure</h6>
            <p>{userData?.sun_exposure || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Dietary Habits</h6>
            <p>{userData?.dietary_habit || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Occupational hazards</h6>
            <p>{userData?.location || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Recent Travels</h6>
            <p>{userData?.recent_travels || 'N/A'}</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* Area of localization */}
      <ReportInfoWrapper title='Area of localization'>
        <div className='info-grid'>
          <div className='paragraph-box'>
            <h6>Location</h6>
            <p>{userData?.location || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Intensity</h6>
            <p>{userData?.intensity || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Spread</h6>
            <p>{userData?.spread || 'N/A'}</p>
          </div>

          <div className='paragraph-box'>
            <h6>Trigger</h6>
            <p>{userData?.trigger || 'N/A'}</p>
          </div>
        </div>
      </ReportInfoWrapper>

      {/* AI Generated Notes */}
      <ReportInfoWrapper title='AI Generated Notes'>
        <div className='paragraph-box'>
          <h6>Possible Causes</h6>
          <p>
            {reportData?.possible_causes.length &&
              reportData?.possible_causes.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                  {item.likeliness && (
                    <span className='text-[14px] ml-2 text-gray-500'>
                      {item.likeliness}%
                    </span>
                  )}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Skin Care Routine</h6>
          <p>
            {reportData?.skin_care_routines.length &&
              reportData?.skin_care_routines.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Possible Conditions</h6>
          <p>
            {reportData?.possible_conditions.length &&
              reportData?.possible_conditions.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                  {item.likeliness && (
                    <span className='text-[14px] ml-2 text-gray-500'>
                      {item.likeliness}%
                    </span>
                  )}
                </li>
              ))}
          </p>
        </div>
        <div className='paragraph-box'>
          <h6>Product Suggestions</h6>
          <p>
            {reportData?.product_suggestions.length &&
              reportData?.product_suggestions.map((item, index) => (
                <li key={index} className='item'>
                  {item.text}
                </li>
              ))}
          </p>
        </div>
      </ReportInfoWrapper>

      {/* Additional Notes */}
      <ReportInfoWrapper title='Additional Notes'>
        <p>{reportData?.note || 'N/A'}</p>
      </ReportInfoWrapper>
    </Container>
  );
}
export default PrintReport;
