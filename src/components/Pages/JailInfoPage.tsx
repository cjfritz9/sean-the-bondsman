import React from 'react';
import { Box } from '@chakra-ui/react';
import JailInfoWrapper from './JailInfo/JailInfoWrapper';
import Hero from './JailInfo/Hero';

const JailInfoPage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <JailInfoWrapper />
    </Box>
  );
};

export default JailInfoPage;
