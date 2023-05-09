import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from '../Shared/Hero';
import TextWithVideo from './ApexMonitoring/TextWithVideo';

const ApexMonitoringPage: React.FC = () => {
  return (
    <Box>
      <Hero variant='apex' />
      <TextWithVideo />
    </Box>
  );
}

export default ApexMonitoringPage;