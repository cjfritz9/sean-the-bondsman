import React from 'react';
import { Box } from '@chakra-ui/react';

const Map: React.FC = () => {
  return (
    <Box>
      <iframe
        title='Google Maps'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99178.51094509676!2d-95.74888951954482!3d39.03062966915694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf02e4daec7a29%3A0xbe2be7d06ae3a7f0!2sTopeka%2C%20KS!5e0!3m2!1sen!2sus!4v1682956504426!5m2!1sen!2sus'
        width='100%'
        height='600px'
        loading='lazy'
        allowFullScreen
      />
    </Box>
  );
};

export default Map;
