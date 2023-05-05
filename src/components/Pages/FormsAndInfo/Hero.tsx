import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tooltip,
  useMediaQuery
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

import formsHero from '../../../assets/forms-hero.jpg';
import mobileHero from '../../../assets/forms-hero-mobile.jpg';

const Hero: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const handleNavigate = () => {
    window.open(
      'https://www.docusign.com/products/electronic-signature/features/powerforms',
      '_blank'
    );
  };

  return (
    <Stack
      h='480px'
      w='100%'
      zIndex={1}
      alignItems='center'
      justifyContent='center'
      bgImage={isGreaterThan768 ? formsHero : mobileHero}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPos='center'
    >
      <Heading w='100%' variant='heroText'>
        FORMS & INFORMATION
      </Heading>
      <Flex pt='6rem' gap={['1rem', '2rem']}>
        <Button variant='altButton' onClick={handleNavigate}>
          START NOW
        </Button>
      </Flex>
    </Stack>
  );
};

export default Hero;
