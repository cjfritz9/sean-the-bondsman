import React, { useState } from 'react';
import { Flex, Heading, Icon, Input, Spinner, Stack } from '@chakra-ui/react';
import { jails1, jails2, jails3, jails4, JailData } from './JailData';
import JailInfoCard from './JailInfoCard';
import Search from './Search';

const JailInfoWrapper: React.FC = () => {
  const [searchResults, setSearchResults] = useState<JailData[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  return (
    <Stack
      py={['2rem', '3rem', '6rem']}
      w='100%'
      alignItems='center'
      bgColor='Brand.French'
      gap='2rem'
    >
      <Search
        setSearchResults={setSearchResults}
        setSearchLoading={setSearchLoading}
        setNoResults={setNoResults}
      />
      <Flex w='100%' gap='2rem' justifyContent='center'>
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
