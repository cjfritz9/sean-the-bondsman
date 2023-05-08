import React, { useEffect, useState } from 'react';
import { Heading, Link, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

const PaymentSuccessPage: React.FC = () => {
  const [navTimer, setNavTimer] = useState(15);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setNavTimer((prev) => prev - 1);
    }, 1100);
    if (navTimer <= 0) {
      setNavTimer(0);
      navigate('/');
    }
    return () => clearTimeout(timer);
  }, [navTimer]);

  return (
    <Stack
      alignItems='center'
      py='4rem'
      minH='100dvh'
      minW='100dvw'
      bgColor='Brand.White'
    >
      <Stack maxW='400px' alignItems='center' gap='2rem'>
        <Heading color='Brand.Persian'>Payment Successful</Heading>
        <Text textAlign='center'>
          Thank you for your payment! Your transaction has been completed, and
          your payment has been processed successfully. We appreciate your
          business and are committed to helping you navigate the bail bond
          process with ease. To discuss next steps, please contact Sean The
          Bondsman, our experienced and knowledgeable bail bondsman who will
          guide you through the process and answer any questions you may have.
          He will be happy to assist you and provide you with the information
          you need to move forward. Once again, thank you for choosing us as
          your bail bond service provider. We are committed to providing you
          with the highest level of service and support, and we look forward to
          helping you navigate the legal system with ease.
        </Text>
        <Stack w='100%' alignItems='center'>
          <Text>{`You will be redirected in ${navTimer} seconds.`}</Text>
          <Link href='/'>Click here to be redirected now.</Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PaymentSuccessPage;
