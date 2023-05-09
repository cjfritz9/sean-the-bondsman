import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const CoverageBanner: React.FC = () => {
  return (
    <Box w='100dvw' bgColor='black' py='1.5rem'>
      <Heading variant='heroText' fontSize='28px' fontFamily='inherit'>
        WE COVER MORE THAN JUST TOPEKA - CALL TO SEE IF WE CAN HELP YOU!
      </Heading>
    </Box>
  );
};

export default CoverageBanner;
