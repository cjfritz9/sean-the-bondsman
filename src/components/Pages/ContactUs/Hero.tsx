import React, { useContext } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { SiteContext } from '../../../context/SiteContext';
import contactHero from '../../../assets/contact-hero.jpg';
import mobileHero from '../../../assets/contact-hero-mobile.jpg';

const Hero: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const navigate = useNavigate();

  const handleNavigate = () => {
    window.open(
      'https://www.docusign.com/products/electronic-signature/features/powerforms',
      '_blank'
    );
  };

  return (
    <Box w='100%' bgImage={isGreaterThan768 ? contactHero : mobileHero}>
      <Stack h='720px' w='100%' zIndex={1} alignItems='center'>
        <Heading w='100%' variant='heroText' mt={['8rem', '10rem', '14rem']}>
          CONTACT US
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
