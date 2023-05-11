import React, { useContext } from 'react';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const GetStartedBanner: React.FC = () => {
  const { docusignLink } = useContext<any>(SiteContext);

  const handleNav = () => {
    window.open(docusignLink, '_blank');
  };

  return (
    <Stack
      w='100dvw'
      gap='2rem'
      px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      py='2rem'
      alignItems='center'
    >
      <Heading variant='heroText'>Get Started</Heading>
      <Heading
        size='lg'
        color='Brand.White'
        fontFamily='inherit'
        textAlign='center'
        textShadow='0 0 3px black'
      >
        Our forms can be filled out online - bail your loved one out now!
      </Heading>
      <Button variant='altButton' fontSize='20px' onClick={handleNav}>
        GO
      </Button>
    </Stack>
  );
};

export default GetStartedBanner;
