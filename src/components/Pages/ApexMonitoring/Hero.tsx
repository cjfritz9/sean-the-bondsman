import React, { useContext } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

import aboutHero from '../../../assets/apex-hero.jpg';
import mobileHero from '../../../assets/apex-hero-mobile.jpg';

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
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPos='center'
      >
        <Heading w='100%' variant='heroText' textShadow='0 0 4px black'>
          APEX MONITORING
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
