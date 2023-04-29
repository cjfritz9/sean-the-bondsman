import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  useMediaQuery,
  Text,
  Image
} from '@chakra-ui/react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoSquare, BsChevronUp } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import logoSM from '../../assets/logo-sm.webp'
import { SiteContext } from '../../context/SiteContext';

const Header: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);


  const location = useLocation();

  if (!isGreaterThan768) {
    return (
      <Box
        pos='fixed'
        bottom='0px'
        w='100%'
        h='112px'
        bgColor='Brand.Penn'
        px='1.5rem'
        zIndex={2}
      >
        <Flex
          h='100%'
          w='100%'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack alignItems='center'>
            <Icon as={AiFillHome} h='40px' w='40px' color='Brand.French' />
            <Text color='Brand.French'>home</Text>
          </Stack>
          <Divider borderColor='Brand.Persian' orientation='vertical' />
          <Stack alignItems='center'>
            <Icon as={FaWpforms} h='40px' w='40px' color='Brand.French' />
            <Text color='Brand.French'>forms</Text>
          </Stack>
          <Divider borderColor='Brand.Persian' orientation='vertical' />
          <Stack alignItems='center'>
            <Icon as={BsInfoSquare} h='40px' w='40px' color='Brand.French' />
            <Text color='Brand.French'>info</Text>
          </Stack>
          <Divider borderColor='Brand.Persian' orientation='vertical' />
          <Stack alignItems='center'>
            <Icon as={BsChevronUp} h='40px' w='40px' color='Brand.French' />
            <Text color='Brand.French'>more</Text>
          </Stack>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box w='100%' h='80px' bgColor='Brand.Penn' px={['1rem','1rem','2rem','4rem','8rem','14rem']}>
        <Flex h='100%' alignItems='center' justify='space-between'>
          <Flex as={ReactLink} to='/' gap='1rem' h='100%' alignItems='center'>
            <Image src={logoSM} h='72px' />
            <Heading fontSize='24px' color='Brand.French' fontFamily='Heebo'>
              Topeka Bail Bonds
            </Heading>
          </Flex>
          <Flex gap='2rem'>
            <Link as={ReactLink} variant={location.pathname === '/forms-and-info' ? 'headerLinkSelected' : 'headerLink'} to='/forms-and-info'>
              Forms & Info
            </Link>
            <Link as={ReactLink} variant={location.pathname === '/jail-info' ? 'headerLinkSelected' : 'headerLink'} to='/jail-info'>
              Jail Information
            </Link>
            <Link as={ReactLink} variant={location.pathname === '/apex' ? 'headerLinkSelected' : 'headerLink'} to='/apex'>
              Apex Monitoring
            </Link>
            <Link as={ReactLink} variant={location.pathname === '/about-us' ? 'headerLinkSelected' : 'headerLink'} to='/about-us'>
              About Us
            </Link>
            <Link as={ReactLink} variant={location.pathname === '/contact-us' ? 'headerLinkSelected' : 'headerLink'} to='/contact-us'>
              Contact Us
            </Link>
            <Link as={ReactLink} variant={location.pathname === '/faq' ? 'headerLinkSelected' : 'headerLink'} to='/faq'>
              FAQ
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  }
};

export default Header;
