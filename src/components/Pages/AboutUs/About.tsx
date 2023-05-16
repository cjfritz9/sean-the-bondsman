import React from 'react';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

import SeantheBondsman from '../../../assets/SeantheBondsman.webp';

const About: React.FC = () => {
  return (
    <Box py={['2rem', '4rem']} bgColor='Brand.White' px={['1rem', '2rem']}>
      <Heading variant='heroText' color='black' mb='2rem'>
        About Sean the Bondsman
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
            special woman to put up with the long days and nights with a husband
            who is always on call! Before I started in this industry I was
            actually in and out of the Shawnee County DOC myself, from my late
            teens to my early 30s. I have been clean and sober since January
            28th, 2005. I have worked with addicts and alcoholics ever since,
            pursuing my own recovery and helping others to achieve recovery as
            well.
          </Text>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            I joined the Kansas Army National Guard during my Junior year in
            high school. Served 8 years here in Topeka at the National Guard
            Armory as a 45 Bravo, Small Arms Repairman. I was Honorably
            Discharged in 1994 and am proud of my service.
          </Text>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            I've worked as a Case Manager here in Topeka, putting in time with
            persons who were feeling hopeless and/or suicidal, and persons in
            our community struggling with Severe and Persistent Mental Illness,
            Addiction, and homelessness. I know what it's like to be labeled and
            marginalized, I know how unfair and incorrect these labels can be,
            separating us from each other. I've been judged, I've felt hopeless,
            I got the help I needed and I continue to get that help today.
          </Text>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            I'm unusual in the Bail Bonds world because of this and I'm proud of
            the continued recovery the Topeka community helps me achieve. I've
            been in a hole that I didn't know how to get out of, I looked for a
            way out and I'm grateful others showed me the way..
          </Text>
          <Text textAlign={['center', 'center', 'center', 'center', 'left']}>
            We offer a “free consultation”, but I hope to be more comprehensive.
            Sometimes you're just not sure if it is the right time or right
            thing to do to bond someone out of jail. While I can't make that
            decision for you, I can listen and offer a different perspective.
            Our jails are the single largest housing units for addicts and the
            mentally ill. Not just criminals, but our friends, family, and our
            loved ones. It's not an easy decision to make. It's always nice to
            have choices. Thank you for giving Sean The Bondsman your
            consideration.
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default About;
