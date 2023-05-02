import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';

const Hero: React.FC = () => {

  return (
    <Box w='100%'>
      <Stack h='720px' w='100%' zIndex={1} alignItems='center'>
        <Heading w='100%' variant='heroText' mt={['8rem', '10rem', '14rem']}>
          KANSAS JAILS INFORMATION
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
