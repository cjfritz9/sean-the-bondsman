import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Shared/Hero';
import GetStarted from './FormsAndInfo/GetStarted';
import Information from './FormsAndInfo/Information';

const FormsAndInfoPage: React.FC = () => {
  return (
    <Box>
      <Hero variant='forms' />
      <GetStarted />
      <Information />
    </Box>
  );
};

export default FormsAndInfoPage;
