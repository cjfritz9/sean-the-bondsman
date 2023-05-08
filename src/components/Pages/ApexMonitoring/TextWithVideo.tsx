import React from 'react';
import { AspectRatio, Flex, Heading, Stack, Text } from '@chakra-ui/react';

const TextWithVideo: React.FC = () => {
  return (
    <Flex
      flexDir={['column-reverse', 'column-reverse', 'row']}
      px='1rem'
      py='4rem'
      gap={['2rem', '3rem', '4rem', '6rem']}
      alignItems='center'
      justifyContent='center'
      bgColor='Brand.White'
    >
      <Stack maxW='400px'>
        <Heading variant='iwtTitle' textAlign={['center', 'center', 'left']}>
          About Apex
        </Heading>
        <Text textAlign={['center', 'center', 'left']}>
          We work with Apex Monitoring, a trusted partner in the field of
          electronic monitoring, to provide our clients with reliable and
          effective solutions to help them stay out of jail while on bail.
          Through our partnership with Apex Monitoring, we offer a range of
          electronic monitoring services to help our clients comply with their
          bail conditions and stay out of jail. Our advanced monitoring systems
          include GPS tracking, alcohol and drug testing, and home confinement
          monitoring, among others.
        </Text>
      </Stack>
      <Stack alignItems='center' justifyContent='center'>
        <AspectRatio
          w={['350px', '420px', '420px', '560px']}
          h={['200px', '240px', '240px', '320px']}
        >
          <iframe
            src='https://www.youtube.com/embed/o63xUydVypI'
            title='APEX MONITORING SYSTEMS - Shot with Lumix G7 - 4K'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
    </Flex>
  );
};

export default TextWithVideo;
