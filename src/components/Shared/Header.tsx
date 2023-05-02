import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { Link as ReactLink, useLocation, useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoSquare, BsChevronUp } from 'react-icons/bs';
import { FaWpforms } from 'react-icons/fa';
import { MdMenu, MdClose } from 'react-icons/md';
import logoSM from '../../assets/logo-sm.webp';
import { SiteContext } from '../../context/SiteContext';

const Header: React.FC = () => {
  const { isGreaterThan768, isMenuOpen, setIsMenuOpen } =
    useContext<any>(SiteContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [navigate]);

  if (isGreaterThan768) {
    return (
      <Box
        w='100%'
        h='80px'
        bgColor='Brand.Penn'
        px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      >
        <Flex h='100%' alignItems='center' justify='space-between'>
          <Flex as={ReactLink} to='/' gap='1rem' h='100%' alignItems='center'>
            <Image src={logoSM} h='72px' />
            <Heading fontSize='24px' color='Brand.French' fontFamily='Heebo'>
              Topeka Bail Bonds
            </Heading>
          </Flex>
          <Flex gap='2rem'>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/forms-and-info'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/forms-and-info'
            >
              Forms & Info
            </Link>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/jail-info'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/jail-info'
            >
              Jail Information
            </Link>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/apex'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/apex'
            >
              Apex Monitoring
            </Link>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/about-us'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/about-us'
            >
              About Us
            </Link>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/contact-us'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/contact-us'
            >
              Contact Us
            </Link>
            <Link
              as={ReactLink}
              variant={
                location.pathname === '/faq'
                  ? 'headerLinkSelected'
                  : 'headerLink'
              }
              to='/faq'
            >
              FAQ
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  } else {
    return (
      <Box
        pos='fixed'
        top={0}
        w='100%'
        h='80px'
        bgColor='Brand.Penn'
        px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
        zIndex={5}
      >
        <Flex h='100%' alignItems='center' justify='space-between'>
          <Flex as={ReactLink} to='/' gap='1rem' h='100%' alignItems='center'>
            <Image src={logoSM} h='72px' />
          </Flex>
          <Stack
            h='80px'
            w='40px'
            pos='relative'
            alignItems='center'
            justifyContent='center'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon
              mt='0 !important'
              pos='absolute'
              as={MdClose}
              transform={isMenuOpen ? 'rotate(0turn)' : 'rotate(-.30turn)'}
              opacity={isMenuOpen ? 1 : 0}
              transition='all .5s ease'
              fontSize='48px'
              color='Brand.White'
            />
            <Icon
              mt='0 !important'
              pos='absolute'
              as={MdMenu}
              transform={!isMenuOpen ? 'rotate(0turn)' : 'rotate(.30turn)'}
              opacity={!isMenuOpen ? 1 : 0}
              transition='all .5s ease'
              fontSize='48px'
              color='Brand.White'
            />
          </Stack>
          {isMenuOpen && (
            <Stack
              h='fit-content'
              w='100%'
              gap='1rem'
              px='2rem'
              py='2rem'
              alignItems='end'
              pos='absolute'
              top='80px'
              left='0'
              bgColor='Brand.Penn'
              zIndex={5}
              boxShadow='0 3px 9px black'
            >
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/forms-and-info'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/forms-and-info'
                fontSize='32px'
              >
                Forms & Info
              </Link>
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/jail-info'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/jail-info'
                fontSize='32px'
              >
                Jail Information
              </Link>
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/apex'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/apex'
                fontSize='32px'
              >
                Apex Monitoring
              </Link>
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/about-us'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/about-us'
                fontSize='32px'
              >
                About Us
              </Link>
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/contact-us'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/contact-us'
                fontSize='32px'
              >
                Contact Us
              </Link>
              <Link
                as={ReactLink}
                variant={
                  location.pathname === '/faq'
                    ? 'headerLinkSelected'
                    : 'headerLink'
                }
                to='/faq'
                fontSize='32px'
              >
                FAQ
              </Link>
            </Stack>
          )}
        </Flex>
      </Box>
    );
  }
};

export default Header;
