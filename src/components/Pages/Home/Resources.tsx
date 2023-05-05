import React, { MutableRefObject, useState } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text
} from '@chakra-ui/react';
import { BsSearch, BsStarFill } from 'react-icons/bs';
import { MdLocalPolice } from 'react-icons/md';
import { GoLaw } from 'react-icons/go';

interface ResourcesProps {
  altImgRef: MutableRefObject<any>;
}

const Resources: React.FC<ResourcesProps> = ({altImgRef}) => {
  const [isHovered, setIsHovered] = useState<0 | 1 | 2 | 3 | 4>(0);

  const resetHover = () => {
    setIsHovered(0);
  };

  const handleExternalNav = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Box w='100%' py={['2rem', '3rem', '6rem']} px='1rem'
    ref={altImgRef}
    >
      <Stack w='100%' alignItems='center' gap='2rem'>
        <Stack>
          <Heading variant='heroSubtext' color='white' mb='2rem'>
            Helpful Resources
          </Heading>
          <Divider />
          <Text color='white' fontSize='20px' textAlign='center'>
            Here are some resources to help you get started
          </Text>
        </Stack>
        <Flex
          justifyContent='center'
          alignItems='start'
          gap='4rem'
          color='Brand.Celestial'
          flexWrap='wrap'
          h={['100%', '100%', '100%','200px']}
        >
          <Stack
            alignItems='center'
            gap='1rem'
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={resetHover}
            cursor='pointer'
            onClick={handleExternalNav.bind(
              this,
              'https://kdocrepository.doc.ks.gov/kasper/'
            )}
          >
            <Icon
              as={BsSearch}
              fontSize={['4xl', '5xl', '7xl']}
              color={isHovered === 1 ? 'white' : 'inherit'}
              transition='color .3s ease'
            />
            <Text
              w={['110px', '110px', '224px']}
              color='white'
              textAlign='center'
              fontSize={isHovered === 1 ? '24px' : ['16px', '18px', '20px']}
              transition='font-size .3s ease'
            >
              Inmate Search
            </Text>
          </Stack>
          <Stack
            alignItems='center'
            gap='1rem'
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={resetHover}
            cursor='pointer'
            onClick={handleExternalNav.bind(
              this,
              'https://www.topeka.org/tpd/'
            )}
          >
            <Icon
              as={MdLocalPolice}
              fontSize={['4xl', '5xl', '7xl']}
              color={isHovered === 2 ? 'white' : 'inherit'}
              transition='color .3s ease'
            />
            <Text
              w={['110px', '110px', '224px']}
              color='white'
              textAlign='center'
              fontSize={isHovered === 2 ? '24px' : ['16px', '18px', '20px']}
              transition='font-size .3s ease'
            >
              Topeka Police Department
            </Text>
          </Stack>
          <Stack
            alignItems='center'
            gap='1rem'
            onMouseEnter={() => setIsHovered(3)}
            onMouseLeave={resetHover}
            cursor='pointer'
            onClick={handleExternalNav.bind(
              this,
              'http://www.shawneesheriff.org/sh/'
            )}
          >
            <Icon
              as={BsStarFill}
              fontSize={['4xl', '5xl', '7xl']}
              color={isHovered === 3 ? 'white' : 'inherit'}
              transition='color .3s ease'
            />
            <Text
              w={['110px', '110px', '224px']}
              color='white'
              textAlign='center'
              fontSize={isHovered === 3 ? '24px' : ['16px', '18px', '20px']}
              transition='font-size .3s ease'
            >
              Shawnee County Sheriff
            </Text>
          </Stack>
          <Stack
            alignItems='center'
            gap='1rem'
            onMouseEnter={() => setIsHovered(4)}
            onMouseLeave={resetHover}
            cursor='pointer'
            onClick={handleExternalNav.bind(
              this,
              'https://www.shawneecourt.org'
            )}
          >
            <Icon
              as={GoLaw}
              fontSize={['4xl', '5xl', '7xl']}
              color={isHovered === 4 ? 'white' : 'inherit'}
              transition='color .3s ease'
            />
            <Text
              w={['110px', '110px', '224px']}
              color='white'
              textAlign='center'
              fontSize={isHovered === 4 ? '24px' : ['16px', '18px', '20px']}
              transition='font-size .3s ease'
            >
              Shawnee County Court
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Resources;
