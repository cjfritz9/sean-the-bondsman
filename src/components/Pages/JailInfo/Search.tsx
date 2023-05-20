import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Icon,
  Input
} from '@chakra-ui/react';
import { GrSearch } from 'react-icons/gr';
import { jails1, jails2, jails3, jails4 } from './JailData';

interface SearchProps {
  setSearchResults: (results: any) => void;
  setSearchLoading: (loading: boolean) => void;
  setNoResults: (noResults: boolean) => void;
}

//@ts-ignore
const Search: React.FC<SearchProps> = ({
  setSearchResults,
  setSearchLoading,
  setNoResults
}) => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setSearchLoading(true);
    if (searchInput.length === 0 || searchInput.charAt(0) === ' ') {
      setSearchResults([]);
      setSearchLoading(false);
      setNoResults(false);
      return;
    }
    const jails = [...jails1, ...jails2, ...jails3, ...jails4];
    const results = jails.filter((jail) => {
      return jail.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setSearchResults(results);
    if (results.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setSearchLoading(false);
  }, [searchInput]);

  const debounce = (callback: Function, delay = 500) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      setSearchLoading(true);
      timeout = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const updateDebounceText = debounce((text: string) => {
    setSearchInput(text);
  });

  return (
      <Flex pt='1.5rem' w='100%' pos='relative' alignItems='center'>
        <Input
          w='100%'
          _hover={{ borderColor: 'Brand.Celestial' }}
          _focus={{ bgColor: 'Brand.White' }}
          size='lg'
          bgColor='whiteAlpha.600'
          borderColor='Brand.Penn'
          placeholder='Other counties...'
          onChange={(e) => updateDebounceText(e.target.value)}
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
  );
};

export default Search;
