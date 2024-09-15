import { useEffect, useState } from 'react';
import { Container, ReportCard } from '@/components';
import { ChatBox } from '@/components';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Box, StyledButton } from '@/styles/report.styled';
import { useRouter } from 'next/router';
import { Preloader } from '@/components/ui/Preloader';

const Report = () => {
  const router = useRouter();
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const storedReportData = localStorage.getItem('reportData');

    if (!storedReportData) {
      router.push('/'); // Redirect to home page if no report data
    } else {
      // console.log('storedReportData: ', storedReportData);
      setReportData(JSON.parse(storedReportData));
    }
  }, []);

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

      <StyledButton className='fx-center'>
        <span>Download Report</span>
        <MdOutlineFileDownload />
      </StyledButton>

      <ChatBox />
    </Container>
  );
};

export default Report;
