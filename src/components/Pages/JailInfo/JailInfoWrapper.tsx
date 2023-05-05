import React, { useContext, useState } from 'react';
import { Flex, Heading, Stack } from '@chakra-ui/react';
import { jails1, jails2, jails3, jails4, JailData } from './JailData';
import JailInfoCard from './JailInfoCard';
import Search from './Search';
import { SiteContext } from '../../../context/SiteContext';

const JailInfoWrapper: React.FC = () => {
  const [searchResults, setSearchResults] = useState<JailData[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const { isGreaterThan768 } = useContext<any>(SiteContext);
  return (
    <Stack
      minH='840px'
    w='100%'
    py={['2rem', '3rem', '6rem']}
      alignItems='center'
      bgColor='Brand.French'
      gap='2rem'
    >
      <Search
        setSearchResults={setSearchResults}
        setSearchLoading={setSearchLoading}
        setNoResults={setNoResults}
      />
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
