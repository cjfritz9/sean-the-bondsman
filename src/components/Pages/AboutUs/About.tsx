import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import SeantheBondsman from '../../../assets/SeantheBondsman.webp';

const About: React.FC = () => {
  return (
    <Box py={['2rem', '4rem']} bgColor='Brand.White' px={['1rem', '2rem']}>
      <Heading
        variant='heroText'
        color='black'
        mb='2rem'
      >
        Meet Sean the Bondsman
      </Heading>
      <Flex
        flexDir={['column', 'column', 'column', 'column', 'row']}
        w='100%'
        gap={['2rem', '2rem', '2rem', '4rem']}
        justifyContent='center'
        alignItems='center'
      >
        <Image
          src={SeantheBondsman}
          h={['320px', '440px', '540px', '640px']}
          w={['320px', '440px', '540px', '640px']}
        />
        <Stack w={['320px', '440px', '540px', '600px']} gap='1rem'>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            I started working in the Bail Bonds industry in 2008. It's something
            I thoroughly enjoy and thank goodness I married wisely, it takes a
            special woman to put up with the long days and nights and a husband
            who is always on call! Before I started in this endeavor I was
            actually in and out of the Shawnee County DOC myself, from my late
            teens to my early 30s. I have been clean and sober since January
            28th, 2005. I have worked with addicts and alcoholics ever since,
            working on staying clean myself and helping others work toward their
            recovery as well.
          </Text>
          <Text>
            I've worked as a Case Manager here in Topeka, putting in time with
            persons who were suicidal and feeling hopeless, and persons in our
            community struggling with Severe and Persistent Mental Illness,
            Addiction, and homelessness. I know what it's like to be labeled and
            marginalized and I know how unfair and incorrect these labels can
            be, separating us from each other. I've been judged, I've felt
            hopeless, I got the help I needed and I continue to get that help
            today.
          </Text>
          <Text>
            I'm unusual in the Bail Bonds world because of this and I'm proud of
            the continued recovery the Topeka community helps me achieve. I've
            been in a hole that I didn't know how to get out of, I found a way
            out. I'm grateful.
          </Text>
          <Text>
            I know we offer a “free consultation”, and I hope to be more
            comprehensive. Sometimes you're just not sure if it is the right
            time or right thing to do to bond someone out of jail. While I can't
            make that decision for you, I can listen and offer a different
            perspective. Our jails are the single largest housing units for
            addicts and the mentally ill. Not just criminals, but our friends
            and family, your loved ones. It's not always an easy decision to
            make.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default About;
