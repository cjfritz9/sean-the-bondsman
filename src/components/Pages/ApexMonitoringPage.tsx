import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from './ApexMonitoring/Hero';
import TextWithVideo from './ApexMonitoring/TextWithVideo';

const ApexMonitoringPage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <TextWithVideo />
    </Box>
  );
}

export default ApexMonitoringPage;