import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import seanMotorcycle from '../../../assets/SeanMotorcycle.webp';

const HowWeHelp: React.FC = () => {
  return (
    <Box
      w='100dvw'
      px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      py='4rem'
      bgColor='Brand.White'
    >
      <Flex
        w='100%'
        flexDir={['column', 'column', 'column', 'row', 'row']}
        gap={['2rem', '2rem', '2rem', '4rem']}
        justifyContent='center'
        alignItems='flex-start'
      >
        <Image src={seanMotorcycle} w={['360px']} />
        <Stack
          maxW={['360px', '480px']}
          gap='2rem'
          textAlign='center'
          alignItems='center'
        >
          <Heading
            w='100%'
            variant='iwtTitle'
            textAlign={['center', 'center', 'center', 'left']}
          >
            How We Can Help
          </Heading>
          <Text
            letterSpacing='wider'
            textAlign={['center', 'center', 'center', 'left']}
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
