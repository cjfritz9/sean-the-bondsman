import React, { useContext } from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';

import paymentHero from '../../../assets/payment-hero.jpg';
import mobileHero from '../../../assets/payment-hero-mobile.jpg';
import { SiteContext } from '../../../context/SiteContext';

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
        bgImage={isGreaterThan768 ? paymentHero : mobileHero}
        bgPos='center center'
        bgRepeat='no-repeat'
        bgSize='cover'
      >
        <Heading w='100%' variant='heroText'>
          ONLINE PAYMENTS
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
