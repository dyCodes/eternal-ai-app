import { useEffect, useState } from 'react';
import { Container, ReportCard } from '@/components';
import { ChatBox } from '@/components';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Box, StyledButton } from '@/styles/report.styled';
import { useRouter } from 'next/router';
import { Preloader } from '@/components/ui/Preloader';
import { toast } from 'react-toastify';
import Link from 'next/link';

/**
 * This function is responsible for rendering the report page.
 * It retrieves the report data from local storage and displays it in various components.
 * If the report data is not available, it redirects the user to the home page.
 * It also includes a download button to generate a printable version of the report.
 *
 * @returns {JSX.Element} - The JSX element representing the report page.
 */
function Report() {
  const router = useRouter();
  const [reportData, setReportData] = useState(null);

  /**
   * This effect hook retrieves the report data from local storage and sets it in the component's state.
   * If the report data is not available, it redirects the user to the home page.
   * It also checks if all arrays in the report data are empty and displays a toast message if they are.
   */
  useEffect(() => {
    const storedReportData = localStorage.getItem('reportData');

    if (!storedReportData) {
      router.push('/');
    } else {
      const data = JSON.parse(storedReportData);
      setReportData(data);

      // Check if all arrays are empty
      const {
        possible_conditions = [],
        possible_causes = [],
        skin_care_routines = [],
        product_suggestions = [],
      } = data;

      if (
        !possible_conditions.length &&
        !possible_causes.length &&
        !skin_care_routines.length &&
        !product_suggestions.length
      ) {
        toast.info('Insufficient information. Please provide more context.');
      }
    }
  }, []);

  /**
   * This conditionally renders the preloader component if the report data is not available.
   * Otherwise, it renders the report cards and the download button.
   *
   * @returns {JSX.Element} - The JSX element representing the report page content.
   */
  if (!reportData) {
    return <Preloader />;
  }

  const {
    possible_conditions,
    possible_causes,
    skin_care_routines,
    product_suggestions,
  } = reportData;

  return (
    <Container>
      <Box>
        <ReportCard title='Possible Conditions' output={possible_conditions} />
        <ReportCard title='Possible Causes' output={possible_causes} />
        <ReportCard title='Skin Care Routines' output={skin_care_routines} />
        <ReportCard title='Product Suggestion' output={product_suggestions} />
      </Box>

      <Link href='/report/print'>
        <StyledButton className='fx-center'>
          <span>Download Report</span>
          <MdOutlineFileDownload size={22} />
        </StyledButton>
      </Link>

      <ChatBox />
    </Container>
  );
}

export default Report;
