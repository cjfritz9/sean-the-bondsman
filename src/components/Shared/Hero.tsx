import React, { useContext, useRef } from 'react';
import { Box, Button, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { SiteContext } from '../../context/SiteContext';
import { HeroProps } from '../../models/Props';

import formsHero from '../../assets/forms-hero.webp';
import formsMobile from '../../assets/forms-hero-mobile.webp';

import aboutHero from '../../assets/about-hero.webp';
import aboutMobile from '../../assets/about-hero-mobile.webp';

import jailsHero from '../../assets/jails-hero.webp';
import jailsMobile from '../../assets/jails-hero-mobile.webp';

import apexHero from '../../assets/apex-hero.webp';
import apexMobile from '../../assets/apex-hero-mobile.webp';

import contactHero from '../../assets/contact-hero.webp';
import contactMobile from '../../assets/contact-hero-mobile.webp';

import paymentHero from '../../assets/payment-hero.webp';
import paymentMobile from '../../assets/payment-hero-mobile.webp';

const Hero: React.FC<HeroProps> = ({ variant }) => {
  const { isGreaterThan768, docusignLink } = useContext<any>(SiteContext);

  const navigate = useNavigate();
  const toast = useToast();
  const toastIdRef = useRef<any>();

  const handleCall = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isGreaterThan768) {
      navigator.clipboard.writeText('7859692735');
      toastIdRef.current = toast({
        title: 'Phone Number Copied',
        variant: 'top-accent',
        status: 'info',
        duration: 5000,
        isClosable: true
      });
    } else {
      window.open('tel:7859692735');
    }
  };

  const handleNavigate = (href: string) => {
    window.open(href, '_blank');
  };

  const handleContact = () => {
    navigate('/contact-us');
  };

  if (variant === 'home') {
    return (
      <Box w='100%'>
        <Stack
          h='480px'
          w='100%'
          zIndex={1}
          alignItems='center'
          justifyContent='center'
        >
          <Heading variant='heroText'>CALL FOR FREE BOND ADVICE</Heading>
          <Heading variant='heroSubtext' onClick={handleCall}>
            (785) 969-2735
          </Heading>
          <Flex pt='6rem' gap={['1rem', '2rem']}>
            <Button onClick={handleCall}>CALL NOW</Button>
            <Button variant='altButton' onClick={handleContact}>
              CONTACT US
            </Button>
          </Flex>
        </Stack>
      </Box>
    );
  }

  if (variant === 'forms') {
    return (
      <Stack
        h='480px'
        w='100%'
        zIndex={1}
        alignItems='center'
        justifyContent='center'
        bgImage={isGreaterThan768 ? formsHero : formsMobile}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPos='center'
      >
        <Heading w='100%' variant='heroText'>
          FORMS & INFORMATION
        </Heading>
        <Flex pt='6rem' gap={['1rem', '2rem']}>
          <Button
            variant='altButton'
            onClick={() => handleNavigate(docusignLink)}
          >
            START NOW
          </Button>
        </Flex>
      </Stack>
    );
  }

  if (variant === 'jails') {
    return (
      <Box w='100%'>
        <Stack
          h='480px'
          w='100%'
          zIndex={1}
          alignItems='center'
          justifyContent='center'
          bgImage={isGreaterThan768 ? jailsHero : jailsMobile}
          bgRepeat='no-repeat'
          bgSize='cover'
        >
          <Heading w='100%' variant='heroText'>
            KANSAS JAILS INFORMATION
          </Heading>
        </Stack>
      </Box>
    );
  }

  if (variant === 'apex') {
    return (
      <Box w='100%'>
        <Stack
          h='480px'
          w='100%'
          zIndex={1}
          alignItems='center'
          justifyContent='center'
          bgImage={isGreaterThan768 ? apexHero : apexMobile}
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
  }

  if (variant === 'contact') {
    return (
      <Box w='100%'>
        <Stack
          h='480px'
          w='100%'
          zIndex={1}
          alignItems='center'
          justifyContent='center'
          bgImage={isGreaterThan768 ? contactHero : contactMobile}
          bgRepeat='no-repeat'
          bgSize='cover'
        >
          <Heading w='100%' variant='heroText'>
            CONTACT US
          </Heading>
        </Stack>
      </Box>
    );
  }

  if (variant === 'payment') {
    return (
      <Box w='100%'>
        <Stack
          h='480px'
          w='100%'
          zIndex={1}
          alignItems='center'
          justifyContent='center'
          bgImage={isGreaterThan768 ? paymentHero : paymentMobile}
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
  }

  return (
    <Box w='100%'>
      <Stack
        h='480px'
        w='100%'
        zIndex={1}
        alignItems='center'
        justifyContent='center'
        bgImage={isGreaterThan768 ? aboutHero : aboutMobile}
        bgRepeat='no-repeat'
        bgSize='cover'
        bgPos='center'
      >
        {!isGreaterThan768 && (
          <Heading w='100%' variant='heroText'>
            ABOUT
          </Heading>
        )}
      </Stack>
    </Box>
  );
};

export default Hero;
