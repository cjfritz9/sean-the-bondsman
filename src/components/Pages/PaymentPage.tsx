import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from './Payment/Hero';
import PaymentForm from './Payment/PaymentForm';

const PaymentPage: React.FC = () => {
  return <Box>
    <Hero />
    <PaymentForm />
  </Box>;
};

export default PaymentPage;
