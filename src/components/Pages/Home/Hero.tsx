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
import HeroImage from '../../../assets/topeka-capital-building.jpg';
import CuffsOff from '../../../assets/handcuffs-off.jpg';
import { useNavigate } from 'react-router';
import { SiteContext } from '../../../context/SiteContext';

const Hero: React.FC = () => {
  const [showCallTooltip, setShowCallTooltip] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const navigate = useNavigate();

  const handleCall = () => {
    if (isGreaterThan768) {
      navigator.clipboard.writeText('7859692735');
      setShowCallTooltip(true);
      setTimeout(() => {
        setShowCallTooltip(false);
      }, 2500);
    } else {
      window.open('tel:7859692735');
    }
  };

  const handleContact = () => {
    navigate('/contact-us');
  };

  return (
    <Box w='100%'>
      <Stack h='720px' w='100%' zIndex={1} alignItems='center'>
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
      {/* <Image
        h='100dvh'
        w='100%'
        src={CuffsOff}
        objectFit='cover'
        objectPosition='center center'
        filter='brightness(.25)'
      /> */}
    </Box>
  );
};

export default Hero;
