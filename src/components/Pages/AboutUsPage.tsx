import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from '../Shared/Hero';
import About from './AboutUs/About';

const AboutUsPage: React.FC = () => {

  return (
    <Box>
      <Hero variant='about' />
      <About />
    </Box>
  );
}

export default AboutUsPage;