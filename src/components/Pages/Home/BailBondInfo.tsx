import React, { useContext } from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const BailBondInfo: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  return (
    <Stack
      w='100dvw'
      px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      py='4rem'
      alignItems='center'
      bgColor='Brand.Celestial'
    >
      <Heading
        size='xl'
        color='black'
        textAlign='center'
        fontFamily='Kanit, sans-serif'
        mb='2.5rem'
      >
        ABOUT BAIL BONDS
      </Heading>
      <Flex
        as={isGreaterThan768 ? Flex : Stack}
        maxH={isGreaterThan768 ? undefined : '450px'}
        overflowY={isGreaterThan768 ? undefined : 'scroll'}
        alignItems='center'
        gap={isGreaterThan768 ? '0rem' : '1rem'}
      >
        <Stack
          h={isGreaterThan768 ? '768px' : undefined}
          w={['336px', '480px']}
          mx='1rem'
          justifyContent='start'
          bgColor='Brand.White'
          px='2.5rem'
          py='1.5rem'
          borderRadius='8px'
          fontSize={['14px', '14px', '16px']}
          gap={['1rem', '1rem', '2rem']}
          textAlign={['center', 'center', 'left']}
        >
          <Text letterSpacing='wide'>
            When a person who is imprisoned cannot afford to pay the bail amount
            set by the judge, they may turn to a bail bond agency for help. A
            bail bondsman can assist in raising the funds through various means,
            such as using an individual's property as collateral. If the
            defendant has insufficient assets, the bail bondsman may also secure
            the property of their family members.
          </Text>
          <Text letterSpacing='wide'>
            A bail bondsman is a professional who posts bail on behalf of a
            defendant. Bail bondsmen charge a fee, which is a percentage of the
            bail amount. In most cases, bail bondsmen will require collateral
            before they post bail. This can be in the form of property, cash or
            investments.
          </Text>
          <Text letterSpacing='wide'>
            If the defendant fails to appear for their court date, the bail
            bondsman will be responsible for paying the bail amount to the
            court. The bail bond contract will also stipulate that the bail
            bondsman has the right to apprehend and surrender the defendant to
            authorities in order to recoup their losses.
          </Text>
        </Stack>
        <Stack
          w={['336px', '480px']}
          mx='1rem'
          gap='1rem'
          textAlign={['center', 'center', 'left']}
          fontSize={['14px', '14px', '16px']}
        >
          <Box
            bgColor='Brand.White'
            px='2.5rem'
            py='1.5rem'
            borderRadius='8px'
          >
            <Text letterSpacing='wide'>
              Municipal courts issue City Bonds that provide two options for
              payment: either pay the entire cash amount to the jail or pay only
              10% of the surety bond with a bondsman. At the City of Topeka
              Municipal Court, you have the freedom to choose between paying the
              full cash amount directly to the jail or opting to pay the surety
              amount to the bondsman.
            </Text>
          </Box>
          <Box
            bgColor='Brand.White'
            px='2.5rem'
            py='1.5rem'
            borderRadius='8px'
          >
            <Text letterSpacing='wide'>
              The district court is responsible for granting County Bonds, which
              can be either cash or a surety amount. If you have been granted a
              County Bond, your loved ones have two payment options: they can
              either pay the full cash amount to the jail, or pay the bondsman
              the surety amount, which is typically 10% of the total bond.
            </Text>
          </Box>
          <Box
            bgColor='Brand.White'
            px='2.5rem'
            py='1.5rem'
            borderRadius='8px'
          >
            <Text letterSpacing='wide'>
              An ORCD bond or Own Recognizance Cash Deposit bond involves paying
              the jail directly. In case the person fails to appear before the
              judge, the OCRD bond is forfeited to the court. If you are granted
              an OR bond and released from jail, it is crucial to show up in
              court. Failure to do so may result in the forfeiture of the bond
              amount and the issuance of a bench warrant.
            </Text>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default BailBondInfo;
