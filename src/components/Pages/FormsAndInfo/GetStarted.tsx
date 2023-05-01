import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react';

const GetStarted: React.FC = () => {
  return (
    <Box px='1rem' py={['2rem', '3rem', '5rem']} bgColor='Brand.White'>
      <Flex
        w='100%'
        gap={['2rem', '4rem', '4rem', '8rem']}
        justifyContent='center'
        flexDir={['column', 'column', 'row']}
      >
        <Stack
          minH='360px'
          w={['100%', '100%', '480px']}
          bgColor='Brand.Celestial'
          justifyContent='center'
          alignItems='center'
        >
          <Text>Image Placeholder</Text>
        </Stack>
        <Stack gap='1rem' alignItems={['center', 'center', 'center', 'start']}>
          <Heading
            variant='iwtTitle'
            textAlign={['center', 'center', 'left']}
            fontSize='44px'
          >
            Get Started
          </Heading>
          <Text maxW='600px' textAlign={['center', 'center', 'left']}>
            Give Sean the bondsman a call to begin: He will talk to you about
            your situation, and get more details. The next step will be to fill
            out our online form. Your information will securely be sent to Sean,
            who will begin the process of bailing out your loved one. Once he
            has gone through the paperwork, he'll give you a call and he'll work
            to bail out your loved one. You'll make a payment [PAYMENT
            OPTIONS?]. Working with Sean is easy and stress-free, because he
            knows the ins and outs of doezens of jails across Kansas. Easily and
            quickly bail out your loved one from jail.
          </Text>
          <Flex gap='1rem'>
            <Button variant='altButton'>Call Now</Button>
            <Button variant='altButton' bgColor='Brand.French' color='black'>
              Go To Form
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default GetStarted;