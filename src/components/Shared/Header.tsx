import React from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  useMediaQuery,
  Text
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { GiHandcuffs } from 'react-icons/gi';
import { BsInfoSquare, BsChevronUp } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isLessThan768] = useMediaQuery(['(max-width: 768px)']);

  if (isLessThan768) {
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
      <Box w='100%' h='72px' bgColor='Brand.Penn' px='14rem'>
        <Flex h='100%' alignItems='center' justify='space-between'>
          <Flex as={ReactLink} to='/' gap='1rem' h='100%' alignItems='center'>
            <Icon as={GiHandcuffs} h='50px' w='50px' color='Brand.French' />
            <Heading fontSize='24px' color='Brand.French' fontFamily='Heebo'>
              Bail Bonds Topeka
            </Heading>
          </Flex>
          <Flex gap='2rem'>
            <Link as={ReactLink} variant='headerLink' to='/forms-and-info'>
              Forms & Info
            </Link>
            <Link as={ReactLink} variant='headerLink' to='/jail-info'>
              Jail Information
            </Link>
            <Link as={ReactLink} variant='headerLink' to='/apex'>
              Apex Monitoring
            </Link>
            <Link as={ReactLink} variant='headerLink' to='/about-us'>
              About Us
            </Link>
            <Link as={ReactLink} variant='headerLink' to='/contact-us'>
              Contact Us
            </Link>
            <Link as={ReactLink} variant='headerLink' to='/faq'>
              FAQ
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  }
};

export default Header;
