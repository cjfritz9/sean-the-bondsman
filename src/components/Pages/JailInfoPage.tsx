import React from 'react';
import { Box } from '@chakra-ui/react';
import JailInfoWrapper from './JailInfo/JailInfoWrapper';
import Hero from '../Shared/Hero';

const JailInfoPage: React.FC = () => {
  return (
    <Box>
      <Hero variant='jails' />
      <JailInfoWrapper />
    </Box>
  );
};

export default JailInfoPage;
