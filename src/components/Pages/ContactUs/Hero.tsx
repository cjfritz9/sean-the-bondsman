import React, { useContext } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

import contactHero from '../../../assets/contact-hero.jpg';
import mobileHero from '../../../assets/contact-hero-mobile.jpg';

const Hero: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);
  return (
    <Box w='100%'>
      <Stack
        h='480px'
        w='100%'
        zIndex={1}
        alignItems='center'
        justifyContent='center'
        bgImage={isGreaterThan768 ? contactHero : mobileHero}
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Heading w='100%' variant='heroText'>
          CONTACT US
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
