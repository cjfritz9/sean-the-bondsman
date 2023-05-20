import React, { useContext, useRef, useState } from 'react';
import { Button, Flex, Heading, Stack, useToast } from '@chakra-ui/react';
import { jails1, jails2, jails3, jails4, JailData } from './JailData';
import JailInfoCard from './JailInfoCard';
import Search from './Search';
import { SiteContext } from '../../../context/SiteContext';

const JailInfoWrapper: React.FC = () => {
  const [searchResults, setSearchResults] = useState<JailData[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  const toast = useToast();
  const toastIdRef = useRef<any>();

  const handleCall = (number: string) => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isGreaterThan768) {
      navigator.clipboard.writeText(number);
      toastIdRef.current = toast({
        title: 'Phone Number Copied',
        variant: 'top-accent',
        status: 'info',
        duration: 5000,
        isClosable: true
      });
    } else {
      window.open(`tel:${number}`);
    }
  };

  const handleMap = (address: string) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}`,
      '_blank'
    );
  };

  return (
    <Stack
      minH='840px'
      w='100%'
      py={['2rem', '3rem', '6rem']}
      alignItems='center'
      bgColor='Brand.French'
      gap='2rem'
    >
      <Stack>
        <Heading variant='iwtTitle'>Shawnee County Adult Detention</Heading>
        <Flex
          flexDir={['column', 'column', 'row']}
          gap={['1rem', '1rem', '0']}
          justifyContent='space-between'
        >
          <Button
            _active={{ bgColor: '', transform: 'scale(0.98)' }}
            _hover={{ bgColor: '', filter: 'brightness(1.1)' }}
            w={['100%', '100%', 'fit-content']}
            bgColor='#1BAF71'
            onClick={() => handleCall('785-251-5000')}
          >
            785-251-5000
          </Button>
          <Button
            _active={{ bgColor: '', transform: 'scale(0.98)' }}
            _hover={{ bgColor: '', filter: 'brightness(1.1)' }}
            w={['100%', '100%', 'fit-content']}
            bgColor='#4285F4'
            onClick={() => handleMap('501 SE 8th Ave, Topeka, KS 66607')}
          >
            501 SE 8th Ave, Topeka, KS 66607
          </Button>
        </Flex>
      <Search
        setSearchResults={setSearchResults}
        setSearchLoading={setSearchLoading}
        setNoResults={setNoResults}
      />
      </Stack>
      <Flex
        flexWrap='wrap'
        w='100%'
        gap={isGreaterThan768 ? '.5rem' : '0'}
        justifyContent='center'
      >
        {noResults ? (
          <Heading>No Results</Heading>
        ) : searchResults.length ? (
          <Stack>
            {searchResults.map((result: JailData, i) => {
              return (
                <JailInfoCard
                  key={i}
                  name={result.name}
                  address={result.address}
                  phone={result.phone}
                  isSearchLoading={searchLoading}
                />
              );
            })}
          </Stack>
        ) : (
          <>
            <Stack>
              {jails1.map((jail: JailData, i) => {
                return (
                  <JailInfoCard
                    key={i}
                    name={jail.name}
                    address={jail.address}
                    phone={jail.phone}
                    isSearchLoading={searchLoading}
                  />
                );
              })}
            </Stack>
            <Stack>
              {jails2.map((jail: JailData, i) => {
                return (
                  <JailInfoCard
                    key={i}
                    name={jail.name}
                    address={jail.address}
                    phone={jail.phone}
                    isSearchLoading={searchLoading}
                  />
                );
              })}
            </Stack>
            <Stack>
              {jails3.map((jail: JailData, i) => {
                return (
                  <JailInfoCard
                    key={i}
                    name={jail.name}
                    address={jail.address}
                    phone={jail.phone}
                    isSearchLoading={searchLoading}
                  />
                );
              })}
            </Stack>
            <Stack>
              {jails4.map((jail: JailData, i) => {
                return (
                  <JailInfoCard
                    key={i}
                    name={jail.name}
                    address={jail.address}
                    phone={jail.phone}
                    isSearchLoading={searchLoading}
                  />
                );
              })}
            </Stack>
          </>
        )}
      </Flex>
    </Stack>
  );
};

export default JailInfoWrapper;
