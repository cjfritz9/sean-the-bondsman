import React, { useState } from 'react';
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
import HeroImage from '../../../assets/topeka-capital-building.jpg';
import { useNavigate } from 'react-router';

const Hero: React.FC = () => {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const [isLessThan768] = useMediaQuery('(max-width: 768px)');

  const navigate = useNavigate();

  const handleCall = () => {
    if (isLessThan768) {
      window.open('tel:7859692735');
    } else {
      navigator.clipboard.writeText('7859692735');
      setShowCallTooltip(true);
      setTimeout(() => {
        setShowCallTooltip(false);
      }, 2500);
    }
  };

  const handleContact = () => {
    navigate('/contact-us');
  };

  return (
    <Box w='100%'>
      <Stack
        pos='absolute'
        h='720px'
        w='100%'
        zIndex={1}
        alignItems='center'
        bgColor='#00000099'
      >
        <Heading w='100%' variant='heroText' mt={['8rem', '10rem', '14rem']}>
          CALL FOR FREE BOND ADVICE
        </Heading>
        <Heading w='100%' variant='heroSubtext'>
          (785) 969-2735
        </Heading>
        <Flex pt='6rem' gap={['1rem', '2rem']}>
          {showCallTooltip ? (
            <Tooltip label='Phone Number Copied' closeOnClick={false}>
              <Button onClick={handleCall}>CALL NOW</Button>
            </Tooltip>
          ) : (
            <Button onClick={handleCall}>CALL NOW</Button>
          )}
          <Button variant='altButton' onClick={handleContact}>
            CONTACT US
          </Button>
        </Flex>
      </Stack>
      <Image
        h='720px'
        src={HeroImage}
        objectFit='cover'
        objectPosition='center center'
      />
    </Box>
  );
};

export default Hero;
