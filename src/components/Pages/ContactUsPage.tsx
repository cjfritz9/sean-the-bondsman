import React from 'react'
import { Box }  from '@chakra-ui/react'
import Hero from './ContactUs/Hero';
import ContactForm from './ContactUs/ContactForm';

const ContactUsPage: React.FC = () => {
  return (
    <Box>
      <Hero />
      <ContactForm />
    </Box>
  );
}

export default ContactUsPage;