import React, { useState } from 'react';
import { Box, Flex, Icon, Text, Tooltip } from '@chakra-ui/react';
import { BiLinkExternal } from 'react-icons/bi';

const Announcement: React.FC = () => {
  return (
    <Box
      _hover={{ filter: 'brightness(1.2)' }}
      h='40px'
      bgColor='Brand.Rose'
      cursor='pointer'
    >
      <Tooltip label='This will link to DocuSign'>
        <Flex gap='.5rem' h='100%' alignItems='center' justifyContent='center'>
          <Text fontFamily='heebo' fontWeight='bold'>
            GET STARTED NOW
          </Text>
          <Icon as={BiLinkExternal} h='20px' w='20px' />
        </Flex>
      </Tooltip>
    </Box>
  );
};

export default Announcement;
