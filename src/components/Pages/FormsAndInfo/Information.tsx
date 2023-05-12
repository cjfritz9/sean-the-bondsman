import React, { useContext } from 'react';
import { Box, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { SiteContext } from '../../../context/SiteContext';

const Information: React.FC = () => {
  const { isGreaterThan768 } = useContext<any>(SiteContext);
  return (
    <Box
      overflow='hidden'
      bgColor='Brand.Celestial'
      py={['2rem', '3rem', '5rem']}
      boxShadow='inset 0px 5px 10px white'
    >
      <Stack px='1rem'>
        <Heading variant='heroText' color='white' textShadow='none'>
          Information
        </Heading>
        <Flex
          w='100%'
          justifyContent='center'
          gap={['1rem', '1rem', '2rem', '3rem']}
          flexDir={['column', 'column', 'row', 'row']}
        >
          <Stack maxW={['100%', '100%', '240px', '240px', '320px']}>
            <Heading
              variant='iwtTitle'
              color='black'
              textAlign={['center', 'center', 'right']}
            >
              Bonds
            </Heading>
            <Text
              textAlign={['center', 'center', 'right']}
              color='white'
              fontSize={['12px', '14px', '14px', '16px']}
            >
              Bail bonds are a type of financial guarantee that allows a person
              who has been arrested and charged with a crime to be released from
              custody until their court date. When a person is arrested, a bail
              amount is set by the court, and the defendant has the option of
              paying the full amount to secure their release. However, many
              people cannot afford to pay the full bail amount, which is where
              bail bonds come in. A bail bond is a contract between the
              defendant, a bail bondsman, and the court, in which the bail
              bondsman agrees to pay the full bail amount on behalf of the
              defendant in exchange for a fee, usually 10% of the bail amount.
              The defendant is then released from custody, and the bail bondsman
              is responsible for ensuring that the defendant appears in court
              for all scheduled hearings.
            </Text>
          </Stack>
          <Divider
            h={isGreaterThan768 ? '600px' : '1px'}
            orientation={isGreaterThan768 ? 'vertical' : 'horizontal'}
          />
          <Stack maxW={['100%', '100%', '240px', '240px', '320px']}>
            <Heading variant='iwtTitle' color='black' textAlign='center'>
              Recoup
            </Heading>
            <Text
              textAlign='center'
              letterSpacing='wide'
              color='white'
              fontSize={['12px', '14px', '14px', '16px']}
            >
              Bail bond companies are licensed by the state and regulated by the
              Department of Insurance. They are required to follow specific
              guidelines regarding fees, advertising, and the handling of client
              funds. The fee charged by a bail bond company is usually
              non-refundable and represents the company's fee for posting the
              bail bond. The bail bondsman may also require collateral, such as
              a house or car, to secure the bond. This is because if the
              defendant fails to appear in court, the bail bondsman is
              responsible for paying the full bail amount, and they will use the
              collateral to cover their losses.
            </Text>
          </Stack>
          <Divider
            h={isGreaterThan768 ? '600px' : '1px'}
            orientation={isGreaterThan768 ? 'vertical' : 'horizontal'}
          />
          <Stack maxW={['100%', '100%', '240px', '240px', '320px']}>
            <Heading
              variant='iwtTitle'
              color='black'
              textAlign={['center', 'center', 'left']}
            >
              Don't Worry
            </Heading>
            <Text
              textAlign={['center', 'center', 'left']}
              color='white'
              fontSize={['12px', '14px', '14px', '16px']}
            >
              Sean says, "I know you think of a bondsman as someone who gets
              people out of jail. What I really do is, sort of, switch the
              custody of the defendant from the jail, to my company, Sean the
              Bondsman. As long as they are in our “custody” they have to attend
              ALL the court dates associated with this case, we are on the bond
              together until either the case is officially dropped, pled out or
              they are sentenced, it's not just one court date in most cases. If
              they fail to appear at ANY of those court dates and then compound
              that problem by not contacting me, you don't know where they are,
              we can't find them and they evade arrest, EVENTUALLY the court
              will revoke that bond and the indemnitor (cosigner) is responsible
              for the entire amount of the bond, plus recovery fees as well as
              any applicable extradition fees if they are eventually recovered
              outside this district"
            </Text>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Information;
