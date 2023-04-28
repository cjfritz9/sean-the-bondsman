import React from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const FormsAndInfoPage: React.FC = () => {
  return (
    <Box w='100dvw' px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}>
      <Flex>
        <Stack
          h='360px'
          w='360px'
          alignItems='center'
          justifyContent='center'
          bgColor='Brand.Rose'
        >
          <Text>IMAGE/VIDEO PLACEHOLDER</Text>
        </Stack>
      </Flex>
      <Stack>
        <Heading variant='heroSubtext'>
          How We Can Help You Or Your Family
        </Heading>
        <Text>
          We know this can be a stressful and confusing time. We will provide
          you with quick, reliable advice and affordable bail bonds. You can
          call us any time of day, so don't hesitate to contact us. We are happy
          to provide you with free information and answer any questions you have
          about the process. With over 15 years of experience you can rely on us
          in this hectic time.
        </Text>
      </Stack>
    </Box>
  );
};

export default FormsAndInfoPage;
