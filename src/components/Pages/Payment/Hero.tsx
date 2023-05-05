import React from 'react';
import { Box, Heading, Stack } from '@chakra-ui/react';

const Hero: React.FC = () => {
  return (
    <Box w='100%'>
      <Stack
        h='480px'
        w='100%'
        zIndex={1}
        alignItems='center'
        justifyContent='center'
      >
        <Heading w='100%' variant='heroText'>
          ONLINE PAYMENTS
        </Heading>
      </Stack>
    </Box>
  );
};

export default Hero;
