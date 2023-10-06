import React from 'react';
import { Box } from '@chakra-ui/react';

const Map: React.FC = () => {
  return (
    <Box>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41691.339712829176!2d-95.72218749576616!3d39.04433520985244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf0381425eb6eb%3A0x112f14222fa48576!2sSean%20The%20Bondsman!5e0!3m2!1sen!2sus!4v1696613254927!5m2!1sen!2sus'
        width='100%'
        height='600px'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Box>
  );
};

export default Map;
