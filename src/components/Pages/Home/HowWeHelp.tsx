import React, { useContext } from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const HowWeHelp: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  return (
    <Box
      w='100dvw'
      px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      py='4rem'
      bgColor='Brand.White'
    >
      <Flex
        as={isGreaterThan768 ? Flex : Stack}
        alignItems='center'
        justifyContent='center'
        gap={['2rem', '4rem', '4rem', '8rem']}
      >
        <Stack
          minH={['240px', '360px']}
          minW={['360px', '360px', '360px', '480px']}
          alignItems='center'
          justifyContent='center'
          bgColor='Brand.Rose'
          borderRadius='4px'
        >
          <Text>IMAGE/VIDEO PLACEHOLDER</Text>
        </Stack>
        <Stack maxW={['360px', '480px']} gap='2rem' justifyContent='center'>
          <Heading
            variant='iwtTitle'
            textAlign={isGreaterThan768 ? 'left' : 'center'}
          >
            How We Can Help You Or Your Family
          </Heading>
          <Text
            letterSpacing='wider'
            textAlign={isGreaterThan768 ? 'left' : 'center'}
          >
            We know this can be a stressful and confusing time. We will provide
            you with quick, reliable advice and affordable bail bonds. You can
            call us any time of day, so don't hesitate to contact us. We are
            happy to provide you with free information and answer any questions
            you have about the process. With over 15 years of experience you can
            rely on us in this hectic time.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HowWeHelp;
