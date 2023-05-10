import React from 'react';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box w='100%' py='.5rem' bgColor='Brand.Penn'>
      <Flex
        w='100%'
        gap='1rem'
        justifyContent='center'
        alignItems='center'
        fontFamily='inherit'
        color='Brand.White'
        fontSize={['12px','14px','16px']}
      >
        <Text _hover={{ textDecor: 'underline'}} cursor='pointer' onClick={scrollToTop} textAlign='center'>
          SEAN THE BONDSMAN
        </Text>
        <Icon as={BsFillCircleFill} fontSize='5px' />
        <Link href='/privacy' textAlign='center'>
          PRIVACY POLICY
        </Link>
        <Icon as={BsFillCircleFill} fontSize='5px' />
        <Link isExternal href='https://cjfritz.dev/contact' textAlign='center'>
          WEBSITE BY FRITZ DESIGN CO.
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
