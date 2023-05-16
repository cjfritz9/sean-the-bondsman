import React, { useContext, useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const GetStarted: React.FC = () => {
  const { docusignLink, isGreaterThan768 } = useContext<any>(SiteContext);

  const toast = useToast();
  const toastIdRef = useRef<any>();

  const handleNav = () => {
    window.open(docusignLink, '_blank');
  };

  const handleCall = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isGreaterThan768) {
      navigator.clipboard.writeText('7859692735');
      toastIdRef.current = toast({
        title: 'Phone Number Copied',
        variant: 'top-accent',
        status: 'info',
        duration: 5000,
        isClosable: true
      });
    } else {
      window.open('tel:7859692735');
    }
  };

  return (
    <Box px='1rem' py={['2rem', '3rem', '5rem']} bgColor='Brand.White'>
      <Stack
        w='100%'
        gap={['2rem', '4rem', '4rem', '8rem']}
        justifyContent='center'
        flexDir={['column', 'column', 'row']}
      >
        <Stack gap='1rem' alignItems='center'>
          <Heading
            variant='iwtTitle'
            textAlign={['center', 'center', 'left']}
            fontSize='44px'
          >
            Get Started
          </Heading>
          <Text maxW='600px' textAlign='center'>
            Give Sean the bondsman a call to begin: He will talk to you about
            your situation, and get more details. The next step will be to fill
            out our online form. Your information will securely be sent to Sean,
            who will begin the process of bailing out your loved one. Once he
            has gone through the paperwork, he'll give you a call and he'll work
            to bail out your loved one. You'll make a payment through our
            payment portal. Working with Sean is easy and stress-free, because
            he knows the ins and outs of dozens of jails across Kansas. Easily
            and quickly bail out your loved one from jail.
          </Text>
          <Flex gap='1rem'>
            <Button variant='altButton' onClick={handleCall}>Call Now</Button>
            <Button
              variant='altButton'
              bgColor='Brand.French'
              color='black'
              onClick={handleNav}
            >
              Go To Form
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};

export default GetStarted;
