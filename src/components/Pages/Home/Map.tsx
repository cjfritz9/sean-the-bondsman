import React from 'react';
import { Box } from '@chakra-ui/react';

const Map: React.FC = () => {
  return (
    <Box>
      <iframe
        title='Sean the Bondsman'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.6788753966193!2d-95.67556839999999!3d39.04544059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bf0310597a1331%3A0xbded8ee41d478868!2s1000%20S%20Kansas%20Ave%20Suite%20103%2C%20Topeka%2C%20KS%2066612!5e0!3m2!1sen!2sus!4v1684616348856!5m2!1sen!2sus'
        width='100%'
        height='600px'
        loading='lazy'
        allowFullScreen
      />
    </Box>
  );
};

export default Map;
