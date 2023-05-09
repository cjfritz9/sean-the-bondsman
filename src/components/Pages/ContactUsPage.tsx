import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../Shared/Hero';
import ContactForm from './ContactUs/ContactForm';

const ContactUsPage: React.FC = () => {
  return (
    <Box>
      <Hero variant='contact' />
      <ContactForm />
    </Box>
  );
};

export default ContactUsPage;
