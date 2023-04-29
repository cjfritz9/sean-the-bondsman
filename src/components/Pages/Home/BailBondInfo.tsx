import React, { useContext } from 'react';
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const BailBondInfo: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);

  return (
    <Stack
      w='100dvw'
      px={['1rem', '1rem', '2rem', '4rem', '8rem', '14rem']}
      py='2rem'
      alignItems='center'
      bgColor='Brand.French'
    >
      <Heading
        size='xl'
        color='black'
        textAlign='center'
        fontFamily='heebo'
        mb='2.5rem'
      >
        ABOUT BAIL BONDS
      </Heading>
      <Flex
        as={isGreaterThan768 ? Flex : Stack}
        maxH={isGreaterThan768 ? undefined : '950px'}
        overflowY={isGreaterThan768 ? undefined : 'scroll'}
        alignItems='center'
        gap={isGreaterThan768 ? '0rem' : '1rem'}
      >
        <Stack
          h={isGreaterThan768 ? '744px' : undefined}
          w={['336px', '480px']}
          mx='1rem'
          bgColor='Brand.White'
          px='2.5rem'
          py='1.5rem'
          borderRadius={[
            '20px 20px 0px 0px',
            '20px 0px 0px 20px',
            '20px 0px 0px 20px'
          ]}
          gap='1rem'
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
            If the defendant fails to appear in court on the scheduled trial
            date, the bondsman can employ a bounty hunter to locate them or take
            legal action against them. Moreover, the bail bond agency can
            recover any unpaid funds by seizing the assets that were pledged as
            collateral.
          </Text>
          <Text letterSpacing='wide'>
            In case of a no-show by the defendant, the bondsman has the right to
            not only engage a bounty hunter to locate the defendant but also to
            sue them for the bail bond money given to the court. Additionally,
            the bail bond agency can reclaim any outstanding amount by claiming
            the assets of the defendant or those who agreed to provide financial
            support to them by signing a contract.
          </Text>
        </Stack>
        <Stack
          w={['336px', '480px']}
          mx='1rem'
          gap='1rem'
          textAlign={['center', 'center', 'right']}
        >
          <Box
            bgColor='Brand.White'
            px='2.5rem'
            py='1.5rem'
            borderRadius={['0px', '0px', '0px 20px 0px 0px']}
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
          <Box bgColor='Brand.White' px='2.5rem' py='1.5rem' borderRadius='0px'>
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
            borderRadius={[
              '0px 0px 20px 20px',
              '0px 0px 20px 20px',
              '0px 0px 20px 0px'
            ]}
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
