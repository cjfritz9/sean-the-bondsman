import React, { SyntheticEvent, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightAddon
} from '@chakra-ui/react';
import { GrSearch } from 'react-icons/gr';
import { JailData, jails1, jails2, jails3, jails4 } from './JailData';

interface SearchProps {
  setSearchResults: (results: any) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchResults }) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    let abort = true;
    setTimeout(() => {
      abort = false;
    }, 500);
    if (!abort) {
      const jails = [...jails1, ...jails2, ...jails3, ...jails4];
      jails.forEach((jail) => {
        Object.keys(jail).forEach((field) => {
          if (field.toLowerCase() === searchInput.toLowerCase()) {
            setSearchResults((prev: any) => [...prev, jail]);
          }
        });
      });
    }
  }, [searchInput]);
  return (
    <Box>
      <Flex pos='relative' alignItems='center'>
        <Input
          w='400px'
          _hover={{ borderColor: 'Brand.Celestial' }}
          _focus={{ bgColor: 'Brand.White' }}
          size='lg'
          bgColor='whiteAlpha.600'
          borderColor='Brand.Penn'
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Icon
          as={GrSearch}
          fontSize='20px'
          _hover={{ transform: 'scale(1.2)' }}
          transition='transform .5s ease'
          pos='absolute'
          right='1rem'
          cursor='pointer'
          zIndex={5}
        />
      </Flex>
    </Box>
  );
};

export default Search;
