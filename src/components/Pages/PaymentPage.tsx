import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Shared/Hero';
import PaymentForm from './Payment/PaymentForm';

const PaymentPage: React.FC = () => {
  return (
    <Box>
      <Hero variant='payment' />
      <PaymentForm />
    </Box>
  );
};

export default PaymentPage;
