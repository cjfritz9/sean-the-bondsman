import React, { useContext } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

import aboutHero from '../../../assets/about-hero.jpg';
import mobileHero from '../../../assets/about-hero-mobile.jpg';

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
        bgImage={isGreaterThan768 ? aboutHero : mobileHero}
      >
        {!isGreaterThan768 && (
          <Heading w='100%' variant='heroText'>
            ONLINE PAYMENTS
          </Heading>
        )}
      </Stack>
    </Box>
  );
};

export default Hero;
