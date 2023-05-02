import React, { useState } from 'react';
import { Flex, Icon, Input, Stack } from '@chakra-ui/react';
import { jails1, jails2, jails3, jails4, JailData } from './JailData';
import JailInfoCard from './JailInfoCard';
import Search from './Search';

const JailInfoWrapper: React.FC = () => {
  const [searchResults, setSearchResults] = useState<JailData[]>([]);
  return (
    <Stack w='100%' alignItems='center' bgColor='Brand.French' gap='2rem'>
      <Search
        setSearchResults={setSearchResults}
      />
      <Flex w='100%' gap='2rem' justifyContent='center'>
        <Stack>
          {jails1.map((jail: JailData, i) => {
            return (
              <JailInfoCard
                key={i}
                name={jail.name}
                address={jail.address}
                phone={jail.phone}
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
              />
            );
          })}
        </Stack>
      </Flex>
    </Stack>
  );
};

export default JailInfoWrapper;
